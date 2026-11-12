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
            Teams modeling relational schemas in Git want pure{" "}
            <code className="font-mono text-foreground">.dbml</code> files that
            stay 100% compatible with{" "}
            <code className="font-mono text-foreground">dbdiagram.io</code> &mdash;
            and the exact same visual workbench across desktop, CLI, and VS Code.
            With traditional diagrammers, the first question on every commit is:
          </p>

          <h2 className="mt-10 text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.1] font-light text-muted-foreground">
            Which <strong className="font-bold text-foreground">diagram edit</strong>{" "}
            polluted my schema?
          </h2>
        </div>

        {/* Right Cell: Sequential Workflow Ledger + Signal Resolution Bar */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-card/40">
          <div>
            <div className="px-6 sm:px-8 pt-6 pb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              ROUND-TRIPPING SCHEMAS BY HAND, TODAY
            </div>

            <ol className="divide-y divide-border border-t border-border text-xs sm:text-[13px]">
              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  01
                </span>
                <span className="text-foreground">
                  Drag a table or add a relation in a cloud-only web modeler
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  02
                </span>
                <span className="text-foreground flex flex-wrap items-center gap-1.5">
                  <span>Watch proprietary coordinate comments pollute</span>
                  <code className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-[11px] text-foreground">
                    schema.dbml
                  </code>
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  03
                </span>
                <span className="text-foreground">
                  Switch between browser, desktop, and VS Code with mismatched UIs
                </span>
              </li>

              <li className="px-6 sm:px-8 py-3.5 flex items-center gap-4">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  04
                </span>
                <span className="text-foreground">
                  Clean up stripped comments and overlapping FK lines by eye
                </span>
              </li>
            </ol>

            <div className="px-6 sm:px-8 py-3.5 border-t border-border text-xs italic text-muted-foreground">
              Few tools keep .dbml 100% pure while syncing across Desktop, CLI, and VS Code.
            </div>
          </div>

          <a
            href="#showcase"
            className="px-6 sm:px-8 py-4 border-t border-signal-border bg-signal-soft text-signal font-semibold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="font-mono">&rarr;</span>
            <span>
              db-modeling patches only the CST token and saves layout in{" "}
              <code className="font-mono">&lt;file&gt;.dbml.layout.json</code>.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
