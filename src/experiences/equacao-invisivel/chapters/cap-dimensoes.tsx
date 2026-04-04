"use client";

import { Section, Container } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { SpotlightCard } from "@/components/interactive/spotlight-card";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { dimensoes } from "../content";

export function CapDimensoes() {
  return (
    <>
      <ChapterTransition id="dimensoes" number="03" title={dimensoes.headline} />

      <Section variant="default">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {dimensoes.items.map((dim) => (
              <GSAPReveal key={dim.title}>
                <SpotlightCard className="h-full">
                  <div className="relative p-8">
                    <div className="absolute -right-4 -top-4 font-mono text-[5rem] font-bold leading-none text-[var(--accent-primary)]/[0.04]">
                      {dim.number}
                    </div>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                      {dim.short}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-light text-[var(--text)]">
                      {dim.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {dim.description}
                    </p>
                  </div>
                </SpotlightCard>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      <WorkshopBlock {...dimensoes.workshop} />
    </>
  );
}
