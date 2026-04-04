"use client";

import { cn } from "@/lib/cn";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

interface DiscussionPromptProps {
  question: string;
  context?: string;
  timerMinutes?: number;
  className?: string;
}

export function DiscussionPrompt({
  question,
  context,
  timerMinutes,
  className,
}: DiscussionPromptProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.04] p-8 md:p-12",
        className
      )}
    >
      <div className="absolute right-6 top-6 text-4xl opacity-10">💬</div>

      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        Ponto de discussão
      </span>

      <p className="mt-4 font-display text-[clamp(1.25rem,3vw,2.25rem)] leading-tight tracking-tight text-[var(--text)]">
        {question}
      </p>

      {context && (
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--text-secondary)]">
          {context}
        </p>
      )}

      {timerMinutes && (
        <div className="mt-6">
          <WorkshopTimer minutes={timerMinutes} />
        </div>
      )}
    </motion.div>
  );
}

interface WorkshopTimerProps {
  minutes: number;
}

function WorkshopTimer({ minutes }: WorkshopTimerProps) {
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

  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-2xl tabular-nums text-[var(--text)]">
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </span>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--text)]"
      >
        {isRunning ? "Pausar" : "Iniciar"}
      </button>
      {timeLeft < minutes * 60 && (
        <button
          onClick={reset}
          className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        >
          Resetar
        </button>
      )}
    </div>
  );
}

interface PausePointProps {
  message?: string;
  className?: string;
}

export function PausePoint({
  message = "Momento de pausa para reflexão",
  className,
}: PausePointProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 py-12 md:py-16",
        className
      )}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--border)]" />
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        ⏸ {message}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--border)]" />
    </div>
  );
}
