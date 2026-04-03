"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Equation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const d = 0.15; // base delay

  return (
    <section id="equation" className="snap-section justify-center bg-[var(--color-bg)]">
      {/* Subtle beam */}
      <motion.div className="absolute top-1/2 left-0 h-px w-full opacity-20 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,228,184,0.15), transparent)" }}
        animate={{ x: ["-100%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center">
        <motion.span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-8"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: d }}>
          <span className="w-5 h-px bg-[var(--color-primary)]" />01 — A ideia que muda tudo
        </motion.span>

        <motion.h2 className="text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[16ch] mx-auto mb-8"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: d * 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Uma equação que ninguém te mostrou
        </motion.h2>

        <motion.p className="text-[1.1rem] text-[var(--color-text-sec)] max-w-[44ch] mx-auto mb-16"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: d * 3, duration: 0.7 }}>
          E ela explica por que seus clientes satisfeitos estão saindo.
        </motion.p>

        {/* Formula — the centerpiece */}
        <motion.div className="flex items-center justify-center gap-4 lg:gap-8 flex-wrap mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: d * 4, duration: 0.8 }}>
          <Term title="Resultado Esperado" sub="O que o cliente veio resolver" />
          <Op>+</Op>
          <Term title="Experiência Apropriada" sub="A forma como isso acontece" />
          <Op>=</Op>
          <div>
            <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-display)" }}>
              Sucesso do Cliente
            </h3>
          </div>
        </motion.div>

        <motion.p className="text-[1rem] text-[var(--color-text-sec)] max-w-[50ch] mx-auto"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: d * 6 }}>
          <strong className="text-[var(--color-text)]">Resultado sem experiência é commodity.</strong>{" "}
          <strong className="text-[var(--color-text)]">Experiência sem resultado é teatro.</strong>{" "}
          Sucesso só existe quando os dois se encontram.
        </motion.p>
      </div>
    </section>
  );
}

function Term({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.06] bg-[rgba(10,16,28,0.5)] backdrop-blur-xl px-8 py-7 min-w-[240px] overflow-hidden transition-all duration-500 hover:border-[rgba(0,228,184,0.15)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,228,184,0.06)]">
      <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-[rgba(0,228,184,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      <h3 className="text-[1.05rem] font-semibold mb-1">{title}</h3>
      <p className="text-[0.78rem] text-[var(--color-text-muted)]">{sub}</p>
    </div>
  );
}

function Op({ children }: { children: string }) {
  return (
    <span className="text-[3rem] font-bold select-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
      style={{ fontFamily: "var(--font-display)" }}>
      {children}
    </span>
  );
}
