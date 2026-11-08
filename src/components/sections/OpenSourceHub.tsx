import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitFork, Github, Sparkles } from "lucide-react";

interface CrateInfo {
  name: string;
  desc: string;
  role: string;
}

const CRATES: CrateInfo[] = [
  {
    name: "crates/schema",
    desc: "Pure semantic data model: Table, Column, Ref, Enum, TableGroup and stable IDs.",
    role: "Core Model",
  },
  {
    name: "crates/dbml-syntax",
    desc: "Logos high-speed lexer + error-tolerant CST parser using Rowan (zero UI dependency).",
    role: "Lossless Parser",
  },
  {
    name: "crates/dbml-analysis",
    desc: "CST to Schema projection, diagnostics, name resolution, and real-time completions.",
    role: "Static Analysis",
  },
  {
    name: "crates/dbml-edit",
    desc: "Canvas semantic intents translated to minimal lossless textual patches.",
    role: "Mutation Pipeline",
  },
  {
    name: "crates/layout",
    desc: "Sugiyama hierarchical auto-layout algorithms, collision prevention and edge routing.",
    role: "Graph Geometry",
  },
  {
    name: "crates/export",
    desc: "Direct scene rasterization to PNG / JPEG (resvg/tiny-skia) and Mermaid erDiagram.",
    role: "Export Engine",
  },
];

export function OpenSourceHub() {
  return (
    <section id="opensource" className="max-w-6xl mx-auto px-4 py-16 sm:py-24 border-t border-border">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left column: Manifesto & Call to action */}
        <div className="lg:col-span-5 space-y-6">
          <Badge variant="tech">Community & Extensibility</Badge>
          
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Built in the open. 100% modular Rust crates.
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Every core capability of DB Modeling is organized into headless, UI-isolated Rust crates. 
            You can run the entire test suite, write new auto-layout algorithms, or build CLI converters with simple <code className="text-foreground">cargo test</code> commands.
          </p>

          <div className="p-4 rounded-lg border border-border bg-card space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Looking to contribute?</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We welcome contributions for SQL exporters, custom canvas themes, shortcut configurations, and auto-layout optimizations.
            </p>
            <div className="pt-1 flex flex-wrap gap-2.5">
              <Button asChild size="sm" variant="default" className="text-xs font-semibold h-8 gap-2">
                <a href="https://github.com/brenoLucasN/db_modeling" target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5" />
                  <span>Star on GitHub</span>
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="text-xs font-medium h-8 gap-1.5">
                <a href="https://github.com/brenoLucasN/db_modeling/issues" target="_blank" rel="noopener noreferrer">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Good First Issues</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right column: Crates Matrix */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {CRATES.map((crateItem) => (
            <div 
              key={crateItem.name} 
              className="p-3.5 rounded-lg border border-border bg-card hover:border-foreground/30 transition-all font-mono text-xs space-y-1.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-[11px]">{crateItem.name}</span>
                <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted/60">{crateItem.role}</span>
              </div>
              <p className="font-sans text-[11px] text-muted-foreground leading-relaxed">
                {crateItem.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
