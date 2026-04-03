"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const antes = [
  { t: "Comparação setorial", p: "Banco com banco. Loja com loja." },
  { t: "Tolerância ao esforço", p: "Filas e formulários eram aceitos." },
  { t: "Canal único", p: "Cada canal era independente." },
  { t: "Expectativa padrão", p: "Todos recebiam igual." },
];
const agora = [
  { t: "Cross-industry", p: "Compara banco com Uber, loja com Amazon." },
  { t: "Zero tolerância", p: "Cada clique desnecessário é motivo para ir." },
  { t: "Experiência contínua", p: "App, loja, suporte = uma coisa só." },
  { t: "Contextual", p: "Quer ser tratado como indivíduo." },
];

export function Mudou() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [view, setView] = useState<"antes" | "agora">("antes");
  const cards = view === "antes" ? antes : agora;

  return (
    <section id="mudou" className="snap-section items-center">
      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />07 — O novo cliente
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Compara você com Uber, Apple e Nubank — mesmo que venda parafusos
        </motion.h2>

        <motion.div className="flex flex-col items-start gap-6" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <div className="flex rounded-full p-1 border border-white/[0.06] bg-[rgba(10,16,28,0.5)]">
            {(["antes", "agora"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={`px-6 py-2 rounded-full text-[0.72rem] font-semibold uppercase tracking-[0.06em] transition-all duration-300 ${
                  view === v ? "bg-[var(--color-primary)] text-[var(--color-bg)]" : "text-[var(--color-text-muted)]"
                }`}>{v === "antes" ? "Como era" : "Como é agora"}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={view} className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              {cards.map((c, i) => (
                <div key={i} className={`rounded-xl border p-5 ${view === "agora" ? "bg-[rgba(0,228,184,0.03)] border-[rgba(0,228,184,0.12)]" : "bg-[rgba(10,16,28,0.4)] border-white/[0.06]"}`}>
                  <h3 className="text-[0.88rem] font-semibold mb-1">{c.t}</h3>
                  <p className="text-[0.8rem] text-[var(--color-text-sec)]">{c.p}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
