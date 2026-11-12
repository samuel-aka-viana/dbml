export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-xs text-muted-foreground font-mono">
      <div className="max-w-6xl mx-auto border-x border-border px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-foreground font-sans text-xs">
            <span className="font-mono uppercase tracking-[0.18em] font-semibold">
              db-modeling
            </span>
            <span className="text-muted-foreground">&middot;</span>
            <span className="text-muted-foreground">
              github.com/brenoLucasN/db_modeling
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            Native Desktop (GPUI) &middot; Interactive Web CLI (Axum + WS) &middot; VS Code Extension (Wasm).
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-[11px]">
          <a
            href="https://github.com/brenoLucasN/db_modeling"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal underline-offset-4 hover:underline transition-colors"
          >
            Repository
          </a>
          <a
            href="https://github.com/brenoLucasN/db_modeling/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal underline-offset-4 hover:underline transition-colors"
          >
            Releases (.deb / .rpm / .dmg / .exe)
          </a>
          <a
            href="https://dbml.dbdiagram.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal underline-offset-4 hover:underline transition-colors"
          >
            DBML Spec
          </a>
          <a
            href="https://github.com/brenoLucasN/db_modeling/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal underline-offset-4 hover:underline transition-colors"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
