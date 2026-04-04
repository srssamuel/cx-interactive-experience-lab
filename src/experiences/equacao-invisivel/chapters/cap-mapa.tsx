"use client";

import { Provocation, Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  HeadlineSlide,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { mapa } from "../content";

/**
 * O MAPA — Concentric architecture visualization.
 * Layers build outward from core, each entering with scroll.
 * Immersive section with radial gradient and depth.
 */
export function CapMapa() {
  return (
    <>
      <ChapterTransition id="mapa" number="06" title={mapa.headline} />

      <Section variant="immersive" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_55%)]" />
        <Container size="narrow">
          <div className="flex flex-col items-center gap-3 py-12">
            {mapa.layers.map((layer, i) => {
              const totalLayers = mapa.layers.length;
              const isCore = layer.position === "core";
              const isOuter = layer.position === "outer";
              // Layers get progressively wider
              const widthPercent = 40 + (i / (totalLayers - 1)) * 60;

              return (
                <ScrollReveal key={layer.title} delay={i * 0.12} direction="up">
                  <div
                    className={`rounded-lg border px-6 py-5 text-center transition-all duration-500 hover:scale-[1.02] ${
                      isCore
                        ? "border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.08] shadow-[0_0_40px_rgba(var(--accent-primary-rgb),0.06)]"
                        : isOuter
                          ? "border-[var(--accent-primary)]/10 bg-[var(--surface)]/10"
                          : "border-[var(--border)] bg-[var(--surface)]/20"
                    }`}
                    style={{ width: `min(${widthPercent}%, 600px)` }}
                  >
                    <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                      isCore ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)]"
                    }`}>
                      {layer.title}
                    </span>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{layer.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
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
