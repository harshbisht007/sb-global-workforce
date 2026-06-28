import Link from "next/link";
import { cn } from "@/lib/utils";
import { Globe2 } from "lucide-react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="S.B. Global Workforce — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative flex size-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
        <Globe2 className="size-5" strokeWidth={2.25} />
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-accent ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          S.B. Global
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Workforce
        </span>
      </span>
    </Link>
  );
}
