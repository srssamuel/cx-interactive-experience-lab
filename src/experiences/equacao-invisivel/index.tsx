"use client";

import {
  DisplayHeading,
  SectionHeading,
  BodyText,
  Overline,
  Provocation,
  AccentText,
  Section,
  Container,
  HeroSection,
  ChapterDivider,
  Card,
  ExpandableCard,
  ComparisonCard,
  NumberedCard,
} from "@/components/design-system";
import { ChapterNav } from "@/components/navigation/chapter-nav";
import { ScrollReveal, StaggerGroup } from "@/components/motion/scroll-reveal";
import { StatBlock } from "@/components/motion/counter-animation";
import { Tabs } from "@/components/interactive/tabs";
import { DiscussionPrompt, PausePoint } from "@/components/workshop/discussion-prompt";
import {
  chapters,
  hero,
  equation,
  myths,
  resultado,
  experiencia,
  caso,
  discussion,
  fechamento,
} from "./content";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/cinematic/particle-field").then(
      (mod) => mod.ParticleField
    ),
  { ssr: false }
);

export default function EquacaoInvisivel() {
  return (
    <>
      <ChapterNav chapters={chapters} />

      {/* ═══ HERO ═══ */}
      <HeroSection
        id="hero"
        backgroundElement={
          <div className="h-full w-full opacity-30">
            <ParticleField count={400} color="#F59E0B" />
          </div>
        }
      >
        <Container size="default" className="text-center">
          <ScrollReveal delay={0.2}>
            <Overline className="mb-8 justify-center">{hero.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <DisplayHeading className="mx-auto max-w-[18ch]">
              {hero.headline}{" "}
              <AccentText>{hero.headlineAccent}</AccentText>
            </DisplayHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <BodyText className="mx-auto mt-6 max-w-[40ch] text-center">
              {hero.subtext}
            </BodyText>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="mt-12 flex items-center justify-center gap-12 md:gap-16">
              {hero.stats.map((stat, i) => (
                <StatBlock
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("equacao")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-12 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10"
            >
              {hero.cta} ↓
            </motion.button>
          </ScrollReveal>
        </Container>
      </HeroSection>

      {/* ═══ EQUAÇÃO ═══ */}
      <Section id="equacao" background="surface" variant="default">
        <Container>
          <ScrollReveal>
            <Overline>{equation.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading className="mt-4 max-w-[16ch]">
              {equation.headline}
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BodyText className="mt-4 max-w-[44ch]">{equation.subtext}</BodyText>
          </ScrollReveal>

          {/* Equation visual */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
              <Card className="min-w-[240px] text-center">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {equation.parts[0].title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {equation.parts[0].description}
                </p>
              </Card>

              <span className="font-display text-4xl text-[var(--accent-primary)]">
                +
              </span>

              <Card className="min-w-[240px] text-center">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {equation.parts[1].title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {equation.parts[1].description}
                </p>
              </Card>

              <span className="font-display text-4xl text-[var(--accent-primary)]">
                =
              </span>

              <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight text-[var(--accent-primary)]">
                {equation.conclusion}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Card variant="highlighted" className="mx-auto mt-12 max-w-2xl text-center">
              <BodyText className="text-[var(--text)]">
                <strong>{equation.insight.split(". ")[0]}.</strong>{" "}
                <strong>{equation.insight.split(". ")[1]}.</strong>{" "}
                {equation.insight.split(". ")[2]}
              </BodyText>
            </Card>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ═══ MITOS ═══ */}
      <Section id="mitos" variant="default">
        <Container>
          <ScrollReveal>
            <Overline>{myths.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading className="mt-4 max-w-[18ch]">
              {myths.headline}
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BodyText className="mt-4">{myths.subtext}</BodyText>
          </ScrollReveal>

          <StaggerGroup
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
          >
            {myths.items.map((item, i) => (
              <ExpandableCard
                key={i}
                expandedContent={
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-400">
                      Verdade
                    </span>
                    <p className="mt-2 font-medium text-[var(--text)]">
                      {item.truth}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </div>
                }
              >
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-rose-400">
                  Crença
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                  {item.myth}
                </h3>
              </ExpandableCard>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ═══ RESULTADO ESPERADO ═══ */}
      <Section id="resultado" background="surface" variant="default">
        <Container>
          <ScrollReveal>
            <Overline>{resultado.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading className="mt-4 max-w-[22ch]">
              {resultado.headline}
            </SectionHeading>
          </ScrollReveal>

          <StaggerGroup
            className="mt-12 grid gap-4 md:grid-cols-2"
            staggerDelay={0.1}
          >
            {resultado.dimensions.map((dim) => (
              <NumberedCard
                key={dim.number}
                number={dim.number}
                title={dim.title}
                description={dim.description}
              />
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* ═══ EXPERIÊNCIA APROPRIADA ═══ */}
      <Section id="experiencia" variant="default">
        <Container>
          <ScrollReveal>
            <Overline>{experiencia.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading className="mt-4 max-w-[22ch]">
              {experiencia.headline}
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-12">
            <Tabs
              variant="pills"
              tabs={experiencia.dimensions.map((dim, i) => ({
                id: `exp-${i}`,
                label: dim.title,
                content: (
                  <Card variant="insight" className="max-w-2xl">
                    <p className="text-lg font-medium text-[var(--text)]">
                      {dim.question}
                    </p>
                    <p className="mt-3 text-[var(--text-secondary)]">
                      {dim.answer}
                    </p>
                  </Card>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* ═══ CASO PRÁTICO ═══ */}
      <Section id="caso" background="surface" variant="default">
        <Container>
          <ScrollReveal>
            <Overline>{caso.overline}</Overline>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading className="mt-4 max-w-[24ch]">
              {caso.headline}
            </SectionHeading>
          </ScrollReveal>

          <StaggerGroup
            className="mt-12 grid gap-6 md:grid-cols-2"
            staggerDelay={0.15}
          >
            <ComparisonCard
              label={caso.scenarios.positive.label}
              title={caso.scenarios.positive.title}
              description={caso.scenarios.positive.description}
              accent="positive"
            />
            <ComparisonCard
              label={caso.scenarios.negative.label}
              title={caso.scenarios.negative.title}
              description={caso.scenarios.negative.description}
              accent="negative"
            />
          </StaggerGroup>

          <ScrollReveal delay={0.4}>
            <Card variant="highlighted" className="mx-auto mt-8 max-w-2xl">
              <BodyText className="text-center text-[var(--text)]">
                {caso.insight}
              </BodyText>
            </Card>
          </ScrollReveal>
        </Container>
      </Section>

      <PausePoint />

      {/* ═══ DISCUSSÃO ═══ */}
      <Section id="discussao" variant="breathing">
        <Container size="narrow">
          <DiscussionPrompt
            question={discussion.question}
            context={discussion.context}
            timerMinutes={discussion.timerMinutes}
          />
        </Container>
      </Section>

      {/* ═══ FECHAMENTO ═══ */}
      <Section id="fechamento" background="surface" variant="default">
        <Container size="narrow" className="text-center">
          <ScrollReveal>
            <Provocation className="mx-auto max-w-[20ch] text-center">
              {fechamento.headline}
            </Provocation>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-2xl text-left">
            <StaggerGroup staggerDelay={0.08}>
              {fechamento.insights.map((insight, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-b border-[var(--border)] py-5"
                >
                  <span className="font-mono text-sm font-bold text-[var(--accent-primary)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[var(--text)] leading-relaxed">
                    {insight}
                  </p>
                </div>
              ))}
            </StaggerGroup>
          </div>

          <ScrollReveal delay={0.5}>
            <Card
              variant="highlighted"
              className="mx-auto mt-16 max-w-2xl text-center"
            >
              <BodyText className="font-display text-lg text-[var(--text)]">
                {fechamento.provocation}
              </BodyText>
            </Card>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
        <Container className="text-center">
          <p className="text-xs text-[var(--text-muted)]">
            CX Experience Lab — Diretoria de Qualidade e Dados — AeC
          </p>
        </Container>
      </footer>
    </>
  );
}
