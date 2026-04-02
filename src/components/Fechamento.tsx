"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const takeaways = [
  { num: "01", text: "Entregar certo não basta. Se o concorrente entrega igual com menos atrito, o cliente vai — sem avisar." },
  { num: "02", text: "Encantar sem resolver é o pior investimento em CX. O cliente quer que funcione. Depois, que surpreenda." },
  { num: "03", text: "O que encanta um irrita outro. Experiência é contextual ou é genérica." },
  { num: "04", text: "O cliente não reclama do esforço. Simplesmente vai. Reduzir atrito é a decisão de maior ROI." },
  { num: "05", text: "Experiência é espelho. Desorganização interna sempre vaza para fora." },
  { num: "06", text: "O benchmark é global. Seu cliente já viveu a melhor experiência do mundo e agora espera isso de você." },
  { num: "07", text: "A experiência do futuro desaparece. Funciona tão bem que ninguém nota. Em 5 anos, será o mínimo." },
];

export function Fechamento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fechamento" className="relative py-40 px-6 text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,228,184,0.05), transparent 70%)" }} />

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--color-primary)] mb-6">
            <span className="w-4 h-px bg-[var(--color-primary)]" />Fechamento
          </span>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] max-w-[16ch] mx-auto mb-6" style={{ fontFamily: "var(--font-display)" }}>
            O cliente não lembra do que você entregou. Lembra de como se sentiu.
          </h2>
          <p className="text-[1rem] text-[var(--color-text-secondary)] mx-auto mb-2">
            Se levar apenas sete ideias desta conversa:
          </p>
        </motion.div>

        <div className="max-w-[680px] mx-auto mt-10 text-left">
          {takeaways.map((t, i) => (
            <motion.div
              key={i}
              className="flex gap-5 items-start py-5 border-b border-white/[0.03] last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <span
                className="text-[1.6rem] font-bold leading-none shrink-0 min-w-[2.5rem] opacity-40"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.num}
              </span>
              <p className="text-[1rem] text-[var(--color-text)] leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
