"use client";

import {
  BodyText,
  Provocation,
  Section,
  Container,
  Card,
} from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { paradoxo } from "../content";

export function CapParadoxo() {
  return (
    <>
      <ChapterTransition id="paradoxo" number="01" title={paradoxo.headline} />

      <Section variant="default">
        <Container>
          <GSAPReveal>
            <BodyText className="max-w-[52ch]">{paradoxo.subtext}</BodyText>
          </GSAPReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {paradoxo.parts.map((part) => (
              <GSAPReveal key={part.title}>
                <Card variant="insight">
                  <h3 className="font-display text-2xl font-light text-[var(--text)]">
                    {part.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {part.description}
                  </p>
                </Card>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      <HeadlineSlide background="surface">
        <GSAPReveal>
          <Provocation>{paradoxo.insight}</Provocation>
        </GSAPReveal>
      </HeadlineSlide>
    </>
  );
}
