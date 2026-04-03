"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const nodes = [
  { icon: "👤", label: "Liderança", text: "Se CX não está na agenda do C-level, não estará na cultura nem nos processos." },
  { icon: "🏛", label: "Cultura", text: "O que as pessoas fazem quando ninguém olha. Cultura é o código-fonte da experiência." },
  { icon: "⚙️", label: "Processos", text: "Processo de devolução em 12 etapas = experiência ruim por design." },
  { icon: "💻", label: "Tecnologia", text: "CRM fragmentado gera: 'pode repetir seus dados?'" },
  { icon: "📊", label: "Dados", text: "Sem dados unificados, cada departamento vê um pedaço. Nenhum vê a pessoa." },
  { icon: "🔧", label: "Operação", text: "Onde a experiência se materializa. A operação entrega ou desmente." },
  { icon: "📦", label: "Produto", text: "Cada tela e bug é experiência. Produto recomeça a cada uso." },
  { icon: "🗺", label: "Jornada", text: "Começa quando pesquisa, não quando compra. Não termina nunca." },
  { icon: "🎧", label: "Atendimento", text: "Último recurso. Se é o maior investimento em CX, algo falhou antes." },
];

export function Sistema() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="sistema" className="snap-section flex items-center items-center bg-[#060a12]">
      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />06 — Experiência como sistema
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          O cliente sente o que a empresa é por dentro
        </motion.h2>

        <div className="grid grid-cols-3 gap-2 max-w-[600px] mx-auto mb-6">
          {nodes.map((n, i) => (
            <motion.button key={i} onClick={() => setActive(active === i ? null : i)}
              className={`flex flex-col items-center gap-1.5 py-4 px-2 rounded-xl border transition-all duration-300 ${
                active === i ? "border-[var(--color-primary)] bg-[rgba(0,228,184,0.05)] shadow-[0_0_20px_rgba(0,228,184,0.05)]" : "border-white/[0.05] bg-[rgba(10,16,28,0.3)] hover:border-white/[0.1]"
              }`}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}>
              <span className="text-xl">{n.icon}</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.06em]">{n.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="text-center min-h-[60px]">
          <AnimatePresence mode="wait">
            {active !== null ? (
              <motion.p key={active} className="text-[0.95rem] text-[var(--color-text)] max-w-[45ch] mx-auto"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                {nodes[active].text}
              </motion.p>
            ) : (
              <motion.p className="text-[0.8rem] text-[var(--color-text-muted)] italic"
                initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}>Clique em uma camada</motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
