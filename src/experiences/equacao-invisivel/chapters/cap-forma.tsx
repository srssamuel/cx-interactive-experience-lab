"use client";

import { Provocation, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { Tabs } from "@/components/interactive/tabs";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { forma } from "../content";

export function CapForma() {
  return (
    <>
      <ChapterTransition
        id="forma"
        number="04"
        title={forma.headline}
        subtitle={forma.subtitle}
      />

      <Section background="surface">
        <Container>
          <Tabs
            variant="underline"
            tabs={forma.dimensions.map((d, i) => ({
              id: `forma-${i}`,
              label: d.title,
              content: (
                <div className="py-6">
                  <h3 className="font-display text-xl font-light text-[var(--accent-primary)]">
                    {d.question}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                    {d.answer}
                  </p>
                </div>
              ),
            }))}
          />
        </Container>
      </Section>

      <HeadlineSlide align="center">
        <GSAPReveal>
          <Provocation>{forma.insight}</Provocation>
        </GSAPReveal>
      </HeadlineSlide>
    </>
  );
}
