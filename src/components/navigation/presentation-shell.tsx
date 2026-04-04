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

      {/* Presentation mode overlay gradient at bottom for navigation hint */}
      {isPresentationMode && (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 h-20 bg-gradient-to-t from-[var(--bg)]/50 to-transparent">
          <div className="flex h-full items-end justify-center pb-4">
            <span className="text-[0.6rem] uppercase tracking-[0.15em] text-[var(--text-muted)]/60">
              ← → navegar entre capítulos
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
