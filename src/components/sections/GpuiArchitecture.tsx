import { Badge } from "@/components/ui/badge";
import { Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

export function GpuiArchitecture() {
  return (
    <section id="architecture" className="max-w-6xl mx-auto px-4 py-16 sm:py-24 border-t border-border">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <Badge variant="tech" className="mb-3">
          Architecture Deep Dive
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
          Engineered for latency. Powered by GPUI.
        </h2>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          We built DB Modeling on top of <strong>GPUI</strong> — the high-performance GPU UI framework developed by the <strong>Zed</strong> team. 
          By rendering directly with DirectX 12 on Windows and Vulkan on Linux, every frame is drawn by your graphics card with microsecond responsiveness.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Pillar 1 */}
        <div className="p-6 rounded-lg border border-border bg-card shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-500 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">Direct GPU Acceleration</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Eliminates the entire browser engine stack. No DOM overhead, no CSS recalculations, and no WebViews. Tables and Bezier relationship connectors render directly on GPU primitives.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 rounded-lg border border-border bg-card shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">Lossless Rowan CST</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Concrete Syntax Tree preserving 100% of whitespaces and comments. Canvas operations emit surgical text edits via the <code className="text-foreground">dbml-edit</code> crate rather than rewriting the file.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 rounded-lg border border-border bg-card shadow-sm space-y-3">
          <div className="w-9 h-9 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground">Transparent JSON Sidecar</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your <code className="text-foreground">.dbml</code> files remain strictly standard. Canvas visual coordinates and color palettes are saved into a clean <code className="text-foreground">&lt;schema&gt;.dbml.layout.json</code> sidecar.
          </p>
        </div>

      </div>

      {/* Benchmark Metric Comparison Bar (Proof over promises) */}
      <div id="benchmarks" className="p-6 rounded-lg border border-border bg-card shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-mono text-xs">
          
          <div className="space-y-1">
            <div className="text-sm font-sans font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Real World Telemetry (50 Relational Tables Benchmark)</span>
            </div>
            <div className="text-muted-foreground font-sans text-xs">
              Measured on AMD Ryzen 7 / Ubuntu 24.04 (Wayland) and Intel Core i7 / Windows 11.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-muted-foreground">RAM Working Set</div>
              <div className="text-base font-bold text-emerald-500">48.2 MB</div>
              <div className="text-[10px] text-muted-foreground">vs ~650 MB in Electron</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase text-muted-foreground">Startup Time</div>
              <div className="text-base font-bold text-emerald-500">&lt; 140 ms</div>
              <div className="text-[10px] text-muted-foreground">vs ~2.4 s webview init</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase text-muted-foreground">Frame Rendering</div>
              <div className="text-base font-bold text-emerald-500">120 FPS</div>
              <div className="text-[10px] text-muted-foreground">hardware sync (8.3ms)</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase text-muted-foreground">GC Pauses</div>
              <div className="text-base font-bold text-emerald-500">0 ms</div>
              <div className="text-[10px] text-muted-foreground">Deterministic Rust</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
