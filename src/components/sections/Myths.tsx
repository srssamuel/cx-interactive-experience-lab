"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const myths = [
  { myth: "\"Experiência é atendimento\"", truth: "Atendimento é remédio, não saúde", detail: "A melhor experiência resolve antes de gerar contato." },
  { myth: "\"Experiência é NPS\"", truth: "NPS mede intenção, não comportamento", detail: "Clientes dão 9 e cancelam no mês seguinte." },
  { myth: "\"Experiência é UX\"", truth: "UX é uma fatia, não o bolo", detail: "Inclui compra, entrega, suporte, cobrança, renovação." },
  { myth: "\"Experiência é encantar\"", truth: "Encantamento cansa. Consistência fideliza.", detail: "Confiança se constrói na repetição." },
  { myth: "\"Experiência é simpatia\"", truth: "Gentileza sem resolução é frustração educada", detail: "Processo que resolve em 30s supera simpatia que não resolve." },
];

export function Myths() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="myths" className="snap-section items-center bg-[#060a12]">
      <div ref={ref} className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />02 — O que quase todo mundo entende errado
        </motion.span>

        <motion.h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[18ch] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Cinco crenças que estão te atrasando
        </motion.h2>

        <motion.p className="text-[1rem] text-[var(--color-text-sec)] mb-12 max-w-[45ch]"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          Clique para revelar o que está por trás de cada uma.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {myths.map((m, i) => (
            <MythCard key={i} {...m} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MythCard({ myth, truth, detail, i, inView }: { myth: string; truth: string; detail: string; i: number; inView: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className={`relative cursor-pointer rounded-2xl border p-6 min-h-[200px] flex flex-col justify-center backdrop-blur-xl overflow-hidden transition-all duration-500 ${
        flipped ? "border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.04)]" : "border-white/[0.06] bg-[rgba(10,16,28,0.5)] hover:border-white/[0.1]"
      }`}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      {!flipped ? (
        <>
          <span className="text-[0.5rem] font-bold uppercase tracking-[0.14em] text-[var(--color-warn)] mb-2">Crença</span>
          <h3 className="text-[0.95rem] font-semibold mb-2">{myth}</h3>
          <span className="text-[0.55rem] text-[var(--color-text-muted)] mt-auto">clique →</span>
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span className="text-[0.5rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2 block">Verdade</span>
          <h3 className="text-[0.95rem] font-semibold mb-2">{truth}</h3>
          <p className="text-[0.82rem] text-[var(--color-text-sec)]">{detail}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
