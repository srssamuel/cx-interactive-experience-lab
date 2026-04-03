"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const apps = [
  { icon: "⚡", title: "Detecção de atrito", brief: "Ver frustração antes da reclamação.", detail: "IA analisa padrões e corrige antes de perder — não no relatório do trimestre." },
  { icon: "🎯", title: "Next Best Action", brief: "Ação certa, hora certa.", detail: "Calcula a ação com maior probabilidade. Ou não fazer nada — isso também é inteligência." },
  { icon: "🔮", title: "Personalização", brief: "Adaptar sem perguntar.", detail: "Combina histórico e comportamento para adaptar automaticamente. Experiência apropriada em escala." },
  { icon: "📊", title: "Leitura de jornada", brief: "Ver a pessoa, não o ticket.", detail: "Visão completa. O atendente abre a tela e já sabe. Zero 'como posso ajudar?'." },
  { icon: "🛡", title: "Prevenção de risco", brief: "Agir antes da perda.", detail: "Sinais fracos: redução de uso, mudança de padrão. IA dispara antes da decisão de sair." },
  { icon: "🔄", title: "Inteligência operacional", brief: "A máquina por trás.", detail: "Recurso certo, cliente certo, contexto certo. Operação como motor de experiência." },
];

export function IA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ia" className="snap-section items-center">
      <div ref={ref} className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />09 — IA + Experiência
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          IA não melhora sua experiência. Torna impossível fingir que ela existe.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {apps.map((a, i) => (
            <motion.div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
              className={`cursor-pointer rounded-2xl border p-6 backdrop-blur-xl transition-all duration-400 ${
                expanded === i ? "border-[rgba(129,140,248,0.2)] bg-[rgba(129,140,248,0.04)]" : "border-white/[0.06] bg-[rgba(10,16,28,0.4)] hover:border-white/[0.1]"
              }`}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              whileHover={{ y: -2 }}>
              <span className="text-xl mb-2 block">{a.icon}</span>
              <h3 className="text-[0.92rem] font-semibold mb-1">{a.title}</h3>
              <p className="text-[0.8rem] text-[var(--color-text-sec)]">{a.brief}</p>
              <AnimatePresence>
                {expanded === i && (
                  <motion.p className="text-[0.82rem] text-[var(--color-text-sec)] mt-3 pt-3 border-t border-white/[0.06]"
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}>
                    {a.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
