"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function Equation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="equation" className="snap-section justify-center bg-[#060a12] relative">
      <BackgroundBeams />

      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center">
        <motion.span
          className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <span className="w-5 h-px bg-[var(--color-primary)]" />
          01 — A ideia que muda tudo
        </motion.span>

        <motion.h2
          className="text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.02] tracking-[-0.03em] max-w-[16ch] mx-auto mb-8"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Uma equação que ninguém te mostrou
        </motion.h2>

        <motion.p
          className="text-[1.1rem] text-[var(--color-text-sec)] max-w-[44ch] mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          E ela explica por que seus clientes satisfeitos estão saindo.
        </motion.p>

        {/* Formula */}
        <motion.div
          className="flex items-center justify-center gap-4 lg:gap-8 flex-wrap mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <div className="group relative rounded-2xl border border-white/[0.08] bg-[rgba(10,16,28,0.6)] backdrop-blur-xl px-10 py-8 min-w-[250px] overflow-hidden transition-all duration-500 hover:border-[rgba(0,228,184,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,228,184,0.08)]">
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-[rgba(0,228,184,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <h3 className="text-[1.1rem] font-semibold mb-1">Resultado Esperado</h3>
            <p className="text-[0.82rem] text-[var(--color-text-muted)]">O que o cliente veio resolver</p>
          </div>

          <span
            className="text-[3rem] font-bold select-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            +
          </span>

          <div className="group relative rounded-2xl border border-white/[0.08] bg-[rgba(10,16,28,0.6)] backdrop-blur-xl px-10 py-8 min-w-[250px] overflow-hidden transition-all duration-500 hover:border-[rgba(129,140,248,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(129,140,248,0.08)]">
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-[rgba(129,140,248,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <h3 className="text-[1.1rem] font-semibold mb-1">Experiência Apropriada</h3>
            <p className="text-[0.82rem] text-[var(--color-text-muted)]">A forma como isso acontece</p>
          </div>

          <span
            className="text-[3rem] font-bold select-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            =
          </span>

          <div>
            <h3
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sucesso do Cliente
            </h3>
          </div>
        </motion.div>

        <motion.p
          className="text-[1rem] text-[var(--color-text-sec)] max-w-[50ch] mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <strong className="text-[var(--color-text)]">Resultado sem experiência é commodity.</strong>{" "}
          <strong className="text-[var(--color-text)]">Experiência sem resultado é teatro.</strong>{" "}
          Sucesso só existe quando os dois se encontram.
        </motion.p>
      </div>
    </section>
  );
}
