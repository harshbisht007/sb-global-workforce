import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 shadow-glow ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo-mark.png"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-contain"
          priority
        />
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
