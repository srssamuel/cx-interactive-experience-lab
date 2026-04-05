"use client";

import { DisplayHeading, Container, HeroSection } from "@/components/design-system";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GSAPStaggerReveal } from "@/components/motion/gsap-reveal";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { AmbientBackground } from "@/components/cinematic/ambient-background";
import { CinematicHeadline } from "@/components/cinematic/cinematic-headline";
import { fechamento } from "../content";

export function FechamentoChapter() {
  return (
    <HeroSection
      id="fechamento"
      className="section-bg-cool"
      align="left"
      overlay={false}
      backgroundElement={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)]/40 via-[var(--bg)] to-[var(--bg)]" />
          <AmbientBackground variant="aurora" intensity={0.5} />
          <GrainOverlay opacity={0.02} />
        </>
      }
    >
      <Container size="wide">
        <div className="max-w-[700px]">
          <ScrollReveal direction="left" delay={0.3}>
            <CinematicHeadline shadow="deep" tag="h2">{fechamento.headline}</CinematicHeadline>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <GSAPStaggerReveal className="mt-10 max-w-[52ch] space-y-4">
              {fechamento.insights.map((insight, i) => (
                <p
                  key={i}
                  className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]"
                >
                  {insight}
                </p>
              ))}
            </GSAPStaggerReveal>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <div className="mt-12 border-l-2 border-[var(--accent-primary)]/30 pl-6">
              <p className="font-display text-xl font-light leading-[1.4] text-[var(--text)]">
                {fechamento.provocation}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1.1}>
            <div className="mt-12 h-px w-32 bg-gradient-to-r from-[var(--accent-primary)] to-transparent" />
            <p className="mt-4 text-[0.6rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              CX Experience Lab
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </HeroSection>
  );
}
