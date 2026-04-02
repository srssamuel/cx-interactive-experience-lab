"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionNum, Label } from "./Resultado";

const items = [
  { label: "Agora → 2 anos", color: "var(--color-primary)", title: "Menos atrito", text: "Processos simplificados, self-service inteligente. O cliente resolve sozinho — e prefere assim." },
  { label: "2 → 5 anos", color: "var(--color-accent)", title: "Preditiva e contextual", text: "A empresa antecipa antes do cliente verbalizar. Personalização em tempo real sem configuração." },
  { label: "5 → 10 anos", color: "#a78bfa", title: "Invisível e orquestrada", text: "A melhor experiência desaparece. IA orquestra touchpoints em tempo real. A empresa opera como organismo vivo." },
];

export function Futuro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="futuro" className="relative py-36 px-6">
      <SectionNum>08</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>Para onde vai</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] max-w-[20ch]" style={{ fontFamily: "var(--font-display)" }}>
            O futuro da experiência não é encantar. É desaparecer.
          </h2>
        </motion.div>

        <div className="relative pl-10 border-l-2 border-white/[0.06] ml-2">
          {/* Gradient line overlay */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[#a78bfa]" />

          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {/* Dot */}
              <div className="absolute -left-[calc(2.5rem+5px)] top-1 w-3.5 h-3.5 rounded-full border-2 bg-[var(--color-bg)]" style={{ borderColor: item.color, boxShadow: `0 0 12px ${item.color}40` }} />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] mb-1.5 block" style={{ color: item.color }}>{item.label}</span>
              <h3 className="text-[1.2rem] font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
              <p className="text-[0.95rem] text-[var(--color-text-secondary)] max-w-[50ch]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-[rgba(14,21,37,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-[1.05rem] text-[var(--color-text)] max-w-[50ch] mx-auto">
            <strong>A pergunta não é &ldquo;como encantar&rdquo;.</strong> É: como construir um sistema tão inteligente que o cliente nem precisa pensar sobre ele?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
