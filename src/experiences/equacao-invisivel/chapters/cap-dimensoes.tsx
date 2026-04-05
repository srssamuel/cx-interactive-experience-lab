"use client";

import { Section, Container, BentoGrid, BentoItem } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { TiltCard } from "@/components/interactive/tilt-card";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { dimensoes } from "../content";

/**
 * 4 DIMENSÕES — BentoGrid with TiltCards.
 * First dimension (Funcional) spans 2 cols as the "base".
 * Others are single-col, creating asymmetry.
 */
export function CapDimensoes() {
  return (
    <>
      <ChapterTransition textShadow="subtle" id="dimensoes" number="03" title={dimensoes.headline} />

      <Section variant="breathing">
        <Container>
          <BentoGrid columns={2} className="gap-5">
            {dimensoes.items.map((dim, i) => (
              <BentoItem
                key={dim.title}
                colSpan={i === 0 ? 2 : 1}
                className="border-none bg-transparent p-0"
              >
                <GSAPReveal from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: "power3.out" }}>
                  <TiltCard maxTilt={6} glare className="h-full">
                    <div data-float className={`relative h-full overflow-hidden rounded-xl border border-[var(--border)] p-8 ${
                      i === 0
                        ? "bg-[var(--accent-primary)]/[0.03] md:p-10"
                        : "bg-[var(--surface)]/20"
                    }`}>
                      <div className="absolute -right-6 -top-6 font-mono text-[6rem] font-bold leading-none text-[var(--accent-primary)]/[0.04]">
                        {dim.number}
                      </div>
                      <div className="relative">
                        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                          {dim.short}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-light text-[var(--text)]">
                          {dim.title}
                        </h3>
                        <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                          {dim.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </GSAPReveal>
              </BentoItem>
            ))}
          </BentoGrid>
        </Container>
      </Section>

      <WorkshopBlock {...dimensoes.workshop} />
    </>
  );
}
