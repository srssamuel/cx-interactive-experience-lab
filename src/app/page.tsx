"use client";

import { ScrollProvider } from "@/components/providers/scroll-provider";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Equation } from "@/components/Equation";
import { Myths } from "@/components/Myths";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <ScrollProvider>
      <NavBar />
      <Hero />
      <main>
        <Equation />
        <SectionDivider />
        <Myths />
      </main>
      <footer className="py-16 text-center border-t border-white/[0.04]">
        <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          A Equação Invisível — CX Interactive Experience Lab
        </p>
      </footer>
    </ScrollProvider>
  );
}
