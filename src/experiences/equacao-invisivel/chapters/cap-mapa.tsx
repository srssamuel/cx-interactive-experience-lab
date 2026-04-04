"use client";

import { Provocation, Section, Container } from "@/components/design-system";
import { GSAPReveal, GSAPStaggerReveal } from "@/components/motion/gsap-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { mapa } from "../content";

export function CapMapa() {
  const widths = ["max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl"];

  return (
    <>
      <ChapterTransition id="mapa" number="06" title={mapa.headline} />

      <Section variant="default" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.03)_0%,transparent_50%)]" />
        <Container>
          <GSAPStaggerReveal className="space-y-3">
            {mapa.layers.map((layer, i) => {
              const isCore = layer.position === "core";
              const isOuter = layer.position === "outer";
              return (
                <div
                  key={layer.title}
                  className={`mx-auto rounded-lg border px-6 py-4 text-center transition-all duration-300 ${widths[i]} ${
                    isCore
                      ? "border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06]"
                      : isOuter
                        ? "border-[var(--accent-primary)]/10 bg-[var(--surface)]/20"
                        : "border-[var(--border)] bg-[var(--surface)]/30"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                    {layer.title}
                  </span>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{layer.description}</p>
                </div>
              );
            })}
          </GSAPStaggerReveal>
        </Container>
      </Section>

      <HeadlineSlide background="surface">
        <GSAPReveal>
          <Provocation>{mapa.insight}</Provocation>
          <p className="mt-6 font-display text-xl font-light text-[var(--accent-primary)]">
            {mapa.provocacao}
          </p>
        </GSAPReveal>
      </HeadlineSlide>
    </>
  );
}
