"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionNum, Label } from "./Resultado";

const nodes = [
  { icon: "👤", label: "Liderança", text: "Se CX não está na agenda do C-level, não estará na cultura, no orçamento ou nos processos. Experiência começa como decisão estratégica — ou não começa." },
  { icon: "🏛", label: "Cultura", text: "Cultura é o que as pessoas fazem quando ninguém olha. Se premia velocidade acima de tudo, a experiência será rápida mas fria. Cultura é o código-fonte." },
  { icon: "⚙️", label: "Processos", text: "Um processo de devolução em 12 etapas diz: estamos dificultando para você desistir de reclamar. Processo ruim é experiência ruim por design." },
  { icon: "💻", label: "Tecnologia", text: "CRM que não integra com suporte gera a pergunta que mais corrói: 'pode repetir seus dados?' Tecnologia fragmentada = experiência fragmentada." },
  { icon: "📊", label: "Dados", text: "Sem dados unificados, cada departamento vê um pedaço. Nenhum vê a pessoa inteira. Com dados, antecipa. Sem dados, reage — sempre atrasada." },
  { icon: "🔧", label: "Operação", text: "Onde a experiência se materializa. Logística, SLA, tempo de resposta. Não importa o que marketing promete — a operação entrega ou desmente." },
  { icon: "📦", label: "Produto", text: "Cada tela, funcionalidade e bug é experiência. Produto não termina no lançamento — recomeça a cada uso." },
  { icon: "🗺", label: "Jornada", text: "Não começa quando compra — começa quando pesquisa. Quem mapeia só touchpoints perde o filme inteiro." },
  { icon: "🎧", label: "Atendimento", text: "Último recurso, não primeiro pilar. Se é o maior investimento em CX, algo falhou antes." },
];

export function Sistema() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="sistema" className="relative py-36 px-6">
      <SectionNum>06</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>Experiência como sistema</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] mb-3 max-w-[24ch]" style={{ fontFamily: "var(--font-display)" }}>
            A experiência que o cliente percebe é o reflexo exato do que a empresa é por dentro
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[50ch]">
            Não nasce no atendimento. Nasce na arquitetura. Clique em cada camada.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-3 max-w-[680px] mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {nodes.map((n, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`relative flex flex-col items-center gap-2 py-5 px-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                active === i
                  ? "border-[var(--color-primary)] bg-[rgba(0,228,184,0.06)] shadow-[0_0_30px_rgba(0,228,184,0.06)]"
                  : "border-white/[0.06] bg-[rgba(14,21,37,0.4)] hover:border-white/[0.1] hover:-translate-y-1"
              }`}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
            >
              {active === i && (
                <motion.div
                  layoutId="sysGlow"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,228,184,0.08),transparent_60%)]"
                />
              )}
              <span className="text-2xl">{n.icon}</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.06em]">{n.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Detail panel */}
        <div className="text-center mt-8 min-h-[80px]">
          <AnimatePresence mode="wait">
            {active !== null ? (
              <motion.p
                key={active}
                className="text-[1rem] text-[var(--color-text)] max-w-[50ch] mx-auto"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {nodes[active].text}
              </motion.p>
            ) : (
              <motion.p
                className="text-[0.9rem] text-[var(--color-text-muted)] italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ← Clique em uma camada para explorar
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
