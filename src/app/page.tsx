"use client";

import dynamic from "next/dynamic";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Equation } from "@/components/Equation";
import { Myths } from "@/components/Myths";
import { Resultado } from "@/components/Resultado";
import { ExperienciaApropriada } from "@/components/ExperienciaApropriada";
import { UberCase } from "@/components/UberCase";
import { Sistema } from "@/components/Sistema";
import { OQueMudou } from "@/components/OQueMudou";
import { Futuro } from "@/components/Futuro";
import { IASection } from "@/components/IASection";
import { Workshop } from "@/components/Workshop";
import { Fechamento } from "@/components/Fechamento";
import { PullQuote } from "@/components/PullQuote";
import { TopNav } from "@/components/TopNav";
import { SectionDivider } from "@/components/SectionDivider";
import { AmbientBackground } from "@/components/AmbientBackground";

const Hero3D = dynamic(
  () => import("@/components/Hero3D").then((m) => ({ default: m.Hero3D })),
  {
    ssr: false,
    loading: () => (
      <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
      </section>
    ),
  }
);

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
        <SectionDivider />
        <Resultado />
        <SectionDivider />
        <ExperienciaApropriada />
        <PullQuote>
          O cliente não cancela porque o produto parou de funcionar. Cancela
          porque a experiência ao redor parou de fazer sentido.
        </PullQuote>
        <SectionDivider />
        <UberCase />
        <SectionDivider />
        <Sistema />
        <SectionDivider />
        <OQueMudou />
        <PullQuote>
          O cliente não sai porque está insatisfeito. Sai porque alguém fez a
          mesma coisa — pedindo menos dele.
        </PullQuote>
        <SectionDivider />
        <Futuro />
        <SectionDivider />
        <IASection />
        <SectionDivider />
        <Workshop />
        <Fechamento />
      </main>
      <footer className="py-14 text-center border-t border-white/[0.04]">
        <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          A Equação Invisível — CX Interactive Experience Lab
        </p>
      </footer>
    </SmoothScroll>
  );
}
