"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { StaggerGroup } from "@/components/motion/scroll-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { forma } from "../content";

/**
 * A FORMA — 6 vectors as Tabs.
 * Insight is integrated as a closing accent quote, not a full-viewport HeadlineSlide.
 */
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
          <div data-float>
          <Tabs
            variant="underline"
            tabs={forma.dimensions.map((d, i) => ({
              id: `forma-${i}`,
              label: d.title,
              content: (
                <StaggerGroup staggerDelay={0.06} className="py-6">
                  <h3 className="font-display text-xl font-light text-[var(--accent-primary)]">
                    {d.question}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                    {d.answer}
                  </p>
                </StaggerGroup>
              ),
            }))}
          />
          </div>

          {/* Insight as inline accent — not a full-viewport HeadlineSlide */}
          <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: "power3.out" }}>
            <div className="mt-16 border-t border-[var(--border)] pt-10">
              <p className="mx-auto max-w-[48ch] text-center font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-light italic leading-[1.4] text-[var(--text)]">
                {forma.insight}
              </p>
            </div>
          </GSAPReveal>
        </Container>
      </Section>
    </>
  );
}
