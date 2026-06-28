"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Workplaces",
  "Team",
  "Documentation",
  "Travel",
] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  return (
    <>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              filter === cat
                ? "bg-ink text-white shadow-soft"
                : "border border-border bg-white text-ink-soft hover:border-primary/30 hover:text-primary-700"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(item)}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-soft",
                item.span ? "col-span-2" : "col-span-1",
                "aspect-[4/3]"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between p-4">
                  <span className="text-xs font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                    <ZoomIn className="size-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                <p className="text-sm font-medium text-white">{active.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
