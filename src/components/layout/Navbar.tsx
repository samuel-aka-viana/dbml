import { useState, useEffect, useRef } from "react";
import { Menu, Search, Github, Star, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLatestRelease } from "@/hooks/useLatestRelease";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface QuickJumpItem {
  label: string;
  category: string;
  href: string;
  keywords: string;
}

const QUICK_JUMP_ITEMS: QuickJumpItem[] = [
  { label: "TextPatch & Rowan CST Inspector", category: "Overview", href: "#hero", keywords: "hero textpatch cst json sample.dbml" },
  { label: "The Problem: Pure DBML & 1:1 Parity", category: "Why DB Modeling", href: "#problem", keywords: "problem dbdiagram sidecar layout.json git diff" },
  { label: "Interactive 1:1 Workbench & Layout Radar", category: "Live Simulation", href: "#showcase", keywords: "workbench sidebar inspector 8 colors sugiyama orthogonal route" },
  { label: "Multi-Target Architecture (Desktop · CLI · VS Code)", category: "Targets", href: "#architecture", keywords: "gpui-kit axum websocket wasm vscode vsix sync-build" },
  { label: "crates/dbml-syntax & crates/dbml-edit", category: "Rust Core", href: "#opensource", keywords: "logos rowan cst patch format swap_lines" },
  { label: "crates/layout & crates/dbml-wasm", category: "Layout & Wasm", href: "#opensource", keywords: "layered clustered route wasm-bindgen" },
  { label: "Installers (.deb · .rpm · .dmg · .exe · .vsix)", category: "Releases", href: "#downloads", keywords: "download linux debian fedora macos windows vscode" },
];

export function Navbar() {
  const { version } = useLatestRelease();
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = QUICK_JUMP_ITEMS.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      item.label.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.includes(q)
    );
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-150">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-12 flex items-center justify-between gap-3">
        {/* Left: Hamburger Navigation Menu + Official Brand Mark + Tracked Monospace Title */}
        <div className="flex items-center gap-3 sm:gap-3.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="h-8 w-8 inline-flex items-center justify-center rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Open section index"
              >
                <Menu className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64 bg-popover border border-border p-1 font-mono text-xs rounded-md"
            >
              <DropdownMenuLabel className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground px-2.5 py-1.5">
                brenoLucasN/db_modeling &middot; {version}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="#hero" className="px-2.5 py-1.5 flex items-center justify-between">
                  <span>01 &middot; Overview &amp; TextPatch</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="#problem" className="px-2.5 py-1.5 flex items-center justify-between">
                  <span>02 &middot; Pure DBML &amp; Sidecar</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="#showcase" className="px-2.5 py-1.5 flex items-center justify-between">
                  <span>03 &middot; 1:1 Workbench &amp; Routing</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="#architecture" className="px-2.5 py-1.5 flex items-center justify-between">
                  <span>04 &middot; Desktop, CLI &amp; VS Code</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="#opensource" className="px-2.5 py-1.5 flex items-center justify-between">
                  <span>05 &middot; Rust Crates &amp; Wasm</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.22em] uppercase text-foreground font-medium hover:text-signal transition-colors"
          >
            {/* Official mark.svg from crates/app/assets/brand/mark.svg */}
            <svg
              className="w-4 h-4 text-foreground shrink-0"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <rect
                x="6"
                y="8"
                width="26"
                height="20"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <rect x="6" y="8" width="26" height="7" rx="3" fill="currentColor" />
              <rect
                x="32"
                y="36"
                width="26"
                height="20"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <rect x="32" y="36" width="26" height="7" rx="3" fill="currentColor" />
              <path
                d="M19 28 V40 Q19 44 23 44 H32"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span>DB-MODELING</span>
          </a>
        </div>

        {/* Right: Theme Toggle, Pill Search Box, GitHub & Release Star */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* Interactive Pill Search Input */}
          <div ref={searchContainerRef} className="relative">
            <div className="flex items-center h-8 w-36 sm:w-56 md:w-64 rounded-full bg-secondary/90 border border-border px-3 gap-2 focus-within:border-foreground/40 focus-within:bg-card transition-colors">
              <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onFocus={() => setSearchOpen(true)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchOpen(true);
                }}
                placeholder="Search"
                aria-label="Search crates, commands, and targets"
                className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <kbd className="hidden md:inline-block font-mono text-[10px] text-muted-foreground/80">
                Ctrl+K
              </kbd>
            </div>

            {searchOpen && (
              <div className="absolute right-0 mt-1.5 w-72 sm:w-80 rounded-md border border-border bg-popover p-1.5 z-50">
                <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground border-b border-border pb-1.5 mb-1">
                  Jump to crate, target, or section
                </div>
                {filteredItems.length === 0 ? (
                  <div className="px-3 py-4 text-xs text-muted-foreground font-mono text-center">
                    No matching entry.
                  </div>
                ) : (
                  <div className="max-h-64 overflow-y-auto divide-y divide-border/50">
                    {filteredItems.map((item) => (
                      <a
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setQuery("");
                        }}
                        className="flex items-center justify-between px-2.5 py-2 text-xs hover:bg-secondary rounded-sm transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-foreground group-hover:text-signal transition-colors">
                            {item.label}
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground">
                            {item.category}
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-signal" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* GitHub Repository + Star / Version Counter */}
          <a
            href="https://github.com/brenoLucasN/db_modeling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-1.5 py-1 rounded-md hover:bg-secondary"
            aria-label="View brenoLucasN/db_modeling on GitHub"
          >
            <Github className="w-4 h-4 text-foreground" />
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] tabular-nums">
              <Star className="w-3 h-3" />
              <span>{version}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
