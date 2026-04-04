"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { myths } from "../content";

export function CapMitos() {
  return (
    <>
      <ChapterTransition id="mitos" number="02" title={myths.headline} />

      <Section variant="default">
        <Container>
          <div className="space-y-6">
            {myths.items.map((item, i) => (
              <GSAPReveal key={item.myth}>
                <div
                  className={`rounded-xl border p-8 ${
                    i % 2 === 0
                      ? "border-[var(--border)] bg-[var(--surface)]/20"
                      : "border-[var(--border)] bg-[var(--bg)]"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-[0.65rem] font-medium text-[var(--text-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-light text-[var(--text)]">
                        &ldquo;{item.myth}&rdquo;
                      </h3>
                      <div className="mt-4 border-l-2 border-[var(--accent-primary)]/30 pl-4">
                        <p className="font-medium text-[var(--text)]">{item.truth}</p>
                      </div>
                      <p className="mt-3 text-sm text-[var(--text-muted)]">{item.evidence}</p>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
