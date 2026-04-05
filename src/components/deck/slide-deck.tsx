"use client";

import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useSlideNavigation } from "@/lib/hooks/use-slide-navigation";
import { ProgressBar } from "./progress-bar";
import { SlideCounter } from "./slide-counter";

interface SlideDeckProps {
  children: ReactNode[];
  className?: string;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-50%" : "50%",
    opacity: 0,
    scale: 0.98,
  }),
};

export function SlideDeck({ children, className }: SlideDeckProps) {
  const nav = useSlideNavigation({ totalSlides: children.length });

  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-[var(--bg)]", className)}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={nav.direction} mode="wait">
        <motion.div
          key={nav.current}
          custom={nav.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          {children[nav.current]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <ProgressBar progress={nav.progress} />

      {/* Slide counter */}
      <SlideCounter current={nav.current + 1} total={nav.totalSlides} />

      {/* Navigation arrows (desktop) */}
      <div className="pointer-events-none absolute inset-0 z-40 hidden items-center justify-between px-4 md:flex">
        {!nav.isFirst && (
          <button
            onClick={nav.prev}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-all hover:border-[var(--border-hover)] hover:text-[var(--text)]"
            aria-label="Slide anterior"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div />
        {!nav.isLast && (
          <button
            onClick={nav.next}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-all hover:border-[var(--border-hover)] hover:text-[var(--text)]"
            aria-label="Próximo slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-4 left-4 z-30 hidden text-[0.55rem] tracking-[0.1em] text-[var(--text-ghost)] md:block"
      >
        ← → navegar &middot; F fullscreen &middot; 1-9 ir para slide
      </motion.div>
    </div>
  );
}
