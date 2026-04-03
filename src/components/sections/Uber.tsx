"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Uber() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="uber" className="snap-section flex items-center items-center">
      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-16">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />05 — A equação na prática
        </motion.span>
        <motion.h2 className="text-[clamp(1.8rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[22ch] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Dois passageiros. Mesmo destino. Um volta. O outro nunca mais.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div className="relative rounded-2xl border border-white/[0.06] bg-[rgba(10,16,28,0.4)] backdrop-blur-xl p-7 overflow-hidden"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded-l-2xl" />
            <span className="text-[0.5rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] bg-[rgba(0,228,184,0.08)] px-3 py-1 rounded-full inline-block mb-4">Experiência apropriada</span>
            <h3 className="text-[1.05rem] font-semibold mb-3">Cenário A — Volta</h3>
            <p className="text-[0.88rem] text-[var(--color-text-sec)] mb-4">Carro limpo, no horário. Motorista cumprimenta sem excesso. Ar confortável. Som baixo. Trajeto eficiente. Chega tranquilo.</p>
            <p className="text-[0.85rem] font-medium text-[var(--color-primary)] pt-3 border-t border-white/[0.06]">→ Resultado + contexto respeitado = <strong>Sucesso</strong></p>
          </motion.div>

          <motion.div className="relative rounded-2xl border border-white/[0.06] bg-[rgba(10,16,28,0.4)] backdrop-blur-xl p-7 overflow-hidden"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-warn)] to-transparent rounded-l-2xl" />
            <span className="text-[0.5rem] font-bold uppercase tracking-[0.14em] text-[var(--color-warn)] bg-[rgba(251,113,133,0.08)] px-3 py-1 rounded-full inline-block mb-4">Experiência inapropriada</span>
            <h3 className="text-[1.05rem] font-semibold mb-3">Cenário B — Nunca mais</h3>
            <p className="text-[0.88rem] text-[var(--color-text-sec)] mb-4">8 min de atraso. Banco quente. Conversa forçada. Som alto. Caminho longo. Chega irritado.</p>
            <p className="text-[0.85rem] font-medium text-[var(--color-warn)] pt-3 border-t border-white/[0.06]">→ Resultado + contexto ignorado = <strong>Fracasso percebido</strong></p>
          </motion.div>
        </div>

        <motion.p className="text-center text-[1rem] text-[var(--color-text)] max-w-[44ch] mx-auto mt-8"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}>
          A única diferença foi a <strong>forma como aconteceu</strong>.
        </motion.p>
      </div>
    </section>
  );
}
