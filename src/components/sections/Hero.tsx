import { useState } from "react";
import { Check, Copy, FileCode2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/DownloadCTA";

const ASCII_MATRIX_TOP = [
  "RE::||++:................................................:++||::....+++|::::++||++--++||++--....",
  "....||++:................................................:++||::....+++|::::++||++--++||++--....",
  ".........................................................:++||::....+++|::::ROWANCST::||++--....",
  "........................................................................::::DBMLSYNC::||++--....",
];

const ASCII_MATRIX_CENTER = [
  "         ++++++DBMLROWAN+",
  "      +ROWANCSTDBMLROWANC",
  "     ||SYNCSCHEMAROWANCST",
  "    --DBMLROWANCSTSYNCSCH",
  "   +--ROWANCSTDBML&GPUI++",
  "     ||SYNCSCHEMA120FPS:",
  "     |+DBMLROWANCST||   ",
  "     :--ROWANCST+:      ",
  "    ++--SYNCSCHEMA-     ",
  "   ||+::DBMLROWANCST.   ",
  "  ::++--ROWANCSTDBML+   ",
  "  ++++||SYNCSCHEMAROW   ",
];

const ASCII_MATRIX_BOTTOM_RIGHT = [
  "DBMLROWANCSTDBMLROWANCSTDBMLROWANCST++::",
  "ROWANCSTDBMLROWANCSTDBMLROWANCSTDBML::..",
  "SYNCSCHEMADBMLROWANCSTDBMLROWANCST**::..",
  "DBMLROWANCSTDBMLROWANCSTDBMLROWANCST+-::",
  "ROWANCSTDBMLROWANCSTDBMLROWANCSTDBML+::.",
  "SYNCSCHEMADBMLROWANCSTDBMLROWANCSTDBML:.",
];

const CST_JSON_TEXT = `{
  "document": "exemplo.dbml",
  "sidecar": "exemplo.dbml.layout.json",
  "syntaxTree": "RowanLosslessCST",
  "mutationId": "patch-orders-user-fk-091",
  "statement": "Ref: orders.user_id > users.id [delete: cascade]",
  "status": "Synchronized",
  "preservedTokens": 1.00,
  "cstParseLatencyMs": 0.84,
  "gpuiFrameTimeMs": 8.21,
  "frameRateHz": 120,
  "fullFileRewrite": false,
  "diffSummary": "surgical 48-byte span edit at line 24..25; all comments intact",
  "updatedAt": "2026-11-12T13:00:00Z"
}`;

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [showRawDbml, setShowRawDbml] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(CST_JSON_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="hero"
      className="relative border-b border-border bg-background overflow-hidden"
    >
      {/* Subtle Monospace Character-Matrix Texture (pg-regression-radar signature) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none font-mono text-[10px] leading-[1.15] text-foreground/[0.13] dark:text-foreground/[0.11]"
      >
        <div className="px-2 pt-1.5 overflow-hidden whitespace-pre">
          {ASCII_MATRIX_TOP.join("\n")}
        </div>
        <div className="hidden lg:block absolute left-[36%] bottom-3 whitespace-pre">
          {ASCII_MATRIX_CENTER.join("\n")}
        </div>
        <div className="hidden sm:block absolute right-2 bottom-2 text-right whitespace-pre">
          {ASCII_MATRIX_BOTTOM_RIGHT.join("\n")}
        </div>
      </div>

      {/* Main Two-Column Architectural Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 px-6 sm:px-10 pt-8 pb-12 sm:pt-12 sm:pb-16 items-center">
        {/* Left Column: Brand Title, Proposition & Pill CTAs */}
        <div className="lg:col-span-5 bg-background/90 backdrop-blur-[2px] py-2 pr-2 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground leading-[1.08]">
            db-modeling
          </h1>

          <p className="text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-md">
            Synchronizes visual entity-relationship diagrams and DBML source files
            at 120 FPS &mdash; pinpointing surgical syntax-tree edits in Rust without
            touching your comments or formatting.
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
              <a href="#problem">How it works</a>
            </Button>
          </div>
        </div>

        {/* Right Column: Inspector Window Card */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full rounded-md border border-border bg-card overflow-hidden">
            {/* Inspector Header Bar */}
            <div className="h-9 px-3.5 border-b border-border bg-muted/40 flex items-center justify-between">
              <span className="font-mono text-xs text-foreground font-medium">
                {showRawDbml ? "exemplo.dbml (CST Span)" : "RowanCstMutation"}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowRawDbml((v) => !v)}
                  className="h-6 w-6 inline-flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title={
                    showRawDbml
                      ? "Switch to CST telemetry JSON"
                      : "Switch to lossless DBML diff view"
                  }
                  aria-label="Toggle between CST JSON and DBML patch view"
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
                  title="Copy payload"
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

            {/* Code Payload */}
            {!showRawDbml ? (
              <pre className="p-4 sm:p-5 font-mono text-[11.5px] sm:text-xs leading-[1.65] overflow-x-auto tabular-nums text-foreground bg-card">
                <code>
                  {"{\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;document&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;exemplo.dbml&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;sidecar&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;exemplo.dbml.layout.json&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;mutationId&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;patch-orders-user-fk-091&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;ByteSpan&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">412..460</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;dbmlStatement&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;user_id int [ref: &gt; users.id, not null]&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;status&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;LosslessPatchApplied&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;preservedFormattingRatio&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">1.00</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;cstParseLatencyMs&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">0.84</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;gpuiFrameTimeMs&quot;
                  </span>
                  {": "}
                  <span className="text-sky-700 dark:text-sky-400">8.21</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;fullAstRewrite&quot;
                  </span>
                  {": "}
                  <span className="text-signal font-semibold">false</span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;cstDiffSummary&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;in-place token splice via crates/dbml-edit; 0 comments lost&quot;
                  </span>
                  {",\n"}
                  {"  "}
                  <span className="text-purple-700 dark:text-purple-400">
                    &quot;committedAt&quot;
                  </span>
                  {": "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    &quot;2026-11-12T13:00:00Z&quot;
                  </span>
                  {"\n}"}
                </code>
              </pre>
            ) : (
              <pre className="p-4 sm:p-5 font-mono text-[11.5px] sm:text-xs leading-[1.65] overflow-x-auto tabular-nums text-foreground bg-card">
                <code>
                  <span className="text-muted-foreground">
                    {"// All comments & blank lines survive canvas drags\n"}
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
                  <span className="bg-signal-soft text-signal px-1 -mx-1 inline-block w-full">
                    {"+ user_id int [ref: > users.id, not null]"}
                  </span>
                  {"\n"}
                  {"  status "}
                  <span className="text-sky-700 dark:text-sky-400">
                    varchar(20)
                  </span>
                  {" // preserved inline note\n"}
                  {"  placed_at "}
                  <span className="text-sky-700 dark:text-sky-400">
                    timestamp
                  </span>
                  {"\n}\n\n"}
                  <span className="text-muted-foreground">
                    {"// Layout coordinates saved separately in:\n"}
                    {"// exemplo.dbml.layout.json -> { \"orders\": { \"x\": 84, \"y\": 42 } }"}
                  </span>
                </code>
              </pre>
            )}
          </div>

          <p className="mt-3 text-xs text-muted-foreground bg-background/90 px-2 py-0.5">
            What a lossless canvas edit emits. See the{" "}
            <a
              href="#opensource"
              className="text-signal font-medium hover:underline"
            >
              Rowan CST architecture
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
