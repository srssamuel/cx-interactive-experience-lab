"use client";

import { cn } from "@/lib/cn";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";
import { type ReactNode } from "react";

interface PresentationShellProps {
  children: ReactNode;
  className?: string;
}

/**
 * PresentationShell — wraps experience content and applies mode-specific CSS.
 * Presentation mode enables scroll-snap, hides workshop blocks, enlarges type.
 */
export function PresentationShell({
  children,
  className,
}: PresentationShellProps) {
  const { isPresentationMode, isWorkshopMode } = useExperienceMode();

  return (
    <div
      className={cn(
        "transition-all duration-500",
        isPresentationMode && "presentation-mode",
        isWorkshopMode && "workshop-active",
        className
      )}
    >
      {children}
    </div>
  );
}
