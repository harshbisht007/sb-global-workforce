import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-2xl text-center items-center",
        align === "left" && "max-w-2xl items-start",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "eyebrow",
              light && "border-white/20 bg-white/10 text-white"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
            light && "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-base leading-relaxed text-muted-foreground sm:text-lg",
              light && "text-white/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
