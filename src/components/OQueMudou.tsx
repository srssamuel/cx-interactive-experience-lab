"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionNum, Label } from "./Resultado";

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
  { t: "Contextual", p: "Quer ser tratado como indivíduo, no momento certo." },
];

export function OQueMudou() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [view, setView] = useState<"antes" | "agora">("antes");

  const cards = view === "antes" ? antes : agora;

  return (
    <section id="mudou" className="relative py-36 px-6">
      <SectionNum>07</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>O novo cliente</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] max-w-[24ch]" style={{ fontFamily: "var(--font-display)" }}>
            Seu cliente compara você com o Uber, a Apple e o Nubank — mesmo que você venda parafusos.
          </h2>
        </motion.div>

        <motion.div className="flex flex-col items-center gap-8" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <div className="flex bg-[rgba(14,21,37,0.6)] backdrop-blur-xl rounded-full p-1 border border-white/[0.06]">
            {(["antes", "agora"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`px-8 py-2.5 rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.06em] transition-all duration-300 ${view === v ? "bg-[var(--color-primary)] text-[var(--color-bg)] shadow-[0_0_24px_rgba(0,228,184,0.2)]" : "text-[var(--color-text-muted)]"}`}>
                {v === "antes" ? "Como era" : "Como é agora"}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={view} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              {cards.map((c, i) => (
                <div key={i} className={`rounded-2xl border p-6 backdrop-blur-xl ${view === "agora" ? "bg-[rgba(0,228,184,0.04)] border-[rgba(0,228,184,0.12)]" : "bg-[rgba(14,21,37,0.5)] border-white/[0.06]"}`}>
                  <h3 className="text-[0.92rem] font-semibold mb-2">{c.t}</h3>
                  <p className="text-[0.88rem] text-[var(--color-text-secondary)]">{c.p}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
