"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

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
                  aria-current={activeChapter === chapter.id ? "true" : undefined}
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
