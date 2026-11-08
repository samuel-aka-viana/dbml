import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLatestRelease } from "@/hooks/useLatestRelease";

export function Navbar() {
  const { version } = useLatestRelease();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-6 h-6 rounded bg-card border border-border flex items-center justify-center text-foreground group-hover:border-foreground/40 transition-colors shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
              <rect x="2" y="2" width="5" height="5" rx="1" />
              <rect x="9" y="2" width="5" height="5" rx="1" />
              <rect x="2" y="9" width="5" height="5" rx="1" />
              <path d="M7 4.5h2M4.5 7v2M11.5 7v4a1 1 0 01-1 1H7" strokeDasharray="2 1" />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm tracking-tight text-foreground">DB Modeling</span>
            <span className="text-[11px] font-mono text-muted-foreground">{version}</span>
          </div>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-muted-foreground font-medium">
          <a href="#showcase" className="hover:text-foreground transition-colors">
            Showcase
          </a>
          <a href="#architecture" className="hover:text-foreground transition-colors">
            GPUI Engine
          </a>
          <a href="#benchmarks" className="hover:text-foreground transition-colors">
            Benchmarks
          </a>
          <a href="#opensource" className="hover:text-foreground transition-colors">
            Open Source
          </a>
          <a
            href="https://github.com/brenoLucasN/db_modeling"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <span>GitHub</span>
            <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button asChild size="sm" variant="default" className="text-xs h-8 px-3 font-semibold">
            <a href="#downloads">Download</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
