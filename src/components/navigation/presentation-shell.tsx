"use client";

import { cn } from "@/lib/cn";
import { useExperienceMode } from "@/lib/hooks/use-experience-mode";
import { useAntigravity } from "@/lib/hooks/use-antigravity";
import { type ReactNode, useRef, useEffect } from "react";

interface PresentationShellProps {
  children: ReactNode;
  className?: string;
}

/**
 * PresentationShell — wraps experience content and applies mode-specific CSS.
 * Presentation mode enables scroll-snap, hides workshop blocks, enlarges type.
 * Also hosts the antigravity easter egg (triggered via Z key from KeyboardHUD).
 */
export function PresentationShell({
  children,
  className,
}: PresentationShellProps) {
  const { isPresentationMode, isWorkshopMode } = useExperienceMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggle, isActive } = useAntigravity(containerRef, {
    selector: "[data-float]",
    driftSpeed: 0.4,
    repulsionRadius: 180,
    repulsionForce: 3,
  });

  // Listen for the custom antigravity toggle event from KeyboardHUD
  useEffect(() => {
    const handler = () => toggle();
    window.addEventListener("antigravity:toggle", handler);
    return () => window.removeEventListener("antigravity:toggle", handler);
  }, [toggle]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "transition-all duration-500",
        isPresentationMode && "presentation-mode",
        isWorkshopMode && "workshop-active",
        isActive && "antigravity-active",
        className
      )}
    >
      {children}
    </div>
  );
}
