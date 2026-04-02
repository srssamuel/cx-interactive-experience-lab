"use client";

import { motion } from "framer-motion";

const lines = [
  "Seu cliente chegou",
  "ao destino. Mas não",
  "voltaria a viajar",
  "com você.",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6"
    >
      {/* Animated conic gradient mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%]"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(0,228,184,0.12) 0deg, rgba(129,140,248,0.08) 120deg, rgba(0,228,184,0.05) 240deg, rgba(0,228,184,0.12) 360deg)",
            filter: "blur(80px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--color-bg) 100%)",
          }}
        />
      </div>

      {/* Glow pulse */}
      <motion.div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,228,184,0.15), transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        <motion.span
          className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="w-4 h-px bg-[var(--color-primary)]" />
          Experiência do Cliente — Repensada
        </motion.span>

        <h1 className="font-[var(--font-display)] font-bold leading-[1.05] tracking-[-0.035em] mb-8">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ y: "110%", filter: "blur(8px)" }}
                animate={{ y: "0%", filter: "blur(0px)" }}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-[clamp(1.05rem,1.6vw,1.3rem)] text-[var(--color-text-secondary)] max-w-[42ch] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Entregar o resultado certo da forma errada tem nome: fracasso
          silencioso. A maioria das empresas comete esse erro todos os dias — e
          os dashboards não acusam.
        </motion.p>

        <motion.a
          href="#equation"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)] border border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.06)] backdrop-blur-sm transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:border-[var(--color-primary)] hover:shadow-[0_0_50px_rgba(0,228,184,0.2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Explorar a equação ↓
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[0.55rem] uppercase tracking-[0.18em]">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-text-muted)]"
          animate={{ height: [32, 40, 32], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
