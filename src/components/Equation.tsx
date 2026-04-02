"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Equation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="equation" className="relative py-36 px-6 text-center overflow-hidden">
      {/* Animated line beam */}
      <motion.div
        className="absolute top-1/2 left-0 h-px w-full opacity-40"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,228,184,0.15), transparent)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section number watermark */}
      <div
        className="absolute top-8 right-8 text-[clamp(6rem,12vw,12rem)] font-bold leading-none pointer-events-none z-0"
        style={{
          fontFamily: "var(--font-display)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.025), transparent 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        01
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-4">
            <span className="w-4 h-px bg-[var(--color-primary)]" />
            A ideia que muda tudo
          </span>
          <h2
            className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.025em] mb-4 max-w-[18ch] mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Existe uma equação que ninguém te mostrou — e ela explica por que
            seus clientes satisfeitos estão saindo
          </h2>
          <p className="text-[1.08rem] text-[var(--color-text-secondary)] max-w-[52ch] mx-auto">
            Uma fórmula invisível opera em cada interação. A maioria resolve a
            primeira metade — e se pergunta por que perde clientes que diziam
            estar satisfeitos.
          </p>
        </motion.div>

        {/* Formula */}
        <motion.div
          className="flex items-center justify-center gap-6 flex-wrap my-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <EquationTerm title="Resultado Esperado" desc="O que o cliente veio resolver" />
          <span
            className="text-[2.8rem] font-bold"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            +
          </span>
          <EquationTerm title="Experiência Apropriada" desc="A forma como isso acontece" />
          <span
            className="text-[2.8rem] font-bold"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            =
          </span>
          <div className="mt-4">
            <h3
              className="text-[1.8rem] font-bold"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sucesso do Cliente
            </h3>
          </div>
        </motion.div>

        <motion.p
          className="text-[1rem] max-w-[52ch] mx-auto text-[var(--color-text-secondary)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <strong className="text-[var(--color-text)]">Resultado sem experiência é commodity.</strong>{" "}
          Qualquer concorrente substitui.{" "}
          <strong className="text-[var(--color-text)]">Experiência sem resultado é teatro.</strong>{" "}
          O cliente percebe e vai embora.
        </motion.p>

        {/* Facilitator hint */}
        <motion.div
          className="mt-8 flex items-start gap-4 max-w-[600px] mx-auto text-left bg-[rgba(129,140,248,0.04)] backdrop-blur-sm border border-[rgba(129,140,248,0.08)] rounded-2xl p-5 text-[0.85rem] text-[var(--color-text-secondary)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="text-lg shrink-0">💬</span>
          <span>
            <strong className="text-[var(--color-text)]">Pause aqui.</strong>{" "}
            &ldquo;Se tivéssemos que dar nota de 0 a 10 para cada metade —
            resultado e experiência — quais seriam os números? E o que isso
            revela?&rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function EquationTerm({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      className="relative group bg-[rgba(14,21,37,0.65)] backdrop-blur-xl border border-white/6 rounded-[20px] px-10 py-8 min-w-[260px] overflow-hidden transition-all duration-400"
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,228,184,0.08)" }}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-[-1px] rounded-[20px] bg-gradient-to-br from-[rgba(0,228,184,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />
      <h3 className="text-[1.05rem] font-semibold mb-1">{title}</h3>
      <p className="text-[0.82rem] text-[var(--color-text-muted)]">{desc}</p>
    </motion.div>
  );
}
