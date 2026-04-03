"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const chapters = [
  { id: "hero", label: "Início", num: "" },
  { id: "equation", label: "A Equação", num: "01" },
  { id: "myths", label: "Mitos", num: "02" },
  { id: "resultado", label: "Resultado", num: "03" },
  { id: "experiencia", label: "Experiência", num: "04" },
  { id: "uber", label: "Caso Uber", num: "06" },
  { id: "sistema", label: "Sistema", num: "07" },
  { id: "mudou", label: "O Novo Cliente", num: "08" },
  { id: "futuro", label: "Futuro", num: "10" },
  { id: "ia", label: "IA", num: "11" },
  { id: "pratica", label: "Workshop", num: "12" },
  { id: "fechamento", label: "Fechamento", num: "13" },
];

export function Navigation() {
  const [active, setActive] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const scrollTo = useCallback((idx: number) => {
    const container = document.querySelector(".snap-container");
    const section = document.getElementById(chapters[idx].id);
    if (container && section) {
      container.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    // Observe sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = chapters.findIndex((c) => c.id === e.target.id);
            if (idx >= 0) {
              setActive(idx);
              setShowNav(idx > 0);
            }
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    // Keyboard
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = Math.min(active + 1, chapters.length - 1);
        scrollTo(next);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(active - 1, 0);
        scrollTo(prev);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKey);
    };
  }, [active, scrollTo]);

  return (
    <AnimatePresence>
      {showNav && (
        <>
          {/* Progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[500]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: `${((active) / (chapters.length - 1)) * 100}%`,
                background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
              }}
            />
          </motion.div>

          {/* Side dots */}
          <motion.nav
            className="fixed right-6 top-1/2 -translate-y-1/2 z-[500] flex flex-col gap-3 max-lg:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {chapters.map((c, i) => (
              <button
                key={c.id}
                onClick={() => scrollTo(i)}
                className="group relative flex items-center justify-end gap-3"
                title={c.label}
              >
                {/* Label on hover */}
                <span className="text-[0.6rem] font-medium text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {c.num && <span className="text-[var(--color-primary)] mr-1">{c.num}</span>}
                  {c.label}
                </span>
                {/* Dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-[var(--color-primary)] shadow-[0_0_8px_rgba(0,228,184,0.5)] scale-125"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                />
              </button>
            ))}
          </motion.nav>

          {/* Chapter counter */}
          <motion.div
            className="fixed bottom-6 left-6 z-[500] text-[0.6rem] font-mono text-[var(--color-text-muted)] max-lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-[var(--color-primary)]">{String(active).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            <span>{String(chapters.length - 1).padStart(2, "0")}</span>
          </motion.div>

          {/* Keyboard hint */}
          <motion.div
            className="fixed bottom-6 right-6 z-[500] text-[0.55rem] text-[var(--color-text-muted)] flex items-center gap-2 max-lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.03] text-[0.5rem]">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.03] text-[0.5rem]">↓</kbd>
            <span>navegar</span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
