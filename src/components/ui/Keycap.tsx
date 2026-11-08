import * as React from "react";
import { cn } from "@/lib/utils";

export interface KeycapProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Keycap({ className, children, ...props }: KeycapProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center gap-1 font-mono text-[11px] font-medium px-2 py-0.5 rounded border border-border bg-muted/60 text-muted-foreground shadow-[inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)] select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
