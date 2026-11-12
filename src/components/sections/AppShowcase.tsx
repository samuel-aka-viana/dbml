import { useRef, useState } from "react";
import { Maximize2, Pause, Play, X } from "lucide-react";

export function AppShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="showcase" className="border-b border-border bg-background">
      {/* Centered Mixed-Weight Editorial Header */}
      <div className="px-6 py-12 sm:py-16 border-b border-border text-center">
        <h2 className="text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground max-w-2xl mx-auto">
          One visual workbench,{" "}
          <strong className="font-bold text-foreground">
            synchronized in real time
          </strong>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Edit in the integrated DBML editor or directly on the canvas &mdash;{" "}
          <code className="font-mono text-foreground">dbml-edit</code> preserves
          every comment and{" "}
          <code className="font-mono text-foreground">layout::route</code>{" "}
          keeps orthogonal relations clean.
        </p>
      </div>

      {/* Live Video Walkthrough of the Real Workbench */}
      <div>
        <div className="h-10 px-4 border-b border-border bg-muted/50 flex items-center justify-between gap-2 font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal-strong" />
            <span className="font-medium text-foreground">
              db-modeling &middot; example.dbml
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:inline">
              (Native GPUI Desktop)
            </span>
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-border bg-card hover:bg-secondary text-[11px] text-foreground transition-colors"
            aria-label={isPlaying ? "Pause demo video" : "Play demo video"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-[#0c0c0e] p-3 sm:p-6">
          <div className="rounded border border-border overflow-hidden bg-[#121215]">
            <video
              ref={videoRef}
              src="/screenshots/video.mp4"
              poster="/screenshots/canvas-overview.png"
              autoPlay
              loop
              muted
              playsInline
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* Real Application Captures (2-Column Architectural Ledger) */}
      <div className="border-t border-border">
        <div className="px-6 py-3 border-b border-border bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Live captures from{" "}
            <code className="font-mono text-foreground">db-modeling</code>{" "}
            running natively on Fedora Linux (GPUI).
          </span>
          <span className="font-mono text-[11px] hidden sm:inline">
            Click any capture to inspect full-screen
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-6 space-y-3">
            <button
              type="button"
              onClick={() =>
                setLightboxSrc({
                  src: "/screenshots/canvas-overview.png",
                  title: "ER Canvas, TableGroups & Orthogonal Routing",
                })
              }
              className="group relative block w-full rounded border border-border overflow-hidden bg-[#121215] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <img
                src="/screenshots/canvas-overview.png"
                alt="DB Modeling desktop app showing the ER canvas with sales and catalog table groups and orthogonal relations"
                className="w-full h-auto block transition-transform duration-200 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-background/90 border border-border font-mono text-[10px] text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3 h-3" />
                Inspect
              </span>
            </button>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground tracking-tight">
                ER Canvas &amp; Orthogonal Routing
              </h3>
              <span className="font-mono text-[11px] text-muted-foreground">
                example.dbml
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full schema explorer (<code className="font-mono">TABLES</code> &amp;{" "}
              <code className="font-mono">RELATIONS</code>),{" "}
              <code className="font-mono">TableGroup</code> bounding boxes, and
              Sugiyama orthogonal edges with{" "}
              <code className="font-mono">1</code> /{" "}
              <code className="font-mono">N</code> cardinality badges.
            </p>
          </div>

          <div className="p-6 space-y-3">
            <button
              type="button"
              onClick={() =>
                setLightboxSrc({
                  src: "/screenshots/editor-inspector.png",
                  title: "Bidirectional DBML Editor & Table Inspector",
                })
              }
              className="group relative block w-full rounded border border-border overflow-hidden bg-[#121215] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <img
                src="/screenshots/editor-inspector.png"
                alt="DB Modeling desktop app showing the integrated DBML code editor, selected orders table, and right property inspector"
                className="w-full h-auto block transition-transform duration-200 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-background/90 border border-border font-mono text-[10px] text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3 h-3" />
                Inspect
              </span>
            </button>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold text-foreground tracking-tight">
                DBML Editor &amp; Table Inspector
              </h3>
              <span className="font-mono text-[11px] text-muted-foreground">
                Ctrl+E &middot; Ctrl+I
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Live bidirectional DBML source editor alongside the visual
              inspector: edit <code className="font-mono">PK</code>,{" "}
              <code className="font-mono">FK</code>,{" "}
              <code className="font-mono">NN</code>, and{" "}
              <code className="font-mono">UQ</code> flags, add columns, or
              recolor tables with lossless{" "}
              <code className="font-mono">dbml-edit</code> patches.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Resolution Screenshot Inspection */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSrc.title}
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full rounded-md border border-border bg-card overflow-hidden"
          >
            <div className="h-10 px-4 border-b border-border bg-muted/50 flex items-center justify-between font-mono text-xs">
              <span className="font-medium text-foreground">
                {lightboxSrc.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxSrc(null)}
                className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={lightboxSrc.src}
              alt={lightboxSrc.title}
              className="w-full h-auto block"
            />
          </div>
        </div>
      )}
    </section>
  );
}
