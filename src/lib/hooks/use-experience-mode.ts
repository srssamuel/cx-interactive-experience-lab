"use client";

import {
  createContext,
  useCallback,
  useContext,
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

  // Keyboard shortcuts are now handled by KeyboardHUD component
  // This provider is purely state management

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
