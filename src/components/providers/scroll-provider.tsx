"use client";

import { useEffect, useRef, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

const sections = [
  { id: "hero", label: "Início" },
  { id: "equation", label: "A Equação" },
  { id: "myths", label: "Mitos" },
];

const ScrollCtx = createContext<{
  progress: number;
  activeSection: string;
  goTo: (id: string) => void;
  next: () => void;
  prev: () => void;
}>({
  progress: 0,
  activeSection: "hero",
  goTo: () => {},
  next: () => {},
  prev: () => {},
});

export const useScroll = () => useContext(ScrollCtx);
export { sections };

export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track scroll progress
    lenis.on("scroll", ({ progress: p }: { progress: number }) => {
      setProgress(p);
    });

    // Track active section with IntersectionObserver
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(s.id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Keyboard navigation
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const idx = sections.findIndex((s) => s.id === activeSection);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(idx + 1, sections.length - 1);
        const el = document.getElementById(sections[next].id);
        if (el) lenis.scrollTo(el, { offset: -20 });
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(idx - 1, 0);
        const el = document.getElementById(sections[prev].id);
        if (el) lenis.scrollTo(el, { offset: -20 });
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      lenis.destroy();
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeSection]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) lenisRef.current.scrollTo(el, { offset: -20 });
  };

  const next = () => {
    const idx = sections.findIndex((s) => s.id === activeSection);
    if (idx < sections.length - 1) goTo(sections[idx + 1].id);
  };

  const prev = () => {
    const idx = sections.findIndex((s) => s.id === activeSection);
    if (idx > 0) goTo(sections[idx - 1].id);
  };

  return (
    <ScrollCtx.Provider value={{ progress, activeSection, goTo, next, prev }}>
      {children}
    </ScrollCtx.Provider>
  );
}
