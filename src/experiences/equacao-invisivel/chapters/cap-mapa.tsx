"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ScrollReveal, ParallaxLayer } from "@/components/motion/scroll-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { mapa } from "../content";

/**
 * O MAPA — Concentric architecture visualization.
 * Insight integrated at the bottom, not a separate HeadlineSlide.
 */
export function CapMapa() {
  return (
    <>
      <ChapterTransition id="mapa" number="06" title={mapa.headline} />

      <Section variant="immersive" className="relative">
        <ParallaxLayer speed={0.3} className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_55%)]" />
        </ParallaxLayer>
        <Container size="narrow">
          <div className="flex flex-col items-center gap-3 py-12">
            {mapa.layers.map((layer, i) => {
              const totalLayers = mapa.layers.length;
              const isCore = layer.position === "core";
              const isOuter = layer.position === "outer";
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

          {/* Insight integrated — compact, not full-viewport */}
          <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }}>
            <div className="mx-auto mt-10 max-w-[48ch] text-center">
              <p className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-light italic leading-[1.4] text-[var(--text)]">
                {mapa.insight}
              </p>
              <p className="mt-4 font-display text-lg font-light text-[var(--accent-primary)]">
                {mapa.provocacao}
              </p>
            </div>
          </GSAPReveal>
        </Container>
      </Section>
    </>
  );
}
