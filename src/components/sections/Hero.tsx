"use client";

import { motion } from "framer-motion";
import { LampEffect } from "../ui/lamp";

export function Hero() {
  return (
    <section id="hero" className="snap-section bg-[var(--color-bg)]" style={{ display: "block", position: "relative" }}>
      {/* Lamp as background layer */}
      <LampEffect />

      {/* Content centered in viewport */}
      <div className="relative z-50 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[900px]"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
            <span className="text-[0.55rem] font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Experiência do Cliente
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--color-primary)]" />
          </div>

          {/* Title */}
          <h1
            className="text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Seu cliente chegou ao destino. </span>
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Mas não voltaria a viajar com você.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(0.95rem,1.4vw,1.2rem)] text-[var(--color-text-sec)] max-w-[38ch] mx-auto mb-12 leading-relaxed">
            Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 mb-12">
            <div className="text-center">
              <span className="text-[3rem] font-bold leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent block" style={{ fontFamily: "var(--font-display)" }}>73%</span>
              <span className="text-[0.6rem] text-[var(--color-text-muted)] uppercase tracking-[0.12em] mt-1 block">saem sem reclamar</span>
            </div>
            <div className="w-px h-10 bg-white/[0.06]" />
            <div className="text-center">
              <span className="text-[3rem] font-bold leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent block" style={{ fontFamily: "var(--font-display)" }}>96%</span>
              <span className="text-[0.6rem] text-[var(--color-text-muted)] uppercase tracking-[0.12em] mt-1 block">alto esforço = deslealdade</span>
            </div>
          </div>

          {/* CTA */}
          <a href="#equation" className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)] border border-[rgba(0,228,184,0.2)] bg-[rgba(0,228,184,0.04)] transition-all duration-500 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:border-[var(--color-primary)] hover:shadow-[0_0_60px_rgba(0,228,184,0.2)]">
            Explorar a equação ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">scroll ou ↓</span>
        <motion.div
          className="w-px bg-gradient-to-b from-transparent to-[var(--color-text-muted)]"
          animate={{ height: [20, 32, 20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
