"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const dims = [
  { n: "01", t: "Contexto", q: "Onde o cliente está?", a: "Tratar todos os contextos igual é entregar experiência genérica. Genérico é o antônimo de apropriado." },
  { n: "02", t: "Preferência", q: "Como gosta de interagir?", a: "Experiência apropriada respeita preferência — não impõe o canal mais barato para a operação." },
  { n: "03", t: "Esforço", q: "Quanto trabalho faz?", a: "96% dos clientes de alto esforço se tornam desleais. Entre os de baixo esforço, apenas 9%." },
  { n: "04", t: "Fluidez", q: "Jornada contínua ou fragmentada?", a: "Se a empresa não mantém contexto entre canais, o cliente sente que lida com três empresas diferentes." },
  { n: "05", t: "Coerência", q: "A promessa se sustenta?", a: "Propaganda: 'somos simples'. Contrato: 47 páginas. Quando contradiz, perde credibilidade." },
  { n: "06", t: "Previsibilidade", q: "Sabe o que esperar?", a: "Incerteza → ansiedade → contato → custo. Quando não precisa perguntar 'e aí?', funciona." },
];

export function Experiencia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experiencia" className="snap-section flex items-center items-center bg-[#060a12]">
      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />04 — Experiência Apropriada
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Você resolve o problema. Mas da forma errada.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dims.map((d, i) => (
            <motion.div key={i} onClick={() => setOpen(open === i ? null : i)}
              className={`cursor-pointer rounded-2xl border p-5 backdrop-blur-xl transition-all duration-400 ${
                open === i ? "border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.03)]" : "border-white/[0.06] bg-[rgba(10,16,28,0.4)] hover:border-white/[0.1]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              whileHover={{ y: -2 }}>
              <span className="text-[0.5rem] font-bold text-[var(--color-primary)] tracking-[0.12em]">{d.n}</span>
              <h3 className="text-[0.95rem] font-semibold mt-1 mb-1">{d.t}</h3>
              <p className="text-[0.78rem] text-[var(--color-text-muted)] mb-2">{d.q}</p>
              <AnimatePresence>
                {open === i && (
                  <motion.p className="text-[0.82rem] text-[var(--color-text-sec)] pt-2 border-t border-white/[0.06]"
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}>
                    {d.a}
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
