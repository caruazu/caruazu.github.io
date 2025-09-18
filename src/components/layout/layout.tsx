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

  // "mundo" único da página
  const gridRef = useRef<Grid | null>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  const lastStepRef = useRef(0);
  const lastDocRef = useRef({ w: 0, h: 0 }); // largura (clientWidth) e altura (scrollHeight) do documento

  const RESIZE_HEIGHT_THRESHOLD = 24; // px — ignora pequenas oscilações
  const RESIZE_WIDTH_THRESHOLD = 1; // px

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

  // copia estado antigo para novo grid ao redimensionar (preserva o que couber)
  const migrateGrid = (
    oldG: Grid | null,
    oldCols: number,
    oldRows: number,
    newCols: number,
    newRows: number,
    densityNewCells = 0.28
  ) => {
    const g = new Uint8Array(newCols * newRows);
    // primeiro: semente básica
    for (let i = 0; i < g.length; i++)
      g[i] = Math.random() < densityNewCells ? 1 : 0;

    if (oldG) {
      const w = Math.min(oldCols, newCols);
      const h = Math.min(oldRows, newRows);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          g[idx(x, y, newCols)] = oldG[idx(x, y, oldCols)];
        }
      }
    }
    return g;
  };

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

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = alive;
    const stepPx = (cell + gap) * DPR;
    const sizePx = cell * DPR;

    // desenha o "mundo" inteiro (o canvas cobre a página toda e rola junto)
    for (let y = 0; y < rows; y++) {
      const yPx = Math.floor(y * stepPx);
      for (let x = 0; x < cols; x++) {
        if (grid[idx(x, y, cols)] === 1) {
          ctx.fillRect(Math.floor(x * stepPx), yPx, sizePx, sizePx);
        }
      }
    }
  };

  const measureDoc = () => {
    const w = document.documentElement.clientWidth; // largura visível
    const h = document.documentElement.scrollHeight; // altura TOTAL da página
    return { w, h };
  };

  // redimensiona canvas + grid para cobrir a página toda; preserva estado quando possível
  const resizeWorld = (
    canvas: HTMLCanvasElement,
    { reseed }: { reseed: boolean }
  ) => {
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const { w, h } = measureDoc();

    const baseCell = w < 640 ? 10 : w < 1024 ? 8 : 6;
    const gap = 0;
    const cell = baseCell;

    // CSS size: acompanha o contêiner relativo (página inteira)
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    // buffer do canvas em pixels físicos
    canvas.width = Math.ceil(w * DPR);
    canvas.height = Math.ceil(h * DPR);

    const cols = Math.floor(w / (cell + gap));
    const rows = Math.floor(h / (cell + gap));

    // preserva o estado anterior quando possível
    gridRef.current = reseed
      ? seedGrid(cols, rows, 0.28)
      : migrateGrid(
          gridRef.current,
          colsRef.current,
          rowsRef.current,
          cols,
          rows
        );

    colsRef.current = cols;
    rowsRef.current = rows;

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
    let { cell, gap } = resizeWorld(canvas, { reseed: true });
    lastDocRef.current = measureDoc();

    // observa mudanças estruturais no documento (altura total, etc.)
    const ro = new ResizeObserver(() => {
      if (resizeRafRef.current != null)
        cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        resizeRafRef.current = null;

        const { w, h } = measureDoc();
        const { w: lw, h: lh } = lastDocRef.current;

        const widthChanged = Math.abs(w - lw) > RESIZE_WIDTH_THRESHOLD;
        const heightChanged = Math.abs(h - lh) > RESIZE_HEIGHT_THRESHOLD;

        if (!widthChanged && !heightChanged) return;

        lastDocRef.current = { w, h };
        // se a largura mudou bastante, deixo opção de reseed; senão preservo
        ({ cell, gap } = resizeWorld(canvas, { reseed: false }));
      });
    });

    ro.observe(document.documentElement);

    const onResize = () => {
      // mudanças de DPR/viewport ainda passam aqui
      if (resizeRafRef.current != null)
        cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        resizeRafRef.current = null;
        ({ cell, gap } = resizeWorld(canvas, { reseed: false }));
        lastDocRef.current = measureDoc();
      });
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);

    const onVisibility = () => {
      runningRef.current = !document.hidden;
      if (runningRef.current && rafRef.current == null) loop(performance.now());
    };
    document.addEventListener("visibilitychange", onVisibility);

    const targetMs = 60000 / (120 * 2); // 123bpm ~ mesma cadência do seu exemplo

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
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* canvas cobre toda a página e rola com o conteúdo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none [opacity:.03] dark:[opacity:.05]"
        aria-hidden
      />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
