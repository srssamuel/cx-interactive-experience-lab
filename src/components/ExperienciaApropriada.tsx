"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionNum, Label } from "./Resultado";

const dims = [
  { title: "Contexto", q: "Onde o cliente está naquele momento?", text: "O mesmo cliente precisa de respostas diferentes em horários, canais e momentos de vida diferentes. Tratar todos os contextos igual é entregar experiência genérica — e genérico é o antônimo de apropriado." },
  { title: "Preferência", q: "Como esse cliente gosta de interagir?", text: "Alguns querem conversar. Outros resolver sozinhos. Experiência apropriada respeita preferência — não impõe o canal mais barato para a operação." },
  { title: "Esforço", q: "Quanto trabalho o cliente faz?", text: "O preditor mais forte de deslealdade. Cada formulário desnecessário, cada \"pode repetir?\" é atrito que corrói em silêncio. 96% dos clientes de alto esforço se tornaram desleais (CEB/Gartner). Entre os de baixo esforço, 9%." },
  { title: "Fluidez", q: "A jornada é contínua ou fragmentada?", text: "Começa no app, continua no WhatsApp, liga pro call center. Se a empresa não mantém contexto entre transições, o cliente sente que lida com três empresas dentro da mesma marca." },
  { title: "Coerência", q: "A promessa se sustenta?", text: "Propaganda: \"somos simples\". Contrato: 47 páginas. Marketing: \"estamos com você\". Suporte: 3 dias. Quando a experiência contradiz a promessa, perde-se credibilidade." },
  { title: "Previsibilidade", q: "O cliente sabe o que esperar?", text: "Incerteza gera ansiedade → contato → custo. Prazos claros, status visível, comunicação proativa. Quando o cliente não pergunta \"e aí?\", a experiência funciona." },
];

export function ExperienciaApropriada() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experiencia" className="relative py-36 px-6">
      <SectionNum>04</SectionNum>
      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Label>Experiência Apropriada</Label>
          <h2 className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] mb-3 max-w-[22ch]" style={{ fontFamily: "var(--font-display)" }}>
            Você resolve o problema do cliente. Mas da forma errada. E é aí que perde ele.
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[55ch]">
            A forma como se entrega — contexto, preferência, esforço, fluidez — transforma transação em relação.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2">
          {dims.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className={`rounded-2xl border overflow-hidden transition-all duration-400 backdrop-blur-xl ${
                open === i ? "border-[rgba(0,228,184,0.2)] shadow-[0_0_30px_rgba(0,228,184,0.04)]" : "border-white/[0.06]"
              } bg-[rgba(14,21,37,0.5)]`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-7 py-5 text-left transition-colors hover:bg-white/[0.015]"
              >
                <span className="text-[0.95rem] font-medium">
                  <span className="text-[var(--color-primary)] mr-3 text-[0.7rem] font-bold">{String(i + 1).padStart(2, "0")}</span>
                  {d.title} — {d.q}
                </span>
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-4 h-4 shrink-0 text-[var(--color-text-muted)]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6">
                      <p className="text-[0.95rem] text-[var(--color-text-secondary)] max-w-[55ch]">
                        {d.text}
                      </p>
                    </div>
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
