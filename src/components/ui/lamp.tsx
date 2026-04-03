"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampEffect({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 flex flex-col items-center overflow-hidden", className)}>
      {/* Lamp beams - positioned at top center */}
      <div className="relative w-full h-[45%] flex items-end justify-center">
        {/* Left conic gradient beam */}
        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/2 h-48 bg-gradient-to-l from-[var(--color-primary)] via-transparent to-transparent"
          style={{
            backgroundImage: "conic-gradient(from 70deg at center bottom, var(--tw-gradient-stops))",
          }}
        >
          <div className="absolute w-full left-0 bg-[var(--color-bg)] h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-full left-0 bg-[var(--color-bg)] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right conic gradient beam */}
        <motion.div
          initial={{ opacity: 0.3, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-48 bg-gradient-to-r from-transparent via-transparent to-[var(--color-primary)]"
          style={{
            backgroundImage: "conic-gradient(from 290deg at center bottom, var(--tw-gradient-stops))",
          }}
        >
          <div className="absolute w-32 h-full right-0 bg-[var(--color-bg)] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[var(--color-bg)] h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Blur base */}
        <div className="absolute bottom-0 h-40 w-full scale-x-150 bg-[var(--color-bg)] blur-2xl z-30" />

        {/* Core glow line */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "20rem" }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          className="absolute bottom-0 z-50 h-px rounded-full bg-[var(--color-primary)]"
          style={{ boxShadow: "0 0 20px 4px rgba(0,228,184,0.3), 0 0 60px 8px rgba(0,228,184,0.1)" }}
        />

        {/* Diffuse glow */}
        <motion.div
          initial={{ width: "10rem", opacity: 0 }}
          whileInView={{ width: "24rem", opacity: 0.25 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-8 z-40 h-28 rounded-full bg-[var(--color-primary)] blur-3xl"
        />
      </div>

      {/* Content area fills bottom half */}
      <div className="relative z-50 flex-1 flex items-start justify-center w-full pt-8">
        {children}
      </div>
    </div>
  );
}
