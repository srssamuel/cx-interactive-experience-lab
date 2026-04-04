"use client";

import { BodyText, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { paradoxo } from "../content";

/**
 * O PARADOXO — Active ≠ Healthy shown as stark CONTRAST.
 * Insight integrated as closing accent, not HeadlineSlide.
 */
export function CapParadoxo() {
  return (
    <>
      <ChapterTransition id="paradoxo" number="01" title={paradoxo.headline} />

      <Section variant="default">
        <Container size="narrow">
          <GSAPReveal>
            <BodyText className="max-w-[52ch]">{paradoxo.subtext}</BodyText>
          </GSAPReveal>
        </Container>
      </Section>

      <Section variant="asymmetric">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {paradoxo.parts.map((part, i) => {
              const isFirst = i === 0;
              return (
                <GSAPReveal
                  key={part.title}
                  from={{ opacity: 0, x: isFirst ? -30 : 30 }}
                  to={{ opacity: 1, x: 0, duration: 0.8, delay: i * 0.15, ease: "power3.out" }}
                >
                  <div data-float className={`h-full rounded-xl border p-8 md:p-10 ${
                    isFirst
                      ? "border-[var(--danger)]/15 bg-[var(--danger)]/[0.03]"
                      : "border-[var(--success)]/15 bg-[var(--success)]/[0.03]"
                  }`}>
                    <span className={`text-[0.55rem] font-semibold uppercase tracking-[0.15em] ${
                      isFirst ? "text-[var(--danger)]/60" : "text-[var(--success)]/60"
                    }`}>
                      {isFirst ? "O que parece" : "O que deveria ser"}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.05] text-[var(--text)]">
                      {part.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                      {part.description}
                    </p>
                  </div>
                </GSAPReveal>
              );
            })}
          </div>

          {/* Insight as inline accent — no HeadlineSlide */}
          <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }}>
            <div className="mx-auto mt-16 max-w-[56ch] border-l-2 border-[var(--accent-primary)]/30 pl-6">
              <p className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-light italic leading-[1.5] text-[var(--text)]">
                {paradoxo.insight}
              </p>
            </div>
          </GSAPReveal>
        </Container>
      </Section>
    </>
  );
}
