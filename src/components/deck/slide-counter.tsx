"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideCounterProps {
  current: number;
  total: number;
}

export function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="absolute bottom-4 right-6 z-30 flex items-baseline gap-1.5 font-[var(--font-mono)] text-xs tracking-wider text-[var(--text-muted)]">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block tabular-nums text-[var(--accent)]"
        >
          {String(current).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <span className="text-[var(--text-ghost)]">/</span>
      <span className="tabular-nums">{String(total).padStart(2, "0")}</span>
    </div>
  );
}
