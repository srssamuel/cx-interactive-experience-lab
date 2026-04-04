"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";
import { useState, useEffect, type ReactNode } from "react";

interface WorkshopSidebarProps {
  discussions: { id: string; question: string; sectionId: string }[];
  children: ReactNode;
  className?: string;
}

export function WorkshopLayout({
  discussions,
  children,
  className,
}: WorkshopSidebarProps) {
  const { isWorkshopMode } = useExperienceMode();
  const [activeDiscussion, setActiveDiscussion] = useState<string | null>(null);

  return (
    <div className={cn("relative", className)}>
      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-500 ease-[var(--ease-out)]",
          isWorkshopMode ? "mr-[320px] lg:mr-[380px]" : "mr-0"
        )}
      >
        {children}
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isWorkshopMode && (
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-40 flex h-screen w-[320px] flex-col border-l border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl lg:w-[380px]"
          >
            {/* Header */}
            <div className="border-b border-[var(--border)] px-6 py-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-primary)]" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)]">
                  Painel de Facilitação
                </h2>
              </div>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Ferramentas para condução ao vivo
              </p>
            </div>

            {/* Timer global */}
            <div className="border-b border-[var(--border)] px-6 py-4">
              <GlobalTimer />
            </div>

            {/* Discussion index */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Pontos de Discussão
              </h3>
              <div className="space-y-2">
                {discussions.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setActiveDiscussion(d.id);
                      document
                        .getElementById(d.sectionId)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "w-full rounded-lg border p-3 text-left transition-all duration-200",
                      activeDiscussion === d.id
                        ? "border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06]"
                        : "border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)]"
                    )}
                  >
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[var(--accent-primary)]/60">
                      Discussão {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {d.question}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="border-t border-[var(--border)] px-6 py-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() =>
                    document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-lg bg-[var(--surface-elevated)] px-4 py-2.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  ← Voltar ao início
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("fechamento")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-lg bg-[var(--surface-elevated)] px-4 py-2.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  Ir ao fechamento →
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

function GlobalTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  // Use useEffect properly for the timer
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
          Tempo de sessão
        </span>
        <span className="mt-0.5 block font-mono text-xl tabular-nums text-[var(--text)]">
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </span>
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="rounded-md border border-[var(--border)] px-3 py-1.5 text-[0.65rem] font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--text)]"
        >
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        {seconds > 0 && (
          <button
            onClick={() => {
              setSeconds(0);
              setIsRunning(false);
            }}
            className="rounded-md px-2 py-1.5 text-[0.65rem] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
