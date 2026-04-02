"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionNum, Label } from "./Resultado";

const apps = [
  { icon: "⚡", title: "Detecção de atrito", brief: "Ver frustração antes da reclamação.", detail: "IA analisa padrões de navegação, abandonos e repetições. A empresa corrige antes de perder — não no relatório do trimestre seguinte." },
  { icon: "🎯", title: "Next Best Action", brief: "Ação certa, hora certa.", detail: "IA calcula a ação com maior probabilidade de sucesso naquele momento. Pode ser oferta, contato proativo — ou não fazer nada." },
  { icon: "🔮", title: "Personalização contextual", brief: "Adaptar sem perguntar.", detail: "Combina histórico, preferências e comportamento para adaptar automaticamente. É experiência apropriada em escala." },
  { icon: "📊", title: "Leitura de jornada", brief: "Ver a pessoa, não o ticket.", detail: "Unifica touchpoints numa visão completa. O atendente abre a tela e já sabe. Zero 'como posso ajudar?'." },
  { icon: "🛡", title: "Prevenção de risco", brief: "Agir antes da perda.", detail: "Sinais fracos: redução de uso, mudança de padrão, ausência. IA dispara antes que o cliente decida sair." },
  { icon: "🔄", title: "Inteligência operacional", brief: "A máquina por trás.", detail: "Filas, roteamento, priorização. Não atender mais rápido — atender certo. Recurso certo, cliente certo." },
];

export function IASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ia" className="relative py-36 px-6">
      <SectionNum>09</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>IA + Experiência</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] max-w-[22ch]" style={{ fontFamily: "var(--font-display)" }}>
            IA não vai melhorar sua experiência. Vai tornar impossível fingir que ela existe.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((a, i) => (
            <motion.div
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`relative cursor-pointer rounded-3xl border p-7 backdrop-blur-xl overflow-hidden transition-all duration-400 ${
                expanded === i ? "border-[rgba(129,140,248,0.25)] bg-[rgba(129,140,248,0.05)]" : "border-white/[0.06] bg-[rgba(14,21,37,0.5)] hover:border-white/[0.1] hover:-translate-y-1"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
            >
              {expanded === i && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.06),transparent_60%)]" />}
              <span className="text-2xl mb-3 block relative z-10">{a.icon}</span>
              <h3 className="text-[0.95rem] font-semibold mb-1.5 relative z-10">{a.title}</h3>
              <p className="text-[0.85rem] text-[var(--color-text-secondary)] relative z-10">{a.brief}</p>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden relative z-10"
                  >
                    <p className="text-[0.88rem] text-[var(--color-text-secondary)] mt-4 pt-4 border-t border-white/[0.06]">{a.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
