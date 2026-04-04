"use client";

import { Section, Container } from "@/components/design-system";
import { GSAPReveal } from "@/components/motion/gsap-reveal";
import { BlurReveal } from "@/components/motion/text-reveal";
import { ChapterTransition } from "@/components/cinematic/headline-slide";
import { myths } from "../content";

/**
 * DECONSTRUCTION — Each myth escalates visually.
 * Alternates between full-width editorial and inset evidence.
 * No uniform cards. Asymmetric, staggered, building tension.
 */
export function CapMitos() {
  return (
    <>
      <ChapterTransition id="mitos" number="02" title={myths.headline} />

      <Section variant="default">
        <Container size="wide">
          <div className="space-y-20 md:space-y-28">
            {myths.items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <GSAPReveal key={item.myth} from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0, duration: 0.8, delay: 0.05, ease: "power3.out" }}>
                  <div className={`grid items-start gap-8 md:grid-cols-[1fr_1fr] ${isEven ? "" : "md:direction-rtl"}`}>
                    {/* The myth — large, editorial */}
                    <div className={isEven ? "md:pr-12" : "md:pl-12 md:order-2"}>
                      <span className="font-mono text-[0.6rem] text-[var(--text-muted)]">
                        {String(i + 1).padStart(2, "0")} / {String(myths.items.length).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-light leading-[1.05] tracking-[-0.03em] text-[var(--text)]">
                        &ldquo;{item.myth}&rdquo;
                      </h3>
                    </div>

                    {/* The truth — inset, contrasting */}
                    <div className={`relative ${isEven ? "md:pl-12" : "md:pr-12 md:order-1"}`}>
                      <div className={`absolute ${isEven ? "left-0" : "right-0"} top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent-primary)]/20 via-[var(--accent-primary)]/10 to-transparent md:block`} />
                      <div className="border-l-2 border-[var(--accent-primary)]/30 pl-5">
                        <p className="text-[0.95rem] font-medium leading-[1.6] text-[var(--text)]">
                          {item.truth}
                        </p>
                        <p className="mt-3 text-[0.8rem] leading-[1.6] text-[var(--text-muted)]">
                          {item.evidence}
                        </p>
                      </div>
                    </div>
                  </div>
                </GSAPReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
