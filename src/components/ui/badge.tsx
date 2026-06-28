import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/15 bg-primary/5 text-primary-700",
        accent: "border-accent/20 bg-accent/10 text-accent-700",
        muted: "border-border bg-secondary text-muted-foreground",
        outline: "border-border bg-transparent text-ink",
        white: "border-white/30 bg-white/10 text-white backdrop-blur",
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
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

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
