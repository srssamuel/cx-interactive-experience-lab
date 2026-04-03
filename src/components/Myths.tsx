"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowCard } from "./ui/glow-card";
import { BlurReveal } from "./ui/text-reveal";

const myths = [
  { myth: "\"Experiência é atendimento\"", truth: "Atendimento é remédio, não saúde", detail: "O cliente ideal nem precisa de atendimento. A melhor experiência resolve antes de gerar contato." },
  { myth: "\"Experiência é NPS\"", truth: "NPS mede intenção, não comportamento", detail: "Clientes dão nota 9 e cancelam no mês seguinte. O esforço percebido prediz deslealdade melhor." },
  { myth: "\"Experiência é UX\"", truth: "UX é uma fatia, não o bolo", detail: "A experiência inclui compra, entrega, suporte, cobrança, renovação. O app é só uma parte." },
  { myth: "\"Experiência é encantar\"", truth: "Encantamento cansa. Consistência fideliza.", detail: "O cliente quer previsibilidade e zero esforço. Confiança se constrói na repetição." },
  { myth: "\"Experiência é simpatia\"", truth: "Gentileza sem resolução é frustração educada", detail: "Um processo que resolve em 30s supera um atendente simpático que não resolve." },
];

export function Myths() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="myths" className="relative py-40 px-6">
      <div className="absolute top-6 right-8 text-[14rem] font-bold leading-none pointer-events-none select-none opacity-[0.015]" style={{ fontFamily: "var(--font-display)" }}>02</div>

      <div ref={ref} className="max-w-[1200px] mx-auto">
        <BlurReveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-[var(--color-primary)]" />
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">O que quase todo mundo entende errado</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[20ch] mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Cinco coisas que você acredita sobre CX — e que estão te atrasando
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[50ch]">
            Clique em cada card para revelar o que realmente está em jogo.
          </p>
        </BlurReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {myths.map((m, i) => (
            <MythCard key={i} {...m} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MythCard({ myth, truth, detail, index, inView }: { myth: string; truth: string; detail: string; index: number; inView: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlowCard
        className={`min-h-[240px] cursor-pointer p-7 transition-colors duration-500 ${flipped ? "!border-[rgba(0,228,184,0.2)]" : ""}`}
        glowColor={flipped ? "rgba(0,228,184,0.1)" : "rgba(255,255,255,0.05)"}
      >
        <div onClick={() => setFlipped(!flipped)} className="h-full flex flex-col justify-center">
          {!flipped ? (
            <>
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[var(--color-warn)] mb-3">Crença</span>
              <h3 className="text-[1rem] font-semibold mb-2">{myth}</h3>
              <span className="text-[0.6rem] text-[var(--color-text-muted)] mt-auto pt-4">clique para revelar →</span>
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)] mb-3 block">Verdade</span>
              <h3 className="text-[1rem] font-semibold mb-2">{truth}</h3>
              <p className="text-[0.85rem] text-[var(--color-text-secondary)]">{detail}</p>
            </motion.div>
          )}
        </div>
      </GlowCard>
    </motion.div>
  );
}
