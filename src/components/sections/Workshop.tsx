"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blocks = [
  { cat: "🪞 Reflexão", qs: ["O que exatamente nosso cliente espera como resultado?", "Entregamos da forma apropriada ao contexto?", "Se perguntar 'qual experiência entregamos?' — a resposta seria a mesma em todas as áreas?"] },
  { cat: "👥 Time", qs: ["Onde o cliente faz mais esforço que deveria?", "Comparando com Nubank e Amazon — onde perdemos?", "Se cortássemos metade das etapas, quais sobreviveriam?"] },
  { cat: "🏢 Liderança", qs: ["CX é prioridade real ou discurso?", "Métricas capturam experiência ou só resultado funcional?", "Qual decisão sobre CX estamos adiando?"] },
  { cat: "🔥 Provocação", qs: ["Se o cliente descrevesse nossa experiência para um amigo — o que diria?", "Investimos mais em adquirir ou em não perder?", "Qual é o nosso 'Cenário B do Uber'?"] },
];

export function Workshop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="pratica" className="snap-section flex items-center items-center bg-[#060a12]">
      <div ref={ref} className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />10 — Workshop
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          As perguntas que ninguém faz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((b, i) => (
            <motion.div key={i} className="rounded-2xl border border-white/[0.06] bg-[rgba(10,16,28,0.4)] backdrop-blur-xl p-6"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}>
              <span className="text-[0.52rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4 block">{b.cat}</span>
              <ol className="pl-4 flex flex-col gap-2">
                {b.qs.map((q, j) => (
                  <li key={j} className="text-[0.85rem] text-[var(--color-text-sec)] leading-relaxed">{q}</li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
