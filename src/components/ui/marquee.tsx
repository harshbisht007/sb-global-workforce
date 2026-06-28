import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Seamless infinite marquee.
 *
 * A single track holds two identical copies of `children`. The track is twice
 * the content width, so animating it by -50% scrolls exactly one copy — at
 * which point the second copy sits precisely where the first started, giving a
 * gap-free loop. Animation lives in globals.css (`.marquee__track`).
 */
export function Marquee({
  children,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee mask-fade-x",
        pauseOnHover && "marquee--pause",
        className
      )}
    >
      <div className="marquee__track">
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div
          aria-hidden
          className="flex shrink-0 items-center gap-12 pr-12"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
