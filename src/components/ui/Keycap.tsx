import * as React from "react";
import { cn } from "@/lib/utils";

export interface KeycapProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Keycap({ className, children, ...props }: KeycapProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center gap-1 font-mono text-[11px] font-medium px-1.5 py-0.5 rounded border border-border bg-muted text-foreground select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
