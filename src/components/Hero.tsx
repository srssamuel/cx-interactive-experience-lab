"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import { AnimatedCounter } from "./ui/animated-counter";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient that follows mouse */}
      <div
        className="absolute inset-0 z-0 transition-all duration-[2000ms] ease-out"
        style={{
          background: `
            radial-gradient(800px ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,228,184,0.08), transparent 50%),
            radial-gradient(600px ellipse at ${100 - mousePos.x * 100}% ${100 - mousePos.y * 100}%, rgba(129,140,248,0.05), transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,228,184,0.04), transparent 70%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Meteors number={15} />

      {/* Vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,var(--color-bg)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1000px]">
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="h-px w-8 bg-[var(--color-primary)]" />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Experiência do Cliente — Repensada
          </span>
          <span className="h-px w-8 bg-[var(--color-primary)]" />
        </motion.div>

        {/* Title — word by word reveal */}
        <h1 className="font-bold leading-[0.95] tracking-[-0.04em] mb-10" style={{ fontFamily: "var(--font-display)" }}>
          {["Seu", "cliente", "chegou", "ao", "destino."].map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
              <motion.span
                className="inline-block text-[clamp(3rem,7vw,6.5rem)]"
                initial={{ y: "110%", rotateX: 40 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <br />
          {["Mas", "não", "voltaria", "a", "viajar", "com", "você."].map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em]">
              <motion.span
                className="inline-block text-[clamp(3rem,7vw,6.5rem)]"
                style={{
                  background: i >= 2 ? "linear-gradient(135deg, var(--color-primary), var(--color-accent))" : undefined,
                  WebkitBackgroundClip: i >= 2 ? "text" : undefined,
                  WebkitTextFillColor: i >= 2 ? "transparent" : undefined,
                }}
                initial={{ y: "110%", rotateX: 40 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--color-text-secondary)] max-w-[38ch] mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
        </motion.p>

        {/* Impact stat */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="text-center">
            <AnimatedCounter target={73} suffix="%" className="text-[3.5rem] font-bold block leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent" />
            <span className="text-[0.65rem] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mt-2 block">dos clientes saem sem reclamar</span>
          </div>
          <div className="w-px h-12 bg-white/[0.06]" />
          <div className="text-center">
            <AnimatedCounter target={96} suffix="%" className="text-[3.5rem] font-bold block leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent" />
            <span className="text-[0.65rem] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mt-2 block">de alto esforço se tornam desleais</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#equation"
          className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.15em] overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          {/* Button glow bg */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <span className="absolute inset-[1px] rounded-full bg-[var(--color-bg)]" />
          <span className="absolute inset-0 rounded-full border border-white/[0.1] group-hover:border-[var(--color-primary)]/30 transition-colors duration-500" />
          <span className="relative z-10 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500">
            Explorar a equação
          </span>
          <motion.svg
            className="relative z-10 w-4 h-4 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500"
            viewBox="0 0 16 16"
            fill="none"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M8 3v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-20" />
    </section>
  );
}
