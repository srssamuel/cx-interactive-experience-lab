"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PullQuote({ children }: { children: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative text-center py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(rgba(0,228,184,0.05), transparent 65%)", filter: "blur(40px)" }} />

      <motion.blockquote
        className="relative z-10 text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.3] italic max-w-[28ch] mx-auto"
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Accent line */}
        <span className="block w-12 h-0.5 rounded-full mx-auto mb-8" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }} />
        &ldquo;{children}&rdquo;
      </motion.blockquote>
    </div>
  );
}
