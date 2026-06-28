"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { cn, telHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/80 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-wide flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary-700"
                    : "text-ink-soft hover:text-primary-700"
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            href={telHref(siteConfig.contact.primaryPhone)}
            variant="ghost"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <Phone className="size-4" />
            Call Us
          </Button>
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Apply Now
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full border border-border bg-white/70 text-ink backdrop-blur xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile menu — rendered as a SIBLING of <header>, not a child.
          When scrolled the header uses backdrop-blur (a backdrop-filter),
          which creates a containing block that would trap this `fixed`
          overlay inside the 4.5rem header and collapse it to zero height.
          As a sibling it resolves against the viewport and opens at any
          scroll position. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-white xl:hidden"
          >
            <div className="container-wide flex flex-col gap-1 py-6">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary/8 text-primary-700"
                        : "text-ink hover:bg-secondary"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button href="/contact" size="lg" className="w-full">
                  Apply Now
                </Button>
                <Button
                  href={telHref(siteConfig.contact.primaryPhone)}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="size-4" />
                  {siteConfig.contact.primaryPhone}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
