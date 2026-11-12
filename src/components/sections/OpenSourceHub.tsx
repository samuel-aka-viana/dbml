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
    desc: "Pure semantic data model: Table, Column, Ref, RefKind (1:1, 1:N, N:1, N:N), and TableGroup.",
    role: "Core Model",
    testCmd: "cargo test -p schema",
  },
  {
    name: "crates/dbml-syntax",
    desc: "logos 0.16 lexer + error-tolerant lossless CST parser built on rowan 0.18 with zero UI coupling.",
    role: "Rowan CST",
    testCmd: "cargo test -p dbml-syntax",
  },
  {
    name: "crates/dbml-analysis",
    desc: "CST-to-Schema semantic projection (analyze), real-time linter diagnostics (lint), and completions.",
    role: "Analysis & Lint",
    testCmd: "cargo test -p dbml-analysis",
  },
  {
    name: "crates/dbml-edit",
    desc: "Semantic operations (add_table, add_column, link_tables, group_tables, format, swap_lines) emitting minimal CST patches.",
    role: "Minimal Patches",
    testCmd: "cargo test -p dbml-edit",
  },
  {
    name: "crates/layout",
    desc: "Sugiyama layered layout (4-pass barycenter), TableGroup cluster packing, and obstacle-avoiding orthogonal route().",
    role: "Sugiyama & Route",
    testCmd: "cargo test -p layout",
  },
  {
    name: "crates/dbml-wasm",
    desc: "wasm-bindgen module exposing parse_and_analyze, apply_command, compute_scene, and 8px rounded SVG path generation.",
    role: "Wasm Bridge",
    testCmd: "cargo test -p dbml-wasm",
  },
  {
    name: "crates/app & crates/cli",
    desc: "Native GPUI desktop app (gpui-kit 0.8) and local Axum HTTP + WebSocket CLI server with notify file watching.",
    role: "Desktop & CLI",
    testCmd: "cargo check -p app -p dbml-cli",
  },
  {
    name: "canvas-web & vscode-extension",
    desc: "Shared web workbench (@dbmodeling/canvas-web) and VS Code Custom Editor VSIX (dbmodeling.editor).",
    role: "Web & VSIX",
    testCmd: "./scripts/sync-build.sh",
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
            Workspace architecture
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
          insta 1.49 snapshots &middot; proptest 1.12
        </span>
      </div>

      {/* Two-Column Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Open Source Manifesto & Contribution CTAs */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:border-r border-b lg:border-b-0 border-border flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground">
              One Rust core,{" "}
              <strong className="font-bold text-foreground">
                eight modular packages
              </strong>
            </h2>

            <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
              Every core capability of{" "}
              <code className="font-mono text-foreground">brenoLucasN/db_modeling</code>{" "}
              is isolated into a headless Rust crate verified with{" "}
              <code className="font-mono text-foreground">insta</code> snapshot
              tests and <code className="font-mono text-foreground">proptest</code>.
              A single script compiles the Rust core to native binaries and
              WebAssembly, syncing Desktop, CLI, and VS Code in one pass.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-mono">
              <span>Command Palette</span>
              <Keycap>Ctrl+K</Keycap>
              <span>&middot;</span>
              <span>Shortcuts</span>
              <Keycap>Ctrl+/</Keycap>
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
                  <span>Issues &amp; PRs</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Exposed 1px Ledger Matrix of All 8 Workspace Modules */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y divide-border">
          {CRATES.map((crateItem, idx) => (
            <div
              key={crateItem.name}
              className={`p-5 bg-card/30 hover:bg-card transition-colors flex flex-col justify-between gap-3 ${
                idx % 2 === 0 ? "sm:border-r border-border" : ""
              } ${idx === 0 ? "border-t-0" : ""}`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 font-mono">
                  <span className="font-semibold text-foreground text-xs">
                    {crateItem.name}
                  </span>
                  <span className="text-[10px] text-signal bg-signal-soft border border-signal-border px-1.5 py-0.5 rounded-sm shrink-0">
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
