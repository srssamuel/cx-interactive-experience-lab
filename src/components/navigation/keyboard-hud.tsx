"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";
import type { Chapter } from "@/lib/types";

interface KeyboardHUDProps {
  chapters: Chapter[];
  title?: string;
  className?: string;
}

/**
 * KeyboardHUD — The primary navigation for projector/stage use.
 *
 * Keyboard-first design, readable at 3 meters.
 * Shows: current chapter, progress, mode, shortcuts overlay.
 *
 * Keys:
 *   ← →  or  Space      Navigate chapters
 *   1-9                  Jump to chapter
 *   G                    Open chapter grid
 *   P                    Presentation mode
 *   W                    Workshop mode
 *   R                    Reading mode
 *   F                    Fullscreen
 *   ?                    Show shortcuts
 *   Escape               Close overlay / exit mode
 */
export function KeyboardHUD({ chapters, title, className }: KeyboardHUDProps) {
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.id ?? "");
  const [showGrid, setShowGrid] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [progress, setProgress] = useState(0);
  const { mode, setMode, isPresentationMode } = useExperienceMode();
  const timerRef = useRef<number>(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const activeIndex = chapters.findIndex((c) => c.id === activeChapter);
  const active = chapters[activeIndex];

  /* ─── Intersection Observer for chapter tracking ─── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
            const idx = chapters.findIndex((c) => c.id === entry.target.id);
            setProgress(((idx + 1) / chapters.length) * 100);
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

  /* ─── Scroll to chapter ─── */
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowGrid(false);
  }, []);

  /* ─── Workshop timer ─── */
  useEffect(() => {
    if (timerActive) {
      timerRef.current = window.setInterval(() => {
        setTimerSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  /* ─── Keyboard handler ─── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const idx = chapters.findIndex((c) => c.id === activeChapter);

      switch (e.key) {
        case "ArrowRight":
        case " ": {
          if (showGrid || showHelp) return;
          e.preventDefault();
          const next = Math.min(idx + 1, chapters.length - 1);
          scrollTo(chapters[next].id);
          break;
        }
        case "ArrowLeft": {
          if (showGrid || showHelp) return;
          e.preventDefault();
          const prev = Math.max(idx - 1, 0);
          scrollTo(chapters[prev].id);
          break;
        }
        case "g":
        case "G": {
          e.preventDefault();
          setShowGrid((v) => !v);
          setShowHelp(false);
          break;
        }
        case "?": {
          e.preventDefault();
          setShowHelp((v) => !v);
          setShowGrid(false);
          break;
        }
        case "p":
        case "P": {
          if (e.ctrlKey || e.metaKey) return;
          e.preventDefault();
          setMode("presentation");
          break;
        }
        case "w":
        case "W": {
          if (e.ctrlKey || e.metaKey) return;
          e.preventDefault();
          setMode("workshop");
          break;
        }
        case "r":
        case "R": {
          if (e.ctrlKey || e.metaKey) return;
          e.preventDefault();
          setMode("reading");
          break;
        }
        case "f":
        case "F": {
          if (e.ctrlKey || e.metaKey) return;
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
          break;
        }
        case "t":
        case "T": {
          e.preventDefault();
          setTimerActive((v) => !v);
          break;
        }
        case "Escape": {
          if (showGrid) { setShowGrid(false); break; }
          if (showHelp) { setShowHelp(false); break; }
          if (mode !== "reading") { setMode("reading"); break; }
          break;
        }
        default: {
          // Number keys 1-9 for direct chapter jump
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= 9 && num <= chapters.length) {
            e.preventDefault();
            scrollTo(chapters[num - 1].id);
          }
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeChapter, chapters, mode, scrollTo, setMode, showGrid, showHelp]);

  const isOverlayOpen = showGrid || showHelp;

  return (
    <>
      {/* ─── Top progress bar ─── */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-[var(--surface)]">
        <motion.div
          className="h-full bg-[var(--text-muted)]/40"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* ─── Top-left: Chapter indicator ─── */}
      <AnimatePresence mode="wait">
        {activeIndex > 0 && (
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed left-6 top-5 z-50 flex items-baseline gap-3"
          >
            <span className="font-mono text-[0.6rem] font-medium text-[var(--text-muted)]">
              {active?.number}
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]/60">
              {active?.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Bottom-left: Mode + Timer ─── */}
      <div className="fixed bottom-5 left-6 z-50 flex items-center gap-4">
        <span className={cn(
          "text-[0.5rem] font-semibold uppercase tracking-[0.2em]",
          mode === "presentation" ? "text-[var(--accent-warm)]" :
          mode === "workshop" ? "text-emerald-500" :
          "text-[var(--text-muted)]/30"
        )}>
          {mode === "presentation" ? "Palco" : mode === "workshop" ? "Workshop" : "Leitura"}
        </span>
        {timerActive && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[0.65rem] font-medium tabular-nums text-[var(--accent-warm)]"
          >
            {formatTime(timerSeconds)}
          </motion.span>
        )}
      </div>

      {/* ─── Bottom-right: Keyboard hints ─── */}
      <div className="fixed bottom-5 right-6 z-50">
        <div className="flex items-center gap-3 text-[0.45rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/25">
          <span>G capitulos</span>
          <span>? atalhos</span>
        </div>
      </div>

      {/* ─── Right side: Chapter dots (presentation mode only) ─── */}
      {isPresentationMode && (
        <nav className="fixed right-5 top-1/2 z-40 -translate-y-1/2 flex flex-col gap-2">
          {chapters.map((chapter, i) => {
            const isActive = chapter.id === activeChapter;
            return (
              <button
                key={chapter.id}
                onClick={() => scrollTo(chapter.id)}
                className="group flex items-center justify-end gap-2.5"
                aria-label={chapter.label}
              >
                <span className={cn(
                  "text-[0.5rem] uppercase tracking-[0.1em] transition-all duration-200",
                  "opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                  isActive ? "text-[var(--text-secondary)]" : "text-[var(--text-muted)]/40"
                )}>
                  {chapter.label}
                </span>
                <div className={cn(
                  "rounded-full transition-all duration-300",
                  isActive
                    ? "h-2.5 w-2.5 bg-[var(--text)]"
                    : "h-1 w-1 bg-[var(--text-muted)]/20 group-hover:bg-[var(--text-muted)]/40"
                )} />
              </button>
            );
          })}
        </nav>
      )}

      {/* ═══════════════════════════════════════════
          CHAPTER GRID OVERLAY (press G)
          ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--bg)]/95 backdrop-blur-xl"
          >
            <div className="mx-auto w-full max-w-5xl px-6">
              {/* Title */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {title ?? "Capitulos"}
                </span>
                <span className="text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/30">
                  ESC fechar
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {chapters.map((chapter, i) => {
                  const isActive = chapter.id === activeChapter;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => scrollTo(chapter.id)}
                      className={cn(
                        "group relative rounded-lg border p-5 text-left transition-all duration-200",
                        isActive
                          ? "border-[var(--text-muted)]/20 bg-[var(--surface)]"
                          : "border-[var(--border)] hover:border-[var(--text-muted)]/15 hover:bg-[var(--surface)]/50"
                      )}
                    >
                      <span className="font-mono text-[0.6rem] text-[var(--text-muted)]/50">
                        {chapter.number}
                      </span>
                      <p className={cn(
                        "mt-1.5 text-sm font-medium",
                        isActive ? "text-[var(--text)]" : "text-[var(--text-secondary)]"
                      )}>
                        {chapter.label}
                      </p>
                      {/* Keyboard hint */}
                      {i < 9 && (
                        <span className="absolute right-3 top-3 font-mono text-[0.5rem] text-[var(--text-muted)]/20">
                          {i + 1}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════
          SHORTCUTS HELP OVERLAY (press ?)
          ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--bg)]/95 backdrop-blur-xl"
          >
            <div className="mx-auto w-full max-w-md px-6">
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Atalhos de teclado
              </span>

              <div className="mt-8 space-y-0 divide-y divide-[var(--border)]">
                {[
                  ["← →", "Capitulo anterior / proximo"],
                  ["Space", "Proximo capitulo"],
                  ["1 - 9", "Ir ao capitulo N"],
                  ["G", "Grid de capitulos"],
                  ["P", "Modo apresentacao"],
                  ["W", "Modo workshop"],
                  ["R", "Modo leitura"],
                  ["F", "Tela cheia"],
                  ["T", "Timer (workshop)"],
                  ["Esc", "Fechar / voltar"],
                  ["?", "Atalhos"],
                ].map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between py-3">
                    <span className="text-sm text-[var(--text-secondary)]">{label}</span>
                    <kbd className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-xs text-[var(--text-muted)]">
                      {key}
                    </kbd>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/30">
                ESC fechar
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
