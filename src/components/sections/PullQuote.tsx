"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PullQuote({ children, id }: { children: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id={id} className="snap-section flex items-center justify-center" style={{ minHeight: "70vh" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(0,228,184,0.03),transparent)]" />
      <div ref={ref} className="relative z-10 text-center px-8 max-w-[900px] mx-auto">
        <motion.blockquote
          className="text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] tracking-[-0.02em] italic"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <span className="block w-12 h-0.5 rounded-full mx-auto mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
          &ldquo;{children}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
