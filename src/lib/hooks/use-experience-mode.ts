"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import React from "react";

export type ExperienceMode = "reading" | "presentation" | "workshop";

interface ExperienceModeContextValue {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
  isPresentationMode: boolean;
  isWorkshopMode: boolean;
}

const ExperienceModeContext = createContext<ExperienceModeContextValue | null>(
  null
);

interface ExperienceModeProviderProps {
  children: ReactNode;
  defaultMode?: ExperienceMode;
}

export function ExperienceModeProvider({
  children,
  defaultMode = "reading",
}: ExperienceModeProviderProps) {
  const [mode, setMode] = useState<ExperienceMode>(defaultMode);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "P") {
        event.preventDefault();
        setMode((prev) =>
          prev === "presentation" ? "reading" : "presentation"
        );
      }

      if (event.ctrlKey && event.shiftKey && event.key === "W") {
        event.preventDefault();
        setMode((prev) => (prev === "workshop" ? "reading" : "workshop"));
      }

      if (event.key === "Escape" && mode !== "reading") {
        event.preventDefault();
        setMode("reading");
      }
    },
    [mode]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const value: ExperienceModeContextValue = {
    mode,
    setMode,
    isPresentationMode: mode === "presentation",
    isWorkshopMode: mode === "workshop",
  };

  return React.createElement(
    ExperienceModeContext.Provider,
    { value },
    children
  );
}

export function useExperienceMode(): ExperienceModeContextValue {
  const context = useContext(ExperienceModeContext);
  if (!context) {
    throw new Error(
      "useExperienceMode must be used within an ExperienceModeProvider"
    );
  }
  return context;
}
