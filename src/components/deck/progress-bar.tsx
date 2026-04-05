"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  color?: string;
}

export function ProgressBar({ progress, color }: ProgressBarProps) {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 h-[2px] bg-[var(--border)]">
      <motion.div
        className="relative h-full overflow-hidden"
        initial={false}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: color || "var(--accent)" }}
      >
        {/* Shimmer effect on the progress bar */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            animation: "shimmer 2s ease-in-out infinite",
          }}
        />
      </motion.div>
      {/* Glow at the tip */}
      <motion.div
        className="absolute top-0 h-[6px] w-[40px] -translate-x-1/2"
        initial={false}
        animate={{ left: `${progress * 100}%` }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `radial-gradient(ellipse, ${color || "var(--accent)"}60 0%, transparent 70%)`,
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
