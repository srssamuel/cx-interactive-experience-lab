"use client";

import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  accent?: string;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
  variant?: "default" | "pills" | "underline";
}

export function Tabs({ tabs, className, variant = "default" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      {/* Tab buttons */}
      <div
        className={cn(
          "flex gap-1",
          variant === "underline" && "border-b border-[var(--border)] gap-0"
        )}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-5 py-3 text-sm font-medium transition-colors duration-200",
              variant === "default" &&
                (activeTab === tab.id
                  ? "rounded-lg bg-[var(--surface-elevated)] text-[var(--text)]"
                  : "rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-secondary)]"),
              variant === "pills" &&
                (activeTab === tab.id
                  ? "rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                  : "rounded-full text-[var(--text-muted)] hover:text-[var(--text-secondary)]"),
              variant === "underline" &&
                (activeTab === tab.id
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]")
            )}
          >
            {tab.label}
            {variant === "underline" && activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-primary)]"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
