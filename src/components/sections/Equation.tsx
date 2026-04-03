"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Equation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="equation" className="snap-section flex items-center justify-center" style={{ background: "#060a12" }}>

      {/* Animated beams as SVG */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15, pointerEvents: "none" }}>
        {[
          "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
          "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
          "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
          "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
          "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
        ].map((d, i) => (
          <motion.path
            key={i} d={d} fill="none"
            stroke="url(#beamGrad)" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          />
        ))}
        <defs>
          <linearGradient id="beamGrad">
            <stop offset="0%" stopColor="rgba(0,228,184,0)" />
            <stop offset="50%" stopColor="rgba(0,228,184,0.5)" />
            <stop offset="100%" stopColor="rgba(129,140,248,0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,228,184,0.04), transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div ref={ref} className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center">
        <motion.span
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.55rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#00e4b8", marginBottom: "2rem" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <span style={{ width: 20, height: 1, background: "#00e4b8" }} />
          01 — A ideia que muda tudo
        </motion.span>

        <motion.h2
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4.2rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: "16ch", margin: "0 auto 2rem" }}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          Uma equação que ninguém te mostrou
        </motion.h2>

        <motion.p
          style={{ fontSize: "1.1rem", color: "#8899ac", maxWidth: "44ch", margin: "0 auto 4rem" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          E ela explica por que seus clientes satisfeitos estão saindo.
        </motion.p>

        {/* Formula */}
        <motion.div
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}>

          <div style={{
            padding: "2rem 2.5rem", minWidth: 250, borderRadius: 16,
            background: "rgba(10,16,28,0.6)", border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            transition: "all 0.5s",
          }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Resultado Esperado</h3>
            <p style={{ fontSize: "0.82rem", color: "#3d4f63" }}>O que o cliente veio resolver</p>
          </div>

          <span style={{
            fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700,
            background: "linear-gradient(135deg, #00e4b8, #818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>+</span>

          <div style={{
            padding: "2rem 2.5rem", minWidth: 250, borderRadius: 16,
            background: "rgba(10,16,28,0.6)", border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Experiência Apropriada</h3>
            <p style={{ fontSize: "0.82rem", color: "#3d4f63" }}>A forma como isso acontece</p>
          </div>

          <span style={{
            fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700,
            background: "linear-gradient(135deg, #00e4b8, #818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>=</span>

          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #00e4b8, #818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Sucesso do Cliente
          </h3>
        </motion.div>

        <motion.p style={{ fontSize: "1rem", color: "#8899ac", maxWidth: "50ch", margin: "0 auto" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <strong style={{ color: "#f0f4f8" }}>Resultado sem experiência é commodity.</strong>{" "}
          <strong style={{ color: "#f0f4f8" }}>Experiência sem resultado é teatro.</strong>{" "}
          Sucesso só existe quando os dois se encontram.
        </motion.p>
      </div>
    </section>
  );
}
