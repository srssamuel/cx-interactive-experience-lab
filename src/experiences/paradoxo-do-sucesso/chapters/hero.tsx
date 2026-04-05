"use client";

import dynamic from "next/dynamic";
import {
  BodyText,
  Overline,
  EvidenceBlock,
  Container,
  HeroSection,
} from "@/components/design-system";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CursorParallaxContainer } from "@/components/motion/cursor-parallax-container";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { hero } from "../content";

const ParticleField = dynamic(
  () => import("@/components/cinematic/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

export function HeroChapter() {
  return (
    <HeroSection
      id="hero"
      align="left"
      overlay={false}
      backgroundElement={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/30" />
          <div className="absolute inset-0 opacity-25">
            <ParticleField color="var(--accent-primary)" count={250} interactive />
          </div>
          <GrainOverlay opacity={0.02} />
        </>
      }
    >
      <Container size="default">
        <CursorParallaxContainer strength={0.6}>
          <div className="max-w-[680px]">
            <ScrollReveal delay={0.2}>
              <div data-depth="3">
                <Overline className="mb-6">{hero.overline}</Overline>
              </div>
            </ScrollReveal>

            <div data-depth="1" style={{ textShadow: "var(--text-shadow-cinematic)" }}>
              <TextReveal
                text={hero.headline}
                tag="h1"
                trigger="mount"
                delay={0.4}
                stagger={0.03}
                className="font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--text)]"
              />
              <ScrollReveal delay={0.8}>
                <span className="mt-2 block font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--accent-primary)]">
                  {hero.headlineAccent}
                </span>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={1}>
              <div data-depth="2">
                <BodyText className="mt-8 max-w-[40ch]">{hero.subtext}</BodyText>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.2}>
              <div data-depth="3" className="mt-10 flex items-center gap-12">
                {hero.stats.map((stat, i) => (
                  <EvidenceBlock
                    key={i}
                    stat={`${stat.value}${stat.suffix}`}
                    context={stat.label}
                    className="py-0"
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </CursorParallaxContainer>
      </Container>
    </HeroSection>
  );
}
