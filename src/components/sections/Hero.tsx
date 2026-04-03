"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="snap-section" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#050810", position: "relative" }}>

      {/* MASSIVE teal glow - very visible */}
      <div style={{
        position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
        width: "1200px", height: "900px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,228,184,0.25) 0%, rgba(0,228,184,0.08) 40%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none", zIndex: 1,
      }} />

      {/* Purple glow right */}
      <div style={{
        position: "absolute", top: "0%", right: "-15%",
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(129,140,248,0.15) 0%, transparent 60%)",
        filter: "blur(100px)", pointerEvents: "none", zIndex: 1,
      }} />

      {/* Warm glow bottom-left */}
      <div style={{
        position: "absolute", bottom: "-20%", left: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(129,140,248,0.08) 0%, transparent 60%)",
        filter: "blur(80px)", pointerEvents: "none", zIndex: 1,
      }} />

      {/* BRIGHT horizontal light beam */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "70vw", opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)",
          height: "2px", zIndex: 2,
          background: "linear-gradient(90deg, transparent 0%, rgba(0,228,184,0.8) 30%, rgba(0,228,184,1) 50%, rgba(0,228,184,0.8) 70%, transparent 100%)",
          boxShadow: "0 0 40px 8px rgba(0,228,184,0.3), 0 0 120px 20px rgba(0,228,184,0.1), 0 0 200px 40px rgba(0,228,184,0.05)",
          pointerEvents: "none",
        }}
      />

      {/* LARGE diffuse glow behind beam */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.2 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "300px", borderRadius: "50%", zIndex: 1,
          background: "radial-gradient(ellipse, rgba(0,228,184,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }}
      />

      {/* Grid pattern - MORE visible */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 1,
        backgroundImage: "linear-gradient(rgba(0,228,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,228,184,0.15) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Meteors - BIGGER, BRIGHTER */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{
            position: "absolute",
            top: `${10 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            width: "2px", height: "2px",
            borderRadius: "50%",
            background: "#00e4b8",
            boxShadow: "0 0 4px 1px rgba(0,228,184,0.3)",
            transform: "rotate(215deg)",
            animation: `meteor ${2 + Math.random() * 3}s linear ${Math.random() * 4}s infinite`,
          }}>
            <span style={{
              position: "absolute", top: "50%", left: 0, width: "60px", height: "1px",
              transform: "translateY(-50%)",
              background: "linear-gradient(90deg, rgba(0,228,184,0.5), transparent)",
            }} />
          </span>
        ))}
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
        background: "linear-gradient(transparent, #050810)", pointerEvents: "none", zIndex: 3,
      }} />

      {/* Top fade */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "15%",
        background: "linear-gradient(#050810, transparent)", pointerEvents: "none", zIndex: 3,
      }} />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #00e4b8)" }} />
            <span style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.35em", color: "#00e4b8" }}>
              Experiência do Cliente
            </span>
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg, #00e4b8, transparent)" }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700,
            fontSize: "clamp(2.2rem, 6vw, 5.5rem)", lineHeight: 0.95,
            letterSpacing: "-0.04em", marginBottom: 32,
          }}>
            <span style={{ color: "#f0f4f8" }}>Seu cliente chegou ao destino. </span>
            <span style={{
              background: "linear-gradient(135deg, #00e4b8 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Mas não voltaria a viajar com você.
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)", color: "#8899ac",
            maxWidth: "38ch", margin: "0 auto 48px", lineHeight: 1.6,
          }}>
            Entregar o resultado certo da forma errada tem nome: fracasso silencioso.
          </p>

          {/* Stats with GLOW */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, marginBottom: 48 }}>
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.5rem", fontWeight: 700, lineHeight: 1,
                background: "linear-gradient(135deg, #00e4b8, #818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block",
                filter: "drop-shadow(0 0 20px rgba(0,228,184,0.3))",
              }}>73%</span>
              <span style={{ fontSize: "0.6rem", color: "#4a5a6f", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4, display: "block" }}>
                saem sem reclamar
              </span>
            </div>
            <div style={{ width: 1, height: 48, background: "rgba(0,228,184,0.15)" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3.5rem", fontWeight: 700, lineHeight: 1,
                background: "linear-gradient(135deg, #00e4b8, #818cf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block",
                filter: "drop-shadow(0 0 20px rgba(0,228,184,0.3))",
              }}>96%</span>
              <span style={{ fontSize: "0.6rem", color: "#4a5a6f", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4, display: "block" }}>
                alto esforço = deslealdade
              </span>
            </div>
          </div>

          {/* CTA with GLOW */}
          <a href="#equation" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "14px 40px", borderRadius: 999,
            fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#00e4b8", border: "1px solid rgba(0,228,184,0.3)", background: "rgba(0,228,184,0.06)",
            textDecoration: "none", transition: "all 0.5s",
            boxShadow: "0 0 30px rgba(0,228,184,0.08), inset 0 0 30px rgba(0,228,184,0.03)",
          }}>
            Explorar a equação ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 10 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <span style={{ fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4a5a6f" }}>scroll ou ↓</span>
        <motion.div
          style={{ width: 1, background: "linear-gradient(transparent, #00e4b8)" }}
          animate={{ height: [20, 36, 20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
