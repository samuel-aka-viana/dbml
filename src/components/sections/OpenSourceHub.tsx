import { ExternalLink, GitFork, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Keycap } from "@/components/ui/Keycap";

interface CrateInfo {
  name: string;
  desc: string;
  role: string;
  testCmd: string;
}

const CRATES: CrateInfo[] = [
  {
    name: "crates/schema",
    desc: "Pure semantic data model: Table, Column, Ref, Enum, TableGroup, and deterministic IDs.",
    role: "Core Model",
    testCmd: "cargo test -p schema",
  },
  {
    name: "crates/dbml-syntax",
    desc: "Logos high-speed lexer + error-tolerant CST parser built on Rowan with zero UI dependency.",
    role: "Lossless Parser",
    testCmd: "cargo test -p dbml-syntax",
  },
  {
    name: "crates/dbml-analysis",
    desc: "CST-to-Schema projection, real-time diagnostics, foreign-key validation, and completions.",
    role: "Static Analysis",
    testCmd: "cargo test -p dbml-analysis",
  },
  {
    name: "crates/dbml-edit",
    desc: "Translates visual canvas intents into minimal lossless byte-span text patches.",
    role: "Mutation Engine",
    testCmd: "cargo test -p dbml-edit",
  },
  {
    name: "crates/layout",
    desc: "Sugiyama hierarchical auto-layout, overlap removal, and orthogonal edge routing.",
    role: "Graph Geometry",
    testCmd: "cargo test -p layout",
  },
  {
    name: "crates/export",
    desc: "Direct scene rasterization to PNG/JPEG (resvg/tiny-skia) and Mermaid erDiagram output.",
    role: "Export Pipeline",
    testCmd: "cargo test -p export",
  },
];

export function OpenSourceHub() {
  return (
    <section id="opensource" className="bg-background">
      {/* Top Structural Ledger Bar */}
      <div className="px-6 sm:px-8 py-3 border-b border-border bg-card flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="w-2 h-2 bg-signal-strong inline-block shrink-0"
          />
          <span className="text-xs font-bold tracking-tight text-foreground">
            Modular Rust workspace
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
          cargo test --workspace
        </span>
      </div>

      {/* Two-Column Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Open Source Manifesto & Contribution CTAs */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:border-r border-b lg:border-b-0 border-border flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground">
              Built in the open,{" "}
              <strong className="font-bold text-foreground">
                six headless crates
              </strong>
            </h2>

            <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
              Every core capability of DB Modeling is isolated into a headless
              Rust crate with zero UI coupling. Run the entire compiler-grade
              test suite, author SQL dialect exporters, or inspect the Sugiyama
              graph layout engine directly from your terminal.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-mono">
              <span>Command Palette via</span>
              <Keycap>Ctrl+K</Keycap>
              <span>&middot;</span>
              <span>Linux, Windows &amp; macOS</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Button asChild variant="default" size="default">
                <a
                  href="https://github.com/brenoLucasN/db_modeling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Star on GitHub</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="default">
                <a
                  href="https://github.com/brenoLucasN/db_modeling/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Good First Issues</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Exposed 1px Ledger Matrix of Rust Crates */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y divide-border">
          {CRATES.map((crateItem, idx) => (
            <div
              key={crateItem.name}
              className={`p-5 sm:p-6 bg-card/30 hover:bg-card transition-colors flex flex-col justify-between gap-3 ${
                idx % 2 === 0 ? "sm:border-r border-border" : ""
              } ${idx === 0 ? "border-t-0" : ""}`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-foreground text-xs">
                    {crateItem.name}
                  </span>
                  <span className="text-[10px] text-signal bg-signal-soft border border-signal-border px-1.5 py-0.5 rounded-sm">
                    {crateItem.role}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {crateItem.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 font-mono text-[10px] text-muted-foreground">
                $ {crateItem.testCmd}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
