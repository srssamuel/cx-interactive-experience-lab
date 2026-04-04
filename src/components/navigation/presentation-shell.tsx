"use client";

import { cn } from "@/lib/cn";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";
import { type ReactNode } from "react";

interface PresentationShellProps {
  children: ReactNode;
  className?: string;
}

export function PresentationShell({
  children,
  className,
}: PresentationShellProps) {
  const { isPresentationMode } = useExperienceMode();

  return (
    <div
      className={cn(
        "transition-all duration-500",
        isPresentationMode && "presentation-mode",
        className
      )}
    >
      {children}

      {/* Presentation mode bottom controls */}
      {isPresentationMode && (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 h-16 bg-gradient-to-t from-[var(--bg)]/60 to-transparent">
          <div className="flex h-full items-end justify-center pb-3">
            <div className="pointer-events-auto flex items-center gap-4">
              <span className="text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/40">
                ← → capítulos
              </span>
              <span className="h-3 w-px bg-[var(--border)]" />
              <span className="text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/40">
                ESC sair
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
