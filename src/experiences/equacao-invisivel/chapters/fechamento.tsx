"use client";

import {
  DisplayHeading,
  AccentText,
  Container,
  HeroSection,
} from "@/components/design-system";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { fechamento } from "../content";

export function FechamentoChapter() {
  return (
    <HeroSection
      id="fechamento"
      align="left"
      overlay={false}
      backgroundElement={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)]/60 via-[var(--bg)] to-[var(--bg)]" />
          <GrainOverlay opacity={0.02} />
        </>
      }
    >
      <Container size="wide">
        <div className="max-w-[700px]">
          <ScrollReveal direction="left" delay={0.3}>
            <DisplayHeading>
              {fechamento.headline}{" "}
              <AccentText>{fechamento.headlineAccent}</AccentText>
            </DisplayHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <p className="mt-8 max-w-[44ch] font-display text-xl font-light leading-relaxed text-[var(--text-secondary)]">
              {fechamento.provocation}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
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
