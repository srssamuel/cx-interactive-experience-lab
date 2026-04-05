"use client";

import { type ReactNode, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useSlideNavigation } from "@/lib/hooks/use-slide-navigation";
import { ProgressBar } from "./progress-bar";
import { SlideCounter } from "./slide-counter";
import { CursorSpotlight } from "@/components/fx";

interface SlideDeckProps {
  children: ReactNode[];
  className?: string;
}

/* Section mapping: slide index → section label */
const SECTIONS = [
  { start: 0, end: 2, label: "Abertura", color: "#00E5C3" },
  { start: 3, end: 11, label: "Customer Experience", color: "#00E5C3" },
  { start: 12, end: 19, label: "Customer Success", color: "#FF6B35" },
  { start: 20, end: 26, label: "Dados & Analytics", color: "#8B5CF6" },
  { start: 27, end: 32, label: "Inteligência Artificial", color: "#3B82F6" },
  { start: 33, end: 34, label: "Fechamento", color: "#00E5C3" },
];

function getSection(index: number) {
  return SECTIONS.find((s) => index >= s.start && index <= s.end) ?? SECTIONS[0];
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "60%" : "-60%",
    opacity: 0,
    scale: 0.92,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-40%" : "40%",
    opacity: 0,
    scale: 0.96,
    filter: "blur(2px)",
  }),
};

export function SlideDeck({ children, className }: SlideDeckProps) {
  const nav = useSlideNavigation({ totalSlides: children.length });
  const section = useMemo(() => getSection(nav.current), [nav.current]);

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
            x: { type: "spring", stiffness: 260, damping: 28 },
            opacity: { duration: 0.35 },
            scale: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            filter: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          {children[nav.current]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar — section color-aware */}
      <ProgressBar progress={nav.progress} color={section.color} />

      {/* Section indicator (top-left) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={section.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-6 top-6 z-40 flex items-center gap-2 md:left-8"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: section.color, boxShadow: `0 0 8px ${section.color}40` }}
          />
          <span className="text-[0.55rem] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
            {section.label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Section dots (right side, vertical) */}
      <div className="absolute right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {SECTIONS.map((s, i) => {
          const isCurrent = nav.current >= s.start && nav.current <= s.end;
          return (
            <button
              key={s.label}
              onClick={() => nav.goTo(s.start)}
              className="group relative flex h-5 w-5 items-center justify-center"
              aria-label={`Ir para ${s.label}`}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  isCurrent ? "h-2.5 w-2.5" : "h-1.5 w-1.5 opacity-30 group-hover:opacity-60"
                )}
                style={{
                  background: isCurrent ? s.color : "var(--text-muted)",
                  boxShadow: isCurrent ? `0 0 8px ${s.color}50` : "none",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Slide counter */}
      <SlideCounter current={nav.current + 1} total={nav.totalSlides} color={section.color} />

      {/* Navigation arrows (desktop) — with hover glow */}
      <div className="pointer-events-none absolute inset-0 z-40 hidden items-center justify-between px-4 md:flex">
        {!nav.isFirst && (
          <button
            onClick={nav.prev}
            className="pointer-events-auto group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--text)]"
            style={{ transition: "all 0.3s var(--ease-cinematic)" }}
            aria-label="Slide anterior"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:-translate-x-0.5">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div />
        {!nav.isLast && (
          <button
            onClick={nav.next}
            className="pointer-events-auto group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--text)]"
            style={{ transition: "all 0.3s var(--ease-cinematic)" }}
            aria-label="Próximo slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Cursor spotlight */}
      <CursorSpotlight color={section.color.replace("#", "").match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(", ") || "0, 229, 195"} />

      {/* Keyboard hint */}
      <AnimatePresence>
        {nav.current === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
          >
            {/* Animated scroll/click hint */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[0.55rem] tracking-[0.15em] text-[var(--text-ghost)]">
                Clique ou pressione →
              </span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[var(--text-ghost)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: nav.current > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-4 left-4 z-30 hidden text-[0.55rem] tracking-[0.1em] text-[var(--text-ghost)] md:block"
      >
        ← → navegar &middot; F fullscreen &middot; 1-9 ir para seção
      </motion.div>
    </div>
  );
}
