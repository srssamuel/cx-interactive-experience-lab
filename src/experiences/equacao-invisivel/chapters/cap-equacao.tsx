"use client";

import { Provocation, Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import {
  GSAPReveal,
  GSAPStaggerReveal,
} from "@/components/motion/gsap-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { equation } from "../content";

/**
 * A EQUAÇÃO — The core formula rendered as typographic drama.
 * Not cards. The formula elements are massive, cinematic.
 * Each part enters sequentially, building to the conclusion.
 */
export function CapEquacao() {
  return (
    <>
      <ChapterTransition id="equacao" number="01" title={equation.headline} />

      {/* The Formula — immersive, typographic */}
      <Section variant="immersive" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_55%)]" />
        <Container size="default">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-10">
            {equation.parts.map((part, i) => (
              <GSAPReveal
                key={part.title}
                from={{ opacity: 0, y: 30, scale: 0.9 }}
                to={{ opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.3 + i * 0.3, ease: "power3.out" }}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {i > 0 && (
                    <span className="font-mono text-4xl font-bold text-[var(--accent-primary)]/40 md:text-5xl">
                      +
                    </span>
                  )}
                  <div>
                    <span className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-light tracking-[-0.02em] text-[var(--text)]">
                      {part.title}
                    </span>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{part.short}</p>
                  </div>
                </div>
              </GSAPReveal>
            ))}

            <GSAPReveal from={{ opacity: 0, scale: 0.8 }} to={{ opacity: 1, scale: 1, duration: 0.6, delay: 1.2, ease: "back.out(1.4)" }}>
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-4xl font-bold text-[var(--accent-primary)]/40 md:text-5xl">
                  =
                </span>
                <div className="rounded-lg border border-[var(--accent-primary)]/25 bg-[var(--accent-primary)]/[0.06] px-8 py-5 shadow-[0_0_40px_rgba(var(--accent-primary-rgb),0.06)]">
                  <TextReveal
                    text={equation.conclusion}
                    tag="span"
                    delay={1.5}
                    stagger={0.04}
                    className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-light tracking-[-0.02em] text-[var(--accent-primary)]"
                  />
                </div>
              </div>
            </GSAPReveal>
          </div>
        </Container>
      </Section>

      <HeadlineSlide background="surface">
        <GSAPReveal>
          <Provocation>{equation.insight}</Provocation>
          <GSAPStaggerReveal className="mt-8 max-w-[52ch] space-y-4">
            {equation.deepPoints.map((point, i) => (
              <p key={i} className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                {point}
              </p>
            ))}
          </GSAPStaggerReveal>
        </GSAPReveal>
      </HeadlineSlide>

      <WorkshopBlock {...equation.workshop} />
    </>
  );
}
