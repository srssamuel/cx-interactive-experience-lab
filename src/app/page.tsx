"use client";

import dynamic from "next/dynamic";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Equation } from "@/components/Equation";
import { Myths } from "@/components/Myths";
import { TopNav } from "@/components/TopNav";
import { SectionDivider } from "@/components/SectionDivider";
import { AmbientBackground } from "@/components/AmbientBackground";

// Dynamic import for Three.js (no SSR)
const Hero3D = dynamic(() => import("@/components/Hero3D").then((m) => ({ default: m.Hero3D })), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
    </section>
  ),
});

export default function Home() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <TopNav />
      <Hero3D />
      <main>
        <Equation />
        <SectionDivider />
        <Myths />
      </main>
      <footer className="py-14 text-center border-t border-white/[0.04]">
        <p className="text-[0.58rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          A Equação Invisível — CX Interactive Experience Lab
        </p>
      </footer>
    </SmoothScroll>
  );
}
