const TELEMETRY_ROWS = [
  {
    metric: "Working Set RAM (50 tables)",
    nativeValue: "48.2 MB",
    baselineValue: "~650 MB in Electron",
    ratioLabel: "13.4× lighter",
    barPct: "12%",
  },
  {
    metric: "Cold Binary Startup",
    nativeValue: "< 140 ms",
    baselineValue: "~2,400 ms WebView init",
    ratioLabel: "17× faster",
    barPct: "8%",
  },
  {
    metric: "Canvas Frame Budget",
    nativeValue: "8.2 ms (120 Hz)",
    baselineValue: "~42.0 ms DOM layout",
    ratioLabel: "Hardware sync",
    barPct: "19%",
  },
  {
    metric: "Rowan CST Incremental Parse",
    nativeValue: "< 1.4 ms",
    baselineValue: "Full AST re-serialize",
    ratioLabel: "Lossless patch",
    barPct: "6%",
  },
  {
    metric: "Garbage Collection Pauses",
    nativeValue: "0 ms",
    baselineValue: "Non-deterministic GC",
    ratioLabel: "Rust ownership",
    barPct: "2%",
  },
];

export function GpuiArchitecture() {
  return (
    <section id="architecture" className="border-b border-border bg-background">
      {/* Centered Mixed-Weight Editorial Header ("The same thing, for real" parallel) */}
      <div className="px-6 py-12 sm:py-16 border-b border-border text-center">
        <h2 className="text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground max-w-2xl mx-auto">
          The same engine,{" "}
          <strong className="font-bold text-foreground">for real</strong>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Sidecar architecture on the left, real 50-table hardware telemetry on
          the right. Built on Zed&apos;s GPUI framework in Rust 2024.
        </p>
      </div>

      {/* Two-Column Architectural Ledger */}
      <div id="benchmarks" className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Architectural Invariants & Sidecar Specification */}
        <div className="lg:col-span-6 lg:border-r border-b lg:border-b-0 border-border divide-y divide-border flex flex-col justify-between">
          <div className="p-6 sm:p-8 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-signal font-semibold">
                01 &middot; Direct GPU Rendering
              </span>
              <span className="text-muted-foreground">DirectX 12 &amp; Vulkan</span>
            </div>
            <h3 className="text-base font-bold text-foreground tracking-tight">
              No DOM, no CSS layout pass, no WebView wrapper
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              DB Modeling renders tables, ports, and orthogonal relationship
              connectors directly as GPU primitives via GPUI. Pan and zoom scale
              linearly across 500+ relational tables at 120 frames per second.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-signal font-semibold">
                02 &middot; Lossless Rowan CST
              </span>
              <span className="text-muted-foreground">crates/dbml-edit</span>
            </div>
            <h3 className="text-base font-bold text-foreground tracking-tight">
              Surgical byte-span patches preserve every comment
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our error-tolerant parser builds a lossless Concrete Syntax Tree
              that retains every space, newline, and comment token. Canvas
              actions splice only the affected span instead of re-formatting the
              file.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-3 bg-card/50">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-signal font-semibold">
                03 &middot; Transparent JSON Sidecar
              </span>
              <span className="text-muted-foreground">
                &lt;schema&gt;.dbml.layout.json
              </span>
            </div>
            <h3 className="text-base font-bold text-foreground tracking-tight">
              Standard DBML for Git, clean coordinates for the canvas
            </h3>
            <pre className="p-3.5 rounded border border-border bg-card font-mono text-[11px] leading-[1.6] text-foreground overflow-x-auto tabular-nums">
              <code>
                {"// exemplo.dbml.layout.json\n"}
                {"{\n"}
                {'  "version": 1,\n'}
                {'  "viewport": { "panX": 120.0, "panY": 48.0, "zoom": 1.0 },\n'}
                {'  "tables": {\n'}
                {'    "public.orders": { "x": 84.0, "y": 42.0, "color": "#dc2626" },\n'}
                {'    "public.users":  { "x": 84.0, "y": 240.0 }\n'}
                {"  }\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Right Column: Real-World 50-Table Telemetry Ledger */}
        <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-border bg-card/30">
          <div className="px-6 sm:px-8 py-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-foreground">
                Real-World Hardware Telemetry (50 Relational Tables)
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Measured on Ryzen 7 / Ubuntu 24.04 (Wayland) &amp; Core i7 / Windows 11
              </div>
            </div>
            <span className="font-mono text-[11px] text-signal font-semibold tabular-nums">
              120 FPS
            </span>
          </div>

          <div className="divide-y divide-border flex-1">
            {TELEMETRY_ROWS.map((row) => (
              <div key={row.metric} className="px-6 sm:px-8 py-4 space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium text-foreground">
                    {row.metric}
                  </span>
                  <span className="font-mono text-[11px] text-signal font-semibold tabular-nums">
                    {row.ratioLabel}
                  </span>
                </div>

                <div className="flex items-center justify-between font-mono text-xs tabular-nums">
                  <span className="text-foreground font-bold">
                    {row.nativeValue}
                  </span>
                  <span className="text-muted-foreground text-[11px]">
                    {row.baselineValue}
                  </span>
                </div>

                {/* Proportional Bar vs Electron Baseline */}
                <div className="h-1.5 w-full bg-secondary overflow-hidden flex">
                  <div
                    style={{ width: row.barPct }}
                    className="h-full bg-signal-strong"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-8 py-4 bg-signal-soft border-t border-signal-border text-xs flex items-center justify-between font-mono">
            <span className="text-signal font-semibold">
              &rarr; Zero network calls. 100% local execution.
            </span>
            <span className="text-muted-foreground text-[11px]">MIT License</span>
          </div>
        </div>
      </div>
    </section>
  );
}
