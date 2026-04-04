"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useExperienceMode, type ExperienceMode } from "@/lib/hooks/use-experience-mode";

const modeLabels: Record<ExperienceMode, string> = {
  reading: "Leitura",
  presentation: "Apresentação",
  workshop: "Workshop",
};

const modeShortcuts: Record<ExperienceMode, string> = {
  reading: "",
  presentation: "Ctrl+Shift+P",
  workshop: "Ctrl+Shift+W",
};

export function ModeIndicator() {
  const { mode, setMode } = useExperienceMode();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {mode !== "reading" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-[var(--accent-primary)]/20 bg-[var(--surface)]/90 px-4 py-2 backdrop-blur-lg"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)]">
                Modo {modeLabels[mode]}
              </span>
              <button
                onClick={() => setMode("reading")}
                className="ml-2 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              >
                ESC para sair
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-1">
        {(["reading", "presentation", "workshop"] as ExperienceMode[]).map(
          (m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              title={modeShortcuts[m] || modeLabels[m]}
              className={cn(
                "rounded-lg px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] transition-all duration-200",
                mode === m
                  ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                  : "bg-[var(--surface)]/80 text-[var(--text-muted)] backdrop-blur-sm hover:bg-[var(--surface)] hover:text-[var(--text-secondary)]"
              )}
            >
              {modeLabels[m]}
            </button>
          )
        )}
      </div>
    </div>
  );
}
