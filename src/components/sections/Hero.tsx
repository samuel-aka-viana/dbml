import { Badge } from "@/components/ui/badge";
import { DownloadCTA } from "@/components/ui/DownloadCTA";
import { Keycap } from "@/components/ui/Keycap";
import { useLatestRelease } from "@/hooks/useLatestRelease";

export function Hero() {
  const { version, hasPublishedReleases } = useLatestRelease();

  return (
    <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center">
      
      {/* Proof Badges (No generic eyebrows) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <Badge variant="mint" className="gap-1.5 py-1 px-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{hasPublishedReleases ? `${version} Released` : `${version} In Development`}</span>
        </Badge>
        <Badge variant="tech" className="py-1 px-2.5">
          Engineered in Rust 2024 &bull; Powered by GPUI
        </Badge>
      </div>

      {/* Main Headline (Zero gradient text - High Craft Typography) */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.12]">
        High-performance database modeling. <br className="hidden sm:inline" />
        Native at 120 frames per second.
      </h1>

      {/* Subhead with strict measure (65-75ch) */}
      <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
        Visual canvas and DBML text are synchronized as two views of the exact same document. 
        Zero Electron bloat, no blocking modal dialogs, and 100% offline on your local machine.
      </p>

      {/* Primary CTA Area with OS Detection */}
      <div id="downloads" className="mt-8 flex flex-col items-center justify-center gap-3">
        <DownloadCTA />
        
        {/* Context metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
          <span>Open Source under MIT</span>
          <span>&bull;</span>
          <span>Linux, Windows & macOS</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            Command Palette via <Keycap>Ctrl+K</Keycap>
          </span>
        </div>
      </div>

    </section>
  );
}
