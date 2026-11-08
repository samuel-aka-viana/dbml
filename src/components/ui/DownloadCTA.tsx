import { ChevronDown, Download } from "lucide-react";
import { useOperatingSystem } from "@/hooks/useOperatingSystem";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
      {/* Split Button Container */}
      <div className="inline-flex rounded-md border border-border bg-card p-1 shadow-sm w-full sm:w-auto">
        {/* Main Action Button */}
        <Button
          asChild
          variant="default"
          className="flex-1 sm:flex-initial h-10 px-5 gap-2.5 font-semibold text-xs tracking-tight"
        >
          <a href={currentOS.downloadUrl}>
            <Download className="w-4 h-4" />
            <span>{currentOS.label}</span>
          </a>
        </Button>

        {/* Dropdown for other platforms */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-9 text-muted-foreground hover:text-foreground"
              aria-label="Select alternative operating system"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-72 bg-popover border border-border shadow-xl p-1.5 font-mono text-xs"
          >
            <DropdownMenuLabel className="text-[10px] uppercase text-muted-foreground tracking-wider px-2 py-1">
              All Available Packages
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {allOS.map((os) => (
              <DropdownMenuItem asChild key={os.id} className="cursor-pointer">
                <a
                  href={os.downloadUrl}
                  className="flex items-center justify-between px-2.5 py-2 rounded-sm hover:bg-accent text-foreground transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-sans font-medium">{os.name}</span>
                    <span className="text-[10px] text-muted-foreground">{os.distro}</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {os.ext}
                  </span>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
