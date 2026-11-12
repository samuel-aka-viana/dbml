export function ProblemSplit() {
  return (
    <section id="problem" className="border-b border-border bg-background">
      {/* Top Structural Ledger Header Bar */}
      <div className="px-6 sm:px-8 py-3 border-b border-border bg-card flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="w-2 h-2 bg-signal-strong inline-block shrink-0"
        />
        <span className="text-xs font-bold tracking-tight text-foreground">
          The problem
        </span>
      </div>

      {/* Two-Column Architectural Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Cell: Context + Mixed-Weight Editorial Question */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:border-r border-b lg:border-b-0 border-border flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
          <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed max-w-md">
            Teams tracking database schemas in Git alongside SQL migrations,
            Pull Requests, and code reviews need deterministic diffs. When you
            drag a table in a traditional web modeler or Electron wrapper, the
            first question before committing is:
          </p>

          <h2 className="mt-10 text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.1] font-light text-muted-foreground">
            Which <strong className="font-bold text-foreground">canvas edit</strong>{" "}
            trashed my diff?
          </h2>
        </div>

        {/* Right Cell: Sequential Workflow Ledger + Signal Resolution Bar */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-card/40">
          <div>
            <div className="px-6 sm:px-8 pt-6 pb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              ROUND-TRIPPING BY HAND, TODAY
            </div>

            <ol className="divide-y divide-border border-t border-border text-xs sm:text-[13px]">
              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  01
                </span>
                <span className="text-foreground">
                  Move a table or draw a foreign key on a browser canvas
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  02
                </span>
                <span className="text-foreground flex flex-wrap items-center gap-1.5">
                  <span>Export back to</span>
                  <code className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-[11px] text-foreground">
                    exemplo.dbml
                  </code>
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  03
                </span>
                <span className="text-foreground">
                  Watch full-file AST serialization strip comments &amp; reorder blocks
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  04
                </span>
                <span className="text-foreground">
                  Discard visual changes or reconstruct formatting by eye
                </span>
              </li>
            </ol>

            <div className="px-6 sm:px-8 py-3.5 border-t border-border text-xs italic text-muted-foreground">
              Almost every visual diagrammer rewrites the entire file on save.
            </div>
          </div>

          <a
            href="#showcase"
            className="px-6 sm:px-8 py-4 border-t border-signal-border bg-signal-soft text-signal font-semibold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="font-mono">&rarr;</span>
            <span>db-modeling patches only the token you touched.</span>
          </a>
        </div>
      </div>
    </section>
  );
}
