"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(0,228,184,0.07), transparent 70%)",
          filter: "blur(120px)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.05), transparent 70%)",
          filter: "blur(120px)",
          bottom: "-10%",
          right: "-5%",
        }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(0,228,184,0.04), transparent 70%)",
          filter: "blur(120px)",
          top: "40%",
          right: "20%",
        }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 14 }}
      />
    </div>
  );
}
