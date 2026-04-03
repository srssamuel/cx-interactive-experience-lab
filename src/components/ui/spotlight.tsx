"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute inset-0 z-[1] overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Left spotlight */}
      <motion.div
        className="absolute -top-40 -left-40 h-[800px] w-[560px]"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(0, 228, 184, 0.08) 0%, rgba(0, 228, 184, 0.02) 50%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Right spotlight */}
      <motion.div
        className="absolute -top-20 -right-40 h-[600px] w-[400px]"
        initial={{ opacity: 0, x: 100, y: -80 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(129, 140, 248, 0.06) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
