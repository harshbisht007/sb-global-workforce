import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: Crumb[];
  align?: "left" | "center";
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  align = "center",
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border pb-14 pt-32 sm:pb-16 sm:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-radial-fade" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -right-40 -top-20 -z-10 size-[26rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -left-40 top-10 -z-10 size-[24rem] rounded-full bg-primary/10 blur-[120px]" />

      <div
        className={cn(
          "container-wide flex flex-col gap-5",
          align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start"
        )}
      >
        {/* Breadcrumb */}
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 transition-colors hover:text-primary-700"
                >
                  <Home className="size-3.5" />
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.name} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5 text-border" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-primary-700"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-ink">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        {eyebrow && (
          <Reveal delay={0.05}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.15}>
            <p
              className={cn(
                "text-base leading-relaxed text-muted-foreground sm:text-lg",
                align === "center" ? "max-w-2xl" : "max-w-2xl"
              )}
            >
              {description}
            </p>
          </Reveal>
        )}

        {children && (
          <Reveal delay={0.2} className="w-full">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
