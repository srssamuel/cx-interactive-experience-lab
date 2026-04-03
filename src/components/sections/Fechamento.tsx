"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const takes = [
  "Entregar certo não basta. Se o concorrente entrega igual com menos atrito, o cliente vai.",
  "Encantar sem resolver é o pior investimento em CX.",
  "O que encanta um irrita outro. Experiência é contextual ou é genérica.",
  "O cliente não reclama do esforço. Simplesmente vai.",
  "Experiência é espelho. Desorganização interna sempre vaza.",
  "O benchmark é global. Seu cliente já viveu a melhor experiência do mundo.",
  "A experiência do futuro desaparece. Em 5 anos, será o mínimo.",
];

export function Fechamento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="fechamento" className="snap-section flex items-center items-center">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(0,228,184,0.04),transparent)]" />

      <div ref={ref} className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-16 text-center">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-8"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />11 — Fechamento
        </motion.span>

        <motion.h2 className="text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[15ch] mx-auto mb-12"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          O cliente não lembra do que você entregou. Lembra de como se sentiu.
        </motion.h2>

        <div className="max-w-[640px] mx-auto text-left">
          {takes.map((t, i) => (
            <motion.div key={i} className="flex gap-4 items-start py-4 border-b border-white/[0.03] last:border-b-0"
              initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <span className="text-[1.4rem] font-bold leading-none shrink-0 min-w-[2rem] opacity-30 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.92rem] text-[var(--color-text)] leading-relaxed">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
