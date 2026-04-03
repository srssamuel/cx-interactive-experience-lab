"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full",
        className
      )}
    >
      {/* Lamp container */}
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Left gradient beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-to-l from-[var(--color-primary)] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Mask left */}
          <div className="absolute w-[100%] left-0 bg-[var(--color-bg)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-[var(--color-bg)] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-to-r from-transparent via-transparent to-[var(--color-primary)] text-white [--conic-position:from_290deg_at_center_top]"
        >
          {/* Mask right */}
          <div className="absolute w-40 h-[100%] right-0 bg-[var(--color-bg)] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-[var(--color-bg)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Glow layers */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[var(--color-bg)] blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Core glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[16rem] -translate-y-[7rem] rounded-full bg-[var(--color-primary)] blur-sm"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[var(--color-primary)] opacity-30 blur-3xl"
        />

        {/* Thin line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[var(--color-primary)]"
        />

        {/* Bottom mask */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[var(--color-bg)]" />
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
