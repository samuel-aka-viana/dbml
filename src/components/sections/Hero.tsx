import { Button } from "@/components/ui/button";
import { DownloadCTA } from "@/components/ui/DownloadCTA";
import { AsciiMatrixCanvas } from "@/components/ui/AsciiMatrixCanvas";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative border-b border-border bg-background overflow-hidden"
    >
      {/* Animated Full-Bleed ASCII Character Matrix */}
      <AsciiMatrixCanvas />

      {/* Main Architectural Hero Content */}
      <div className="relative z-10 px-6 sm:px-10 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-xl py-2 space-y-5">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-foreground leading-[1.06]">
            db-modeling
          </h1>

          <p className="text-base sm:text-[17px] text-muted-foreground leading-relaxed">
            Visual relational database modeling powered by strict{" "}
            <strong className="font-semibold text-foreground">DBML</strong> &mdash;
            delivering a 1:1 workbench across a{" "}
            <strong className="font-semibold text-foreground">
              Native Desktop App (GPUI)
            </strong>
            ,{" "}
            <strong className="font-semibold text-foreground">
              Interactive Web CLI
            </strong>
            , and{" "}
            <strong className="font-semibold text-foreground">
              VS Code Extension
            </strong>{" "}
            from one shared Rust core.
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
              <a href="#architecture">How it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
