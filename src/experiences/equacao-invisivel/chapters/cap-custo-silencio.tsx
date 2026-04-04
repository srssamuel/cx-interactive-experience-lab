"use client";

import { Section, Container, FullBleedText } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { BlurReveal } from "@/components/motion/text-reveal";
import {
  HeadlineSlide,
  DataSpectacle,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { custoSilencio } from "../content";

export function CapCustoSilencio() {
  return (
    <>
      <ChapterTransition id="custosilencio" number="05" title={custoSilencio.headline} />

      <DataSpectacle accent>
        <div className="flex flex-col items-center text-center">
          <GSAPReveal>
            <span className="font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none text-[var(--accent-primary)]">
              <GSAPCounter value={custoSilencio.bigNumber.value} />
              {custoSilencio.bigNumber.suffix}
            </span>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              {custoSilencio.bigNumber.label}
            </p>
          </GSAPReveal>
        </div>
      </DataSpectacle>

      <Section background="surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {custoSilencio.stats.map((stat) => (
              <GSAPReveal key={stat.label}>
                <div className="text-center">
                  <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--accent-primary)]">
                    <GSAPCounter value={stat.value} />
                    {stat.suffix}
                  </span>
                  <p className="mt-1 text-sm font-medium text-[var(--text)]">{stat.label}</p>
                  <p className="mt-2 text-xs text-[var(--text-muted)]">{stat.context}</p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      <HeadlineSlide align="center" background="base">
        <BlurReveal>
          <FullBleedText>{custoSilencio.pullQuote}</FullBleedText>
        </BlurReveal>
      </HeadlineSlide>

      <WorkshopBlock {...custoSilencio.workshop} />
    </>
  );
}
