import Link from "next/link";
import { Home, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden py-32">
      <div className="absolute inset-0 -z-20 bg-radial-fade" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />

      <div className="container-wide flex flex-col items-center text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
          <Compass className="size-8" />
        </span>
        <p className="mt-8 font-display text-7xl font-bold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
          This page took an overseas trip
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <Home className="size-4" />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <ArrowLeft className="size-4" />
            Contact Us
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {mainNav.slice(1, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink-soft backdrop-blur transition-colors hover:border-primary/30 hover:text-primary-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
