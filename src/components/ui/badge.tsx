import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-mono font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring tabular-nums",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-border bg-secondary text-secondary-foreground",
        outline: "text-foreground border-border bg-card",
        tech: "border-border bg-muted text-muted-foreground",
        signal: "border-signal-border bg-signal-soft text-signal",
        mint: "border-emerald-600/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
        cyan: "border-sky-600/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
        amber: "border-amber-600/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
