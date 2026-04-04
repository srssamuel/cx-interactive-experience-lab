"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";

export interface Chapter {
  id: string;
  label: string;
  number?: string;
}

interface ChapterNavProps {
  chapters: Chapter[];
  className?: string;
}

export function ChapterNav({ chapters, className }: ChapterNavProps) {
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.id ?? "");
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isPresentationMode } = useExperienceMode();

  const activeIndex = chapters.findIndex((c) => c.id === activeChapter);
  const activeLabel = chapters[activeIndex]?.label ?? "";
  const activeNumber = chapters[activeIndex]?.number ?? "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
            const idx = chapters.findIndex((c) => c.id === entry.target.id);
            setProgress(((idx + 1) / chapters.length) * 100);
            setIsVisible(idx > 0);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );

    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [chapters]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const idx = chapters.findIndex((c) => c.id === activeChapter);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(idx + 1, chapters.length - 1);
        scrollTo(chapters[next].id);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(idx - 1, 0);
        scrollTo(chapters[prev].id);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeChapter, chapters, scrollTo]);

  /* ─── Presentation mode: vertical dots on right side ─── */
  if (isPresentationMode) {
    return (
      <>
        {/* Top progress bar */}
        <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-[var(--surface)]">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Right-side chapter dots */}
        <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col items-end gap-2.5">
          {chapters.map((chapter, i) => {
            const isActive = chapter.id === activeChapter;
            return (
              <button
                key={chapter.id}
                onClick={() => scrollTo(chapter.id)}
                className="group flex items-center gap-2"
                aria-label={chapter.label}
                aria-current={isActive ? "true" : undefined}
              >
                {/* Label on hover */}
                <span
                  className={cn(
                    "text-[0.55rem] uppercase tracking-[0.1em] transition-all duration-200",
                    "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    isActive
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-muted)]"
                  )}
                >
                  {chapter.number && (
                    <span className="font-mono mr-1 opacity-60">
                      {chapter.number}
                    </span>
                  )}
                  {chapter.label}
                </span>
                {/* Dot */}
                <div
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive
                      ? "h-3 w-3 bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(var(--accent-primary-rgb),0.4)]"
                      : "h-1.5 w-1.5 bg-[var(--text-muted)]/30 group-hover:bg-[var(--text-muted)]/60"
                  )}
                />
              </button>
            );
          })}
        </nav>

        {/* Current chapter indicator — top left */}
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed left-6 top-6 z-50"
            >
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]/60">
                {activeNumber && `${activeNumber} — `}
                {activeLabel}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  /* ─── Reading/Workshop mode: top bar ─── */
  return (
    <>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-[var(--surface)]">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed left-0 right-0 top-0 z-40",
              "border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl",
              className
            )}
          >
            <div className="mx-auto flex max-w-6xl items-center justify-center gap-1 overflow-x-auto px-4 py-3 scrollbar-none">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollTo(chapter.id)}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200",
                    activeChapter === chapter.id
                      ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-secondary)]"
                  )}
                  aria-current={
                    activeChapter === chapter.id ? "true" : undefined
                  }
                >
                  {chapter.number && (
                    <span className="mr-1.5 font-mono opacity-50">
                      {chapter.number}
                    </span>
                  )}
                  {chapter.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
