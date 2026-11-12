import { useState } from "react";
import { Check, Copy, FileCode2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/DownloadCTA";
import { AsciiMatrixCanvas } from "@/components/ui/AsciiMatrixCanvas";

const TEXT_PATCH_JSON = `{
  "command": { "action": "add_column", "payload": { "table": "orders", "name": "discount_pct", "ty": "decimal(5,2)" } },
  "range": { "start": { "line": 20, "character": 19 }, "end": { "line": 20, "character": 19 } },
  "byte_start": 342,
  "byte_end": 342,
  "new_text": "\\n  discount_pct decimal(5,2)",
  "created_column": ["orders", "discount_pct"],
  "should_relayout": false,
  "sidecar": "sample.dbml.layout.json",
  "targets": ["crates/app (GPUI)", "crates/cli (Axum+WS)", "vscode-extension (Wasm)"]
}`;

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [showRawDbml, setShowRawDbml] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(TEXT_PATCH_JSON);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="hero"
      className="relative border-b border-border bg-background overflow-hidden"
    >
      {/* Animated Full-Bleed ASCII Character Matrix (pg-regression-radar signature) */}
      <AsciiMatrixCanvas />

      {/* Main Two-Column Architectural Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 px-6 sm:px-10 pt-10 pb-12 sm:pt-14 sm:pb-16 items-center">
        {/* Left Column: Brand Title, Proposition & Single-Row Pill CTAs */}
        <div className="lg:col-span-5 py-2 pr-2 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground leading-[1.08]">
            db-modeling
          </h1>

          <p className="text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-md">
            Visual relational database modeling powered by strict{" "}
            <strong className="font-semibold text-foreground">DBML</strong> &mdash;
            delivering a 1:1 workbench across a{" "}
            <strong className="font-semibold text-foreground">Native Desktop App (GPUI)</strong>,{" "}
            <strong className="font-semibold text-foreground">Interactive Web CLI</strong>, and{" "}
            <strong className="font-semibold text-foreground">VS Code Extension</strong> from one shared Rust core.
          </p>

          <div
            id="downloads"
            className="pt-2 flex flex-wrap items-center gap-2.5"
          >
            <Button asChild variant="default" size="default">
              <a href="#showcase">Try it in your browser</a>
            </Button>

            <DownloadCTA />

            <Button asChild variant="outline" size="default">
              <a href="#architecture">How it works</a>
            </Button>
          </div>
        </div>

        {/* Right Column: Inspector Window Card (Real TextPatch from crates/dbml-wasm) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full rounded-md border border-border bg-card overflow-hidden">
            {/* Inspector Header Bar */}
            <div className="h-9 px-3.5 border-b border-border bg-muted/40 flex items-center justify-between">
              <span className="font-mono text-xs text-foreground font-medium">
                {showRawDbml
                  ? "crates/app/assets/sample.dbml"
                  : "TextPatch · crates/dbml-wasm"}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowRawDbml((v) => !v)}
                  className="h-6 w-6 inline-flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title={
                    showRawDbml
                      ? "Switch to TextPatch JSON"
                      : "Switch to sample.dbml diff view"
                  }
                  aria-label="Toggle between TextPatch JSON and sample.dbml view"
                >
                  {showRawDbml ? (
                    <Info className="w-3.5 h-3.5" />
                  ) : (
                    <FileCode2 className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="h-6 w-6 inline-flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title="Copy TextPatch payload"
                  aria-label="Copy payload to clipboard"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Code Payload: Real TextPatch struct from crates/dbml-wasm/src/types.rs */}
            {!showRawDbml ? (
              <pre className="p-4 sm:p-5 font-mono text-[11.5px] sm:text-xs leading-[1.65] overflow-x-auto tabular-nums text-foreground bg-card">
                <code>
                  {"{\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;action&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;add_column&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;range&quot;
                  </span>
                  {": { "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;start&quot;
                  </span>
                  {": { "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;line&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">20</span>
                  {", "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;character&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">19</span>
                  {" } },\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;byte_start&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">342</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;byte_end&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">342</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;new_text&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;\n  discount_pct decimal(5,2)&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;created_column&quot;
                  </span>
                  {": ["}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;orders&quot;
                  </span>
                  {", "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;discount_pct&quot;
                  </span>
                  {"],\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;should_relayout&quot;
                  </span>
                  {": "}
                  <span className="text-signal font-semibold">false</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;syntaxTree&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;rowan::SyntaxNode (preserves_comments_and_formatting)&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;sidecar&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;sample.dbml.layout.json (deterministic sorted keys)&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;targets&quot;
                  </span>
                  {": ["}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;Desktop GPUI&quot;
                  </span>
                  {", "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;CLI HTTP+WS&quot;
                  </span>
                  {", "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;VS Code VSIX&quot;
                  </span>
                  {"]\n}"}
                </code>
              </pre>
            ) : (
              <pre className="p-4 sm:p-5 font-mono text-[11.5px] sm:text-xs leading-[1.65] overflow-x-auto tabular-nums text-foreground bg-card">
                <code>
                  <span className="text-muted-foreground">
                    {"// Example: simple e-commerce (100% compatible with dbdiagram.io)\n"}
                  </span>
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">
                    Table
                  </span>{" "}
                  <span className="text-foreground font-semibold">orders</span>{" "}
                  {"{\n"}
                  {"  id "}
                  <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    [pk]
                  </span>
                  {"\n"}
                  {"  user_id "}
                  <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    [ref: &gt; users.id, not null]
                  </span>
                  {"\n"}
                  {"  status "}
                  <span className="text-sky-700 dark:text-sky-400">
                    varchar(20)
                  </span>
                  {"\n"}
                  {"  placed_at "}
                  <span className="text-sky-700 dark:text-sky-400">
                    timestamp
                  </span>
                  {"\n"}
                  <span className="bg-signal-soft text-signal px-1 -mx-1 inline-block w-full">
                    {"+ discount_pct decimal(5,2)"}
                  </span>
                  {"\n}\n\n"}
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">
                    TableGroup
                  </span>{" "}
                  <span className="text-foreground font-semibold">sales</span>{" "}
                  <span className="text-muted-foreground">[color: #3b82f6]</span>{" "}
                  {"{ orders · order_items }"}
                </code>
              </pre>
            )}
          </div>

          <p className="mt-3 text-xs text-muted-foreground bg-background/90 px-2 py-0.5 rounded-sm">
            What <code className="font-mono text-foreground">apply_command</code>{" "}
            emits in Rust &amp; WebAssembly. See the{" "}
            <a
              href="#opensource"
              className="text-signal font-medium hover:underline"
            >
              workspace crates
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
