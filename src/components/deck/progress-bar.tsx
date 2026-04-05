"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 h-[2px] bg-[var(--border)]">
      <motion.div
        className="h-full bg-[var(--accent)]"
        initial={false}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
