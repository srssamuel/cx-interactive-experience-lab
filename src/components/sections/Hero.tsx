"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#050810" }}>

      {/* === VISUAL LAYER 1: Large teal glow top-center === */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,228,184,0.12) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* === VISUAL LAYER 2: Accent glow right === */}
      <div style={{
        position: "absolute", top: "10%", right: "-10%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* === VISUAL LAYER 3: Horizontal light line === */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "50vw", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute", top: "38%", left: "50%", transform: "translateX(-50%)",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,228,184,0.6), transparent)",
          boxShadow: "0 0 30px 4px rgba(0,228,184,0.15), 0 0 100px 10px rgba(0,228,184,0.05)",
          pointerEvents: "none",
        }}
      />

      {/* === VISUAL LAYER 4: Diffuse glow behind line === */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{ opacity: 0.3, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,228,184,0.08), transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }}
      />

      {/* === VISUAL LAYER 5: Grid pattern === */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* === VISUAL LAYER 6: Bottom fade === */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
        background: "linear-gradient(transparent, #050810)",
        pointerEvents: "none",
      }} />

      {/* === CONTENT === */}
      <div className="relative z-10 text-center px-6 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #00e4b8)" }} />
            <span style={{ fontSize: "0.55rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.35em", color: "#00e4b8" }}>
              Experiência do Cliente
            </span>
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, #00e4b8, transparent)" }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(2.2rem, 6vw, 5.5rem)", lineHeight: 0.95,
            letterSpacing: "-0.04em", marginBottom: "2rem",
          }}>
            <span>Seu cliente chegou ao destino. </span>
            <span style={{
              background: "linear-gradient(135deg, #00e4b8, #818cf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Mas não voltaria a viajar com você.
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", color: "#8899ac",
            maxWidth: "38ch", margin: "0 auto 3rem", lineHeight: 1.6,
          }}>
            Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", marginBottom: "3rem" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700, lineHeight: 1,
                background: "linear-gradient(135deg, #00e4b8, #818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block",
              }}>73%</span>
              <span style={{ fontSize: "0.6rem", color: "#3d4f63", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                saem sem reclamar
              </span>
            </div>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.06)" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700, lineHeight: 1,
                background: "linear-gradient(135deg, #00e4b8, #818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block",
              }}>96%</span>
              <span style={{ fontSize: "0.6rem", color: "#3d4f63", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                alto esforço = deslealdade
              </span>
            </div>
          </div>

          {/* CTA */}
          <a href="#equation" style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "1rem 2.5rem", borderRadius: "999px",
            fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#00e4b8", border: "1px solid rgba(0,228,184,0.2)", background: "rgba(0,228,184,0.04)",
            textDecoration: "none", transition: "all 0.5s",
          }}>
            Explorar a equação ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span style={{ fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#3d4f63" }}>scroll ou ↓</span>
        <motion.div
          style={{ width: 1, background: "linear-gradient(transparent, #3d4f63)" }}
          animate={{ height: [20, 32, 20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
