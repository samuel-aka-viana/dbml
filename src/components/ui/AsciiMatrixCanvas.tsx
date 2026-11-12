import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

const STREAM_WORD = "DBMLROWANCSTSYNCSCHEMALAYOUTGPUIWASM";

/**
 * Full-bleed animated ASCII topographical matrix modeled after pg-regression-radar.
 * Renders a grid of monospace characters (`.`, `:`, `-`, `+`, `|`, and streaming
 * `DBMLROWANCST...` tokens) modulated by a drifting multi-octave wave field.
 * Automatically pauses when offscreen or when `prefers-reduced-motion` is active.
 */
export function AsciiMatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellW = 7.2;
    const cellH = 12.0;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let rafId: number | null = null;
    let isVisible = true;
    let pointerX = -1000;
    let pointerY = -1000;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let prefersReducedMotion = reducedMotionQuery.matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;
      cols = Math.ceil(width / cellW);
      rows = Math.ceil(height / cellH);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = '500 10px "Geist Mono", "JetBrains Mono", monospace';
      ctx.textBaseline = "top";
    };

    const drawFrame = (timeMs: number) => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const t = timeMs * 0.0012;
      const isDark = resolvedTheme === "dark";

      const baseLowColor = isDark
        ? "rgba(244, 244, 245, 0.10)"
        : "rgba(17, 17, 19, 0.11)";
      const baseMidColor = isDark
        ? "rgba(244, 244, 245, 0.19)"
        : "rgba(17, 17, 19, 0.20)";
      const baseHighColor = isDark
        ? "rgba(244, 244, 245, 0.28)"
        : "rgba(17, 17, 19, 0.30)";
      const signalPulseColor = isDark
        ? "rgba(239, 68, 68, 0.42)"
        : "rgba(185, 28, 28, 0.36)";

      for (let r = 0; r < rows; r++) {
        const y = r * cellH;
        const ny = r / Math.max(rows, 1);

        for (let c = 0; c < cols; c++) {
          const x = c * cellW;
          const nx = c / Math.max(cols, 1);

          // Calm exclusion zone directly behind the left hero text block so copy stays 100% crisp
          const inLeftCopyZone =
            nx > 0.02 && nx < 0.47 && ny > 0.14 && ny < 0.86;
          if (inLeftCopyZone) {
            continue;
          }

          // Top ruler band (rows 0..3): continuous drifting technical telemetry tape
          if (r < 4) {
            const rulerWave =
              Math.sin(c * 0.14 - t * 2.2 + r * 0.9) +
              Math.cos(c * 0.05 + t * 1.1);
            let ch = ".";
            if (rulerWave > 1.35) {
              ch = STREAM_WORD[(c + r * 7 + Math.floor(t * 4)) % STREAM_WORD.length];
              ctx.fillStyle = baseHighColor;
            } else if (rulerWave > 0.7) {
              ch = (c + r) % 2 === 0 ? "+" : "|";
              ctx.fillStyle = baseMidColor;
            } else if (rulerWave > 0.1) {
              ch = ":";
              ctx.fillStyle = baseLowColor;
            } else {
              ch = ".";
              ctx.fillStyle = baseLowColor;
            }
            ctx.fillText(ch, x, y);
            continue;
          }

          // Multi-octave drifting topographical wave field
          const w1 = Math.sin(c * 0.09 - t * 1.35 + r * 0.12);
          const w2 = Math.cos(c * 0.06 + r * 0.17 - t * 0.95);
          const w3 = Math.sin((c - r) * 0.08 + t * 1.1);

          // Attract clusters across the open right field and center-bottom transition
          const centerClusterBoost =
            Math.exp(
              -(
                Math.pow((nx - 0.56) / 0.16, 2) +
                Math.pow((ny - 0.58) / 0.34, 2)
              )
            ) * 0.88;
          const rightClusterBoost =
            Math.exp(
              -(
                Math.pow((nx - 0.82) / 0.20, 2) +
                Math.pow((ny - 0.52) / 0.36, 2)
              )
            ) * 0.96;
          const topCenterBoost =
            Math.exp(
              -(
                Math.pow((nx - 0.68) / 0.22, 2) +
                Math.pow((ny - 0.20) / 0.18, 2)
              )
            ) * 0.78;

          // Subtle interactive ripple near mouse cursor
          const dx = x - pointerX;
          const dy = y - pointerY;
          const distSq = dx * dx + dy * dy;
          const pointerBoost =
            distSq < 18000 ? (1 - distSq / 18000) * 0.85 : 0;

          const field =
            (w1 + w2 + w3) * 0.33 +
            centerClusterBoost +
            rightClusterBoost +
            topCenterBoost +
            pointerBoost;

          if (field < 0.32) {
            continue;
          }

          let ch = ".";
          if (field > 1.02) {
            const idx =
              (c + r * 11 + Math.floor(t * 3.5)) % STREAM_WORD.length;
            ch = STREAM_WORD[idx];
            // Subtle Signal Crimson highlight on peak wave crests or cursor proximity
            if (field > 1.32 || pointerBoost > 0.35) {
              ctx.fillStyle = signalPulseColor;
            } else {
              ctx.fillStyle = baseHighColor;
            }
          } else if (field > 0.78) {
            const ringChars = "+-|+:";
            ch = ringChars[(c + r + Math.floor(t * 2)) % ringChars.length];
            ctx.fillStyle = baseMidColor;
          } else if (field > 0.52) {
            ch = (c + r) % 2 === 0 ? ":" : "-";
            ctx.fillStyle = baseLowColor;
          } else {
            ch = ".";
            ctx.fillStyle = baseLowColor;
          }

          ctx.fillText(ch, x, y);
        }
      }
    };

    const tick = (now: number) => {
      if (!isVisible || prefersReducedMotion) {
        rafId = null;
        return;
      }
      drawFrame(now);
      rafId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (prefersReducedMotion) {
        drawFrame(2400);
        return;
      }
      if (rafId === null && isVisible) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const stopLoop = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    resize();
    startLoop();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) {
        drawFrame(2400);
      }
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        stopLoop();
        drawFrame(2400);
      } else {
        startLoop();
      }
    };
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    const parentEl = canvas.parentElement;
    const handlePointerMove = (e: MouseEvent) => {
      if (!parentEl) return;
      const rect = parentEl.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };
    const handlePointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };
    parentEl?.addEventListener("mousemove", handlePointerMove);
    parentEl?.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
      parentEl?.removeEventListener("mousemove", handlePointerMove);
      parentEl?.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 w-full h-full z-0"
    />
  );
}
