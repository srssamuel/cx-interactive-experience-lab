"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScroll, sections } from "./providers/scroll-provider";
import { useEffect, useState } from "react";

export function NavBar() {
  const { progress, activeSection, goTo } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[400]">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: progress,
            background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
          }}
        />
      </div>

      {/* Nav bar */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            exit={{ y: -64 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[2px] left-0 right-0 z-[350] h-14 flex items-center justify-center bg-[rgba(5,8,16,0.85)] backdrop-blur-2xl border-b border-white/[0.04]"
          >
            <div className="flex gap-0.5 overflow-x-auto px-4 max-w-[1200px]" style={{ scrollbarWidth: "none" }}>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className={`relative px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.06em] whitespace-nowrap rounded-full transition-all duration-300 ${
                    activeSection === s.id
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {activeSection === s.id && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[rgba(0,228,184,0.08)] border border-[rgba(0,228,184,0.12)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Next section floating button */}
      <AnimatePresence>
        {visible && activeSection !== sections[sections.length - 1].id && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => {
              const idx = sections.findIndex((s) => s.id === activeSection);
              if (idx < sections.length - 1) goTo(sections[idx + 1].id);
            }}
            className="fixed bottom-8 right-8 z-[300] w-12 h-12 rounded-full bg-[rgba(5,8,16,0.8)] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300 group"
            title="Próxima seção (↓)"
          >
            <motion.svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
