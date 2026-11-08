import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12 text-xs text-muted-foreground font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">DB Modeling</span>
            <span>&bull;</span>
            <span>Created by Breno Lucas & Samuel Viana</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <a 
              href="https://github.com/brenoLucasN/db_modeling" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/brenoLucasN/db_modeling/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Releases
            </a>
            <a 
              href="https://dbml.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              DBML Specification
            </a>
            <a 
              href="https://github.com/brenoLucasN/db_modeling/blob/develop/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              MIT License
            </a>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground/80">
          <div>Built with GPUI, Rust 2024, React, Vite & shadcn/ui.</div>
          <div>All data stays 100% offline on your device.</div>
        </div>

      </div>
    </footer>
  );
}
