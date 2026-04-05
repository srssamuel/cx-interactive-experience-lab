"use client";

import dynamic from "next/dynamic";
import { Section, Container, FullBleedText, StatNumber, StatLabel } from "@/components/design-system";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { GSAPReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { BlurReveal } from "@/components/motion/text-reveal";
import {
  DataSpectacle,
  ChapterTransition,
} from "@/components/cinematic/headline-slide";
import { motion } from "framer-motion";
import { custoSilencio } from "../content";

const GlowingOrb = dynamic(
  () => import("@/components/cinematic/glowing-orb").then((m) => m.GlowingOrb),
  { ssr: false }
);

/**
 * O CUSTO DO SILÊNCIO — The emotional peak.
 * 91% never complain. This is the "wow" moment.
 * Custom pulsing rings around the big number.
 * BlurReveal for the pullQuote — cinema moment.
 */
export function CapCustoSilencio() {
  return (
    <>
      <ChapterTransition textShadow="subtle" id="custosilencio" number="05" title={custoSilencio.headline} />

      <DataSpectacle accent>
        <div className="relative flex flex-col items-center text-center">
          {/* 3D orb — ambient depth behind the big number */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
            <div className="h-[320px] w-[320px]">
              <GlowingOrb />
            </div>
          </div>
          {/* Pulsing concentric rings — bespoke visual ornament */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-[var(--accent-primary)]"
                style={{
                  width: `${ring * 140 + 80}px`,
                  height: `${ring * 140 + 80}px`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.08, 0],
                  scale: [0.9, 1.05, 1.15],
                }}
                transition={{
                  duration: 3,
                  delay: ring * 0.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <GSAPReveal>
            <span className="relative font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none text-[var(--accent-primary)]">
              <GSAPCounter value={custoSilencio.bigNumber.value} />
              {custoSilencio.bigNumber.suffix}
            </span>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              {custoSilencio.bigNumber.label}
            </p>
          </GSAPReveal>
        </div>
      </DataSpectacle>

      <Section background="surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {custoSilencio.stats.map((stat, i) => (
              <GSAPReveal key={stat.label} from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: "power3.out" }}>
                <div className="text-center">
                  <StatNumber>
                    <GSAPCounter value={stat.value} />
                    {stat.suffix}
                  </StatNumber>
                  <StatLabel className="mt-1 block">{stat.label}</StatLabel>
                  <p className="mt-2 text-xs text-[var(--text-muted)]">{stat.context}</p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* The cinema moment — fullbleed pullquote */}
      <section className="relative flex min-h-[50vh] items-center justify-center py-20 md:py-28">
        <div className="absolute inset-0 bg-[var(--bg)]" />
        <BlurReveal>
          <FullBleedText>{custoSilencio.pullQuote}</FullBleedText>
        </BlurReveal>
      </section>

      <WorkshopBlock {...custoSilencio.workshop} />
    </>
  );
}
