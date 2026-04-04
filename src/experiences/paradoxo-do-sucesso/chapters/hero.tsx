"use client";

import {
  BodyText,
  Overline,
  EvidenceBlock,
  Container,
  HeroSection,
} from "@/components/design-system";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { GrainOverlay } from "@/components/cinematic/headline-slide";
import { hero } from "../content";

export function HeroChapter() {
  return (
    <HeroSection
      id="hero"
      align="left"
      overlay={false}
      backgroundElement={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/30" />
          <GrainOverlay opacity={0.02} />
        </>
      }
    >
      <Container size="default">
        <div className="max-w-[680px]">
          <ScrollReveal delay={0.2}>
            <Overline className="mb-6">{hero.overline}</Overline>
          </ScrollReveal>

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

          <ScrollReveal delay={1}>
            <BodyText className="mt-8 max-w-[40ch]">{hero.subtext}</BodyText>
          </ScrollReveal>

          <ScrollReveal delay={1.2}>
            <div className="mt-10 flex items-center gap-12">
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
      </Container>
    </HeroSection>
  );
}
