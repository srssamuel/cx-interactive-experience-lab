"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Início" },
  { id: "equation", label: "A Equação" },
  { id: "myths", label: "Mitos" },
];

export function TopNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const heroObs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.15 }
    );
    heroObs.observe(heroEl);

    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.15, rootMargin: "-10% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) secObs.observe(el);
    });

    return () => {
      heroObs.disconnect();
      secObs.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -60 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[300] h-14 flex items-center justify-center bg-[rgba(6,9,15,0.8)] backdrop-blur-2xl border-b border-white/5"
        >
          <div className="flex gap-1 overflow-x-auto px-4 max-w-[1200px] scrollbar-none">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() =>
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.04em] whitespace-nowrap rounded-full transition-all duration-200 ${
                  active === s.id
                    ? "text-[var(--color-primary)] bg-[var(--color-primary-muted)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
