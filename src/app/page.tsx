"use client";

import { Hero } from "@/components/Hero";
import { Equation } from "@/components/Equation";
import { Myths } from "@/components/Myths";
import { TopNav } from "@/components/TopNav";
import { SectionDivider } from "@/components/SectionDivider";
import { AmbientBackground } from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <TopNav />
      <Hero />
      <main>
        <Equation />
        <SectionDivider />
        <Myths />
      </main>
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
          A Equação Invisível — CX Interactive Experience Lab
        </p>
      </footer>
    </>
  );
}
