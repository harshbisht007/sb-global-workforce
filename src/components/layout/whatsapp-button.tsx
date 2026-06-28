"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { whatsappHref } from "@/lib/utils";

const PRESET_MESSAGE =
  "Hello S.B. Global Workforce, I would like to know more about overseas job opportunities.";

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 600);
    const t2 = setTimeout(() => setShowTip(true), 2400);
    const t3 = setTimeout(() => setShowTip(false), 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
        >
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                className="relative hidden max-w-[220px] rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-card sm:block"
              >
                <button
                  aria-label="Dismiss"
                  onClick={() => setShowTip(false)}
                  className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-ink text-white"
                >
                  <X className="size-3" />
                </button>
                Need help? Chat with us on WhatsApp 👋
                <span className="absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rotate-45 bg-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappHref(siteConfig.contact.whatsapp, PRESET_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />
            <MessageCircle className="relative size-7" fill="currentColor" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
