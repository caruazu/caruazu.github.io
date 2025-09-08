// components/Layout.tsx
"use client";

import { useEffect, useRef } from "react";

type Grid = Uint8Array;

export default function Layout({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(true);
  const darkRef = useRef<boolean>(false);
  const gridRef = useRef<Grid | null>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const lastStepRef = useRef(0);

  // --- helpers ---
  const isDarkNow = () => {
    // suporta tanto darkMode: 'class' (classe .dark no <html>)
    // quanto darkMode: 'media' (preferência do SO)
    const htmlHasDark = document.documentElement.classList.contains("dark");
    const mediaDark =
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
    return htmlHasDark || mediaDark;
  };

  const seedGrid = (cols: number, rows: number, density = 0.25) => {
    const g = new Uint8Array(cols * rows);
    for (let i = 0; i < g.length; i++) g[i] = Math.random() < density ? 1 : 0;
    return g;
  };

  const idx = (x: number, y: number, cols: number) => y * cols + x;

  const step = (grid: Grid, cols: number, rows: number): Grid => {
    const next = new Uint8Array(grid.length);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let n = 0;
        // vizinhança de Moore (com wrap toroidal para ficar “infinito”)
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const xx = (x + dx + cols) % cols;
            const yy = (y + dy + rows) % rows;
            n += grid[idx(xx, yy, cols)];
          }
        }
        const here = grid[idx(x, y, cols)];
        // regras clássicas B3/S23
        next[idx(x, y, cols)] = here
          ? n === 2 || n === 3
            ? 1
            : 0
          : n === 3
          ? 1
          : 0;
      }
    }
    return next;
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    grid: Grid,
    cols: number,
    rows: number,
    cell: number,
    gap: number
  ) => {
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const alive = darkRef.current
      ? "rgba(255,255,255,0.65)"
      : "rgba(0,0,0,0.55)";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // opcional: leve “ruído” de grade sutil (apenas no light, quase invisível no dark)
    if (!darkRef.current) {
      ctx.fillStyle = "rgba(0,0,0,0.03)";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          ctx.fillRect(
            Math.floor(x * (cell + gap)) * DPR,
            Math.floor(y * (cell + gap)) * DPR,
            1,
            1
          );
        }
      }
    }

    ctx.fillStyle = alive;
    const stepPx = (cell + gap) * DPR;
    const sizePx = cell * DPR;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (grid[idx(x, y, cols)] === 1) {
          ctx.fillRect(
            Math.floor(x * stepPx),
            Math.floor(y * stepPx),
            sizePx,
            sizePx
          );
        }
      }
    }
  };

  const resize = (canvas: HTMLCanvasElement) => {
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const { innerWidth, innerHeight } = window;

    // tamanho do “pixel” do jogo: ajusta conforme viewport
    // (menor tela -> células maiores; maior -> menores)
    const baseCell = innerWidth < 640 ? 10 : innerWidth < 1024 ? 8 : 6; // px CSS
    const gap = 2; // px CSS de espaçamento (sutil)
    const cell = baseCell;

    // traduz para pixels físicos do canvas
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    canvas.width = Math.floor(innerWidth * DPR);
    canvas.height = Math.floor(innerHeight * DPR);

    const cols = Math.floor(innerWidth / (cell + gap));
    const rows = Math.floor(innerHeight / (cell + gap));

    colsRef.current = cols;
    rowsRef.current = rows;

    // re-seed numa mudança grande de layout
    gridRef.current = seedGrid(cols, rows, 0.28);

    return { cell, gap };
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let { cell, gap } = resize(canvas);

    // detecta e observa modo escuro
    darkRef.current = isDarkNow();

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const mediaListener = () => (darkRef.current = isDarkNow());
    media?.addEventListener?.("change", mediaListener);

    const mo = new MutationObserver(() => (darkRef.current = isDarkNow()));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onResize = () => {
      ({ cell, gap } = resize(canvas));
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      runningRef.current = !document.hidden;
      if (runningRef.current && rafRef.current == null) loop(performance.now());
    };
    document.addEventListener("visibilitychange", onVisibility);

    // loop com passo ~12 fps (suave, não agressivo)
    const targetMs = 1000 / 3;

    const loop = (t: number) => {
      if (!runningRef.current) {
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
      if (t - lastStepRef.current < targetMs) return;
      lastStepRef.current = t;

      const cols = colsRef.current;
      const rows = rowsRef.current;
      let grid = gridRef.current!;
      grid = step(grid, cols, rows);
      gridRef.current = grid;
      draw(ctx, grid, cols, rows, cell, gap);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      media?.removeEventListener?.("change", mediaListener);
      mo.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 overflow-hidden">
      {/* canvas do Game of Life (fundo) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10"
        aria-hidden
      />
      {/* conteúdo */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
