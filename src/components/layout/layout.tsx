// components/Layout.tsx
"use client";

import { useEffect, useRef } from "react";

type Grid = Uint8Array;

export default function Layout({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const resizeRafRef = useRef<number | null>(null);
  const runningRef = useRef(true);
  const darkRef = useRef<boolean>(false);
  const gridRef = useRef<Grid | null>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const lastStepRef = useRef(0);
  const lastViewportRef = useRef({ w: 0, h: 0 });

  const RESIZE_HEIGHT_THRESHOLD = 120; // px — ignora “saltos” pequenos da barra

  // --- helpers ---
  const isDarkNow = () => {
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
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const xx = (x + dx + cols) % cols;
            const yy = (y + dy + rows) % rows;
            n += grid[idx(xx, yy, cols)];
          }
        }
        const here = grid[idx(x, y, cols)];
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
    const alive = darkRef.current ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

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

  // agora aceita "reseed" opcional
  const resize = (
    canvas: HTMLCanvasElement,
    { reseed }: { reseed: boolean }
  ) => {
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const w = window.innerWidth;
    const h = window.innerHeight;

    const baseCell = w < 640 ? 10 : w < 1024 ? 8 : 6;
    const gap = 2;
    const cell = baseCell;

    // CSS size (acompanha viewport)
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    // buffer do canvas em pixels físicos
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);

    const cols = Math.floor(w / (cell + gap));
    const rows = Math.floor(h / (cell + gap));

    colsRef.current = cols;
    rowsRef.current = rows;

    if (reseed || !gridRef.current) {
      gridRef.current = seedGrid(cols, rows, 0.28);
    }
    return { cell, gap };
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    darkRef.current = isDarkNow();

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const mediaListener = () => (darkRef.current = isDarkNow());
    media?.addEventListener?.("change", mediaListener);

    const mo = new MutationObserver(() => (darkRef.current = isDarkNow()));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // primeira medição + seed
    let { cell, gap } = resize(canvas, { reseed: true });
    lastViewportRef.current = { w: window.innerWidth, h: window.innerHeight };

    // resize “esperto”: ignora oscilações pequenas de altura
    const handleResizeMeasured = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { w: lw, h: lh } = lastViewportRef.current;

      const widthChanged = Math.abs(w - lw) > 1;
      const heightChanged = Math.abs(h - lh) > RESIZE_HEIGHT_THRESHOLD;

      if (!widthChanged && !heightChanged) return; // ignora jitter da barra
      lastViewportRef.current = { w, h };

      // reseed só em mudanças “grandes” (ex.: orientação/largura)
      ({ cell, gap } = resize(canvas, { reseed: widthChanged }));
    };

    const onResize = () => {
      if (resizeRafRef.current != null)
        cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        resizeRafRef.current = null;
        handleResizeMeasured();
      });
    };

    window.addEventListener("resize", onResize, { passive: true });
    // orientação geralmente é quando queremos aplicar o resize completo
    window.addEventListener("orientationchange", onResize);

    const onVisibility = () => {
      runningRef.current = !document.hidden;
      if (runningRef.current && rafRef.current == null) loop(performance.now());
    };
    document.addEventListener("visibilitychange", onVisibility);

    const targetMs = 60000 / (120 * 2); //123bpm

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
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      media?.removeEventListener?.("change", mediaListener);
      mo.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-3 dark:opacity-3 h-[100svh] w-screen"
        aria-hidden
      />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
