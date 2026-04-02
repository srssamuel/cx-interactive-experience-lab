"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionNum, Label } from "./Resultado";

const blocks = [
  { cat: "🪞 Reflexão", qs: ["O que exatamente nosso cliente espera como resultado?", "Entregamos de forma consistente?", "Entregamos da forma apropriada ao contexto?", 'Se perguntar "qual experiência entregamos?", a resposta seria a mesma em todas as áreas?'] },
  { cat: "👥 Time", qs: ["Onde o cliente faz mais esforço que deveria?", "Comparando com Spotify, Nubank, Amazon — onde perdemos?", "O que sabemos que não estamos usando?", "Se cortássemos metade das etapas, quais sobreviveriam?"] },
  { cat: "🏢 Liderança", qs: ["CX é prioridade real ou discurso? Como sabemos?", "Métricas capturam experiência ou só resultado funcional?", "Reduzir custo ou reduzir esforço do cliente — qual escolheríamos?", "Qual decisão sobre CX estamos adiando?"] },
  { cat: "🔥 Provocação", qs: ["Se o cliente descrevesse nossa experiência para um amigo — o que diria?", "Investimos mais em adquirir ou em não perder?", 'Qual é o nosso "Cenário B do Uber"?'] },
];

export function Workshop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pratica" className="relative py-36 px-6">
      <SectionNum>10</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 30, filter: "blur(6px)" }} animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <Label>Workshop</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] max-w-[24ch]" style={{ fontFamily: "var(--font-display)" }}>
            As perguntas que ninguém faz — e que mudam a conversa sobre CX na sua empresa
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              className="bg-[rgba(14,21,37,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 hover:border-white/[0.1] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] mb-5 block">{b.cat}</span>
              <ol className="pl-5 flex flex-col gap-3">
                {b.qs.map((q, j) => (
                  <li key={j} className="text-[0.92rem] text-[var(--color-text-secondary)] leading-relaxed">{q}</li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 flex items-start gap-4 max-w-[620px] text-left bg-[rgba(129,140,248,0.04)] backdrop-blur-sm border border-[rgba(129,140,248,0.08)] rounded-2xl p-6 text-[0.85rem] text-[var(--color-text-secondary)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-lg shrink-0">💬</span>
          <span>
            <strong className="text-[var(--color-text)]">Método:</strong> 1 pergunta por bloco. Projete na tela. 2 min de silêncio para escrever. Só depois abra discussão.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
