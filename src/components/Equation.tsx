"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Equation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const reveal = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="equation" className="relative py-40 px-6 text-center overflow-hidden">
      {/* Animated beam */}
      <motion.div
        className="absolute top-1/2 left-0 h-px w-full opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,228,184,0.2), transparent)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section number */}
      <div
        className="absolute top-8 right-8 text-[clamp(6rem,14vw,14rem)] font-bold leading-none pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-display)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent 70%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        01
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--color-primary)] mb-4">
            <span className="w-4 h-px bg-[var(--color-primary)]" />A ideia que
            muda tudo
          </span>
          <h2
            className="text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.025em] mb-5 max-w-[20ch] mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Existe uma equação que ninguém te mostrou — e ela explica por que
            seus clientes satisfeitos estão saindo
          </h2>
          <p className="text-[1.05rem] text-[var(--color-text-secondary)] max-w-[50ch] mx-auto">
            Uma fórmula invisível opera em cada interação. A maioria resolve a
            primeira metade — e se pergunta por que perde clientes que diziam
            estar satisfeitos.
          </p>
        </motion.div>

        {/* Formula */}
        <motion.div
          className="flex items-center justify-center gap-5 lg:gap-8 flex-wrap my-16"
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.3}
        >
          <EquationTerm
            title="Resultado Esperado"
            desc="O que o cliente veio resolver"
            delay={0.4}
            inView={inView}
          />
          <Operator>+</Operator>
          <EquationTerm
            title="Experiência Apropriada"
            desc="A forma como isso acontece"
            delay={0.55}
            inView={inView}
          />
          <Operator>=</Operator>
          <motion.div
            className="mt-2"
            variants={reveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
          >
            <h3
              className="text-[2rem] font-bold"
              style={{
                fontFamily: "var(--font-display)",
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sucesso do Cliente
            </h3>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-[1rem] max-w-[52ch] mx-auto text-[var(--color-text-secondary)]"
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.8}
        >
          <strong className="text-[var(--color-text)]">
            Resultado sem experiência é commodity.
          </strong>{" "}
          Qualquer concorrente substitui.{" "}
          <strong className="text-[var(--color-text)]">
            Experiência sem resultado é teatro.
          </strong>{" "}
          O cliente percebe e vai embora.
        </motion.p>

        {/* Facilitator hint */}
        <motion.div
          className="mt-10 mx-auto max-w-[620px] flex items-start gap-4 text-left bg-[rgba(129,140,248,0.04)] backdrop-blur-sm border border-[rgba(129,140,248,0.08)] rounded-2xl p-6 text-[0.85rem] text-[var(--color-text-secondary)]"
          variants={reveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
        >
          <span className="text-xl shrink-0">💬</span>
          <span>
            <strong className="text-[var(--color-text)]">
              Pause aqui.
            </strong>{" "}
            &ldquo;Se tivéssemos que dar nota de 0 a 10 para cada metade —
            resultado e experiência — quais seriam os números? E o que isso
            revela?&rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function EquationTerm({
  title,
  desc,
  delay,
  inView,
}: {
  title: string;
  desc: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="group relative bg-[rgba(14,21,37,0.6)] backdrop-blur-2xl border border-white/[0.06] rounded-3xl px-10 py-9 min-w-[270px] overflow-hidden"
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: "0 25px 70px rgba(0,228,184,0.1)",
        borderColor: "rgba(0,228,184,0.2)",
      }}
    >
      {/* Gradient border glow */}
      <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-br from-[rgba(0,228,184,0.12)] via-transparent to-[rgba(129,140,248,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      <h3 className="text-[1.1rem] font-semibold mb-1.5">{title}</h3>
      <p className="text-[0.82rem] text-[var(--color-text-muted)]">{desc}</p>
    </motion.div>
  );
}

function Operator({ children }: { children: string }) {
  return (
    <span
      className="text-[3rem] font-bold select-none"
      style={{
        fontFamily: "var(--font-display)",
        background:
          "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}
