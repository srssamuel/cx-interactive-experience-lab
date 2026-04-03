"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "Agora → 2 anos", color: "var(--color-primary)", title: "Menos atrito", text: "Self-service inteligente. O cliente resolve sozinho — e prefere assim." },
  { label: "2 → 5 anos", color: "var(--color-accent)", title: "Preditiva", text: "A empresa antecipa antes do cliente verbalizar. Personalização em tempo real." },
  { label: "5 → 10 anos", color: "#a78bfa", title: "Invisível", text: "A melhor experiência desaparece. IA orquestra tudo. A empresa opera como organismo vivo." },
];

export function Futuro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="futuro" className="snap-section flex items-center items-center bg-[#060a12]">
      <div ref={ref} className="relative z-10 w-full max-w-[1000px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />08 — Para onde vai
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[18ch] mb-12"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          O futuro da experiência não é encantar. É desaparecer.
        </motion.h2>

        <div className="relative pl-8 border-l border-white/[0.06]">
          <div className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[#a78bfa]" />
          {items.map((item, i) => (
            <motion.div key={i} className="relative pb-10 last:pb-0"
              initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}>
              <div className="absolute -left-[calc(2rem+4px)] top-1 w-3 h-3 rounded-full border-2 bg-[var(--color-bg)]"
                style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}30` }} />
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] mb-1 block" style={{ color: item.color }}>{item.label}</span>
              <h3 className="text-[1.15rem] font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
              <p className="text-[0.9rem] text-[var(--color-text-sec)] max-w-[45ch]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
