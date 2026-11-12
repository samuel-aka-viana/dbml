import { ChevronDown, Download, Terminal, Code2 } from "lucide-react";
import { useOperatingSystem } from "@/hooks/useOperatingSystem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DownloadCTA() {
  const { currentOS, allOS } = useOperatingSystem();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card hover:border-foreground/30 transition-colors h-9">
      {/* Concise Install Action (Matches pg-regression-radar single-row pill layout) */}
      <a
        href={currentOS.downloadUrl}
        title={currentOS.label}
        className="inline-flex items-center gap-1.5 pl-4 pr-2.5 h-full text-xs font-medium text-foreground hover:bg-secondary/60 rounded-l-full transition-colors"
      >
        <Download className="w-3.5 h-3.5 text-muted-foreground" />
        <span>Install</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          {currentOS.ext}
        </span>
      </a>

      <span className="h-4 w-px bg-border" aria-hidden="true" />

      {/* Dropdown for all 3 targets: Desktop Packages, Web CLI, and VS Code VSIX */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center pl-2 pr-3 h-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-r-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Select platform installer or target"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-72 bg-popover border border-border p-1 font-mono text-xs rounded-md"
        >
          <DropdownMenuLabel className="text-[10px] uppercase text-muted-foreground tracking-wider px-2.5 py-1.5">
            Native Desktop App (crates/app · GPUI)
          </DropdownMenuLabel>
          {allOS.map((os) => (
            <DropdownMenuItem asChild key={os.id} className="cursor-pointer">
              <a
                href={os.downloadUrl}
                className="flex items-center justify-between px-2.5 py-2 rounded-sm hover:bg-secondary text-foreground transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-xs">{os.name}</span>
                  <span className="text-[10px] text-muted-foreground">{os.distro}</span>
                </div>
                <span className="text-[11px] font-mono text-signal font-medium">
                  {os.ext}
                </span>
              </a>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-[10px] uppercase text-muted-foreground tracking-wider px-2.5 py-1.5">
            Web CLI &amp; VS Code Extension
          </DropdownMenuLabel>
          <DropdownMenuItem asChild className="cursor-pointer">
            <a
              href="#architecture"
              className="flex items-center justify-between px-2.5 py-2 rounded-sm hover:bg-secondary text-foreground transition-colors"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-xs">Interactive Web CLI</span>
                  <span className="text-[10px] text-muted-foreground">cargo run -p dbml-cli</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-signal font-medium">HTTP+WS</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <a
              href="https://github.com/brenoLucasN/db_modeling/tree/main/vscode-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2.5 py-2 rounded-sm hover:bg-secondary text-foreground transition-colors"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-xs">VS Code Extension</span>
                  <span className="text-[10px] text-muted-foreground">dbmodeling-vscode</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-signal font-medium">.vsix</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
