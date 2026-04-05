"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideCounterProps {
  current: number;
  total: number;
  color?: string;
}

export function SlideCounter({ current, total, color }: SlideCounterProps) {
  return (
    <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2 font-[var(--font-mono)]">
      {/* Mini progress ring */}
      <svg width="24" height="24" viewBox="0 0 24 24" className="rotate-[-90deg]">
        <circle cx="12" cy="12" r="10" fill="none" stroke="var(--border)" strokeWidth="1.5" />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke={color || "var(--accent)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 10}
          initial={false}
          animate={{ strokeDashoffset: 2 * Math.PI * 10 * (1 - current / total) }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      <div className="flex items-baseline gap-1 text-xs tracking-wider text-[var(--text-muted)]">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block tabular-nums"
            style={{ color: color || "var(--accent)" }}
          >
            {String(current).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="text-[var(--text-ghost)]">/</span>
        <span className="tabular-nums">{String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
