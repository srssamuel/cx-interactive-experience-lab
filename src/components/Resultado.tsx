"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  {
    id: "func",
    label: "Funcional",
    title: "Resultado Funcional",
    text: "A tarefa: transferir dinheiro, receber a encomenda, resolver o bug, chegar ao destino.",
    insight: "A maioria das empresas para aqui — e se torna substituível. Dois concorrentes com o mesmo resultado funcional? O diferencial migra para onde ninguém está olhando.",
  },
  {
    id: "emoc",
    label: "Emocional",
    title: "Resultado Emocional",
    text: "O que o cliente quer sentir. Segurança na transação. Alívio ao resolver. Orgulho ao usar a marca.",
    insight: "Não aparece em nenhum dashboard — mas cria memória. E memória é o que gera recompra, indicação e permanência.",
  },
  {
    id: "cont",
    label: "Contextual",
    title: "Resultado Contextual",
    text: "O que precisa naquele momento. Pai com pressa = checkout em 1 clique. CEO = relatório antes das 9h.",
    insight: "Contexto define se o mesmo resultado funcional é sucesso ou frustração. Entregar certo na hora errada ainda é errar.",
  },
  {
    id: "rel",
    label: "Relacional",
    title: "Resultado Relacional",
    text: "O que espera da relação no tempo. Ser reconhecido. Não repetir dados. Sentir que a empresa evolui junto.",
    insight: "Tratar cada interação como a primeira destrói esse resultado. O cliente sai sem saber explicar por quê.",
  },
];

export function Resultado() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="resultado" className="relative py-36 px-6">
      <SectionNum>03</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Label>Resultado Esperado</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] mb-3 max-w-[22ch]" style={{ fontFamily: "var(--font-display)" }}>
            O cliente não veio buscar um produto. Veio buscar quatro coisas — e você só entrega uma
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[55ch]">
            A maioria entende resultado como tarefa cumprida. Mas o cliente opera em quatro dimensões — e só a funcional aparece nos relatórios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* Tab buttons */}
          <div className="flex gap-1 mb-1 border-b border-white/[0.06] overflow-x-auto">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.05em] whitespace-nowrap border-b-2 transition-all duration-300 ${
                  active === i
                    ? "text-[var(--color-primary)] border-[var(--color-primary)]"
                    : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="py-8"
            >
              <h3 className="text-[1.3rem] font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {tabs[active].title}
              </h3>
              <p className="text-[1.05rem] text-[var(--color-text-secondary)] mb-4 max-w-[55ch]">
                {tabs[active].text}
              </p>
              <p className="text-[1rem] text-[var(--color-text-secondary)] max-w-[55ch]">
                {tabs[active].insight}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SectionNum({ children }: { children: string }) {
  return (
    <div className="absolute top-8 right-8 text-[clamp(6rem,14vw,14rem)] font-bold leading-none pointer-events-none select-none" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--color-primary)] mb-4">
      <span className="w-4 h-px bg-[var(--color-primary)]" />{children}
    </span>
  );
}

export { SectionNum, Label };
