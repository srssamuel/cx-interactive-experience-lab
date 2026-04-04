"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";

type WorkshopBlockType =
  | "reflection"    // Individual reflection
  | "discussion"    // Group discussion
  | "application"   // Apply to your team
  | "executive"     // Executive question
  | "practice";     // Hands-on exercise

interface WorkshopBlockProps {
  type: WorkshopBlockType;
  question: string;
  context?: string;
  instructions?: string[];
  timerMinutes?: number;
  className?: string;
}

const typeConfig: Record<WorkshopBlockType, { label: string; icon: string; color: string }> = {
  reflection: { label: "Reflexão Individual", icon: "◉", color: "text-[var(--accent-primary)]" },
  discussion: { label: "Discussão em Grupo", icon: "◎", color: "text-[var(--success)]" },
  application: { label: "Aplicação ao Time", icon: "▸", color: "text-[var(--accent-secondary)]" },
  executive: { label: "Pergunta Executiva", icon: "◆", color: "text-[var(--warning)]" },
  practice: { label: "Exercício Prático", icon: "⬡", color: "text-[var(--accent-primary)]" },
};

export function WorkshopBlock({
  type,
  question,
  context,
  instructions,
  timerMinutes,
  className,
}: WorkshopBlockProps) {
  const { mode } = useExperienceMode();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const config = typeConfig[type];

  // Hide in presentation mode
  if (mode === "presentation") return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "border border-[var(--accent-primary)]/10",
        "bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)]",
        className
      )}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[var(--accent-primary)]/40 via-[var(--accent-primary)]/20 to-transparent" />

      <div className="p-6 md:p-8">
        {/* Type label */}
        <div className="flex items-center gap-2">
          <span className={cn("text-sm", config.color)}>{config.icon}</span>
          <span className={cn("text-[0.6rem] font-bold uppercase tracking-[0.16em]", config.color)}>
            {config.label}
          </span>
          {mode === "workshop" && (
            <span className="ml-auto rounded-full bg-[var(--accent-primary)]/10 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.1em] text-[var(--accent-primary)]">
              Ativo
            </span>
          )}
        </div>

        {/* Question */}
        <p className="mt-4 font-display text-[clamp(1.1rem,2.5vw,1.75rem)] leading-tight tracking-tight text-[var(--text)]">
          {question}
        </p>

        {/* Context */}
        {context && (
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--text-secondary)]">
            {context}
          </p>
        )}

        {/* Instructions */}
        {instructions && instructions.length > 0 && (
          <div className="mt-4 space-y-2">
            {instructions.map((instruction, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 font-mono text-[0.6rem] font-bold text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[var(--text-secondary)]">{instruction}</p>
              </div>
            ))}
          </div>
        )}

        {/* Timer */}
        {timerMinutes && (
          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <InlineTimer minutes={timerMinutes} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function InlineTimer({ minutes }: { minutes: number }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const reset = useCallback(() => {
    setTimeLeft(minutes * 60);
    setIsRunning(false);
  }, [minutes]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isLow = timeLeft < 60 && timeLeft > 0;

  return (
    <div className="flex items-center gap-3">
      <span className={cn(
        "font-mono text-lg tabular-nums",
        isLow ? "text-[var(--danger)]" : "text-[var(--text)]"
      )}>
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </span>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="rounded-md border border-[var(--border)] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--text)]"
      >
        {isRunning ? "Pausar" : "Iniciar"}
      </button>
      {timeLeft < minutes * 60 && (
        <button
          onClick={reset}
          className="text-[0.6rem] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        >
          Reset
        </button>
      )}
      <span className="ml-auto text-[0.55rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
        {minutes} min
      </span>
    </div>
  );
}
