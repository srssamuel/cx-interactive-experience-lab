"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const line1 = ["Seu", "cliente", "chegou", "ao", "destino."];
const line2 = ["Mas", "não", "voltaria", "a", "viajar", "com", "você."];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section id="hero" className="snap-section justify-center">
      {/* Mouse-reactive gradient */}
      <div
        className="absolute inset-0 transition-all duration-[3000ms]"
        style={{
          background: `
            radial-gradient(900px ellipse at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(0,228,184,0.07), transparent 50%),
            radial-gradient(600px ellipse at ${100 - mouse.x * 60}% ${100 - mouse.y * 60}%, rgba(129,140,248,0.04), transparent 50%)
          `,
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-[var(--color-primary)] shadow-[0_0_0_1px_rgba(0,228,184,0.04)] before:absolute before:top-1/2 before:h-px before:w-10 before:-translate-y-1/2 before:bg-gradient-to-r before:from-[rgba(0,228,184,0.25)] before:to-transparent"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s`, animationDuration: `${2 + Math.random() * 4}s` }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent,var(--color-bg)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">
        <motion.div className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
          <span className="text-[0.55rem] font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">Experiência do Cliente</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--color-primary)]" />
        </motion.div>

        <h1 style={{ fontFamily: "var(--font-display)" }} className="font-bold leading-[0.92] tracking-[-0.04em] mb-12">
          {line1.map((w, i) => (
            <span key={`a${i}`} className="inline-block overflow-hidden mr-[0.18em]">
              <motion.span className="inline-block text-[clamp(2.8rem,7vw,7rem)]"
                initial={{ y: "115%", rotateX: 50 }} animate={{ y: "0%", rotateX: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            </span>
          ))}
          <br className="hidden sm:block" />
          {line2.map((w, i) => (
            <span key={`b${i}`} className="inline-block overflow-hidden mr-[0.18em]">
              <motion.span className={`inline-block text-[clamp(2.8rem,7vw,7rem)] ${i >= 2 ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent" : ""}`}
                initial={{ y: "115%", rotateX: 50 }} animate={{ y: "0%", rotateX: 0 }}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p className="text-[clamp(0.95rem,1.4vw,1.2rem)] text-[var(--color-text-sec)] max-w-[36ch] mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }}>
          Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
          <div className="text-center">
            <span className="text-[3rem] font-bold leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent block" style={{ fontFamily: "var(--font-display)" }}>73%</span>
            <span className="text-[0.6rem] text-[var(--color-text-muted)] uppercase tracking-[0.12em] mt-1 block">saem sem reclamar</span>
          </div>
          <div className="w-px h-10 bg-white/[0.06]" />
          <div className="text-center">
            <span className="text-[3rem] font-bold leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent block" style={{ fontFamily: "var(--font-display)" }}>96%</span>
            <span className="text-[0.6rem] text-[var(--color-text-muted)] uppercase tracking-[0.12em] mt-1 block">alto esforço = deslealdade</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span className="text-[0.5rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">scroll ou ↓</span>
        <motion.div className="w-px bg-gradient-to-b from-transparent to-[var(--color-text-muted)]"
          animate={{ height: [20, 32, 20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}
