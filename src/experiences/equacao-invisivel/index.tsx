"use client";

import {
  DisplayHeading,
  SectionHeading,
  SubHeading,
  BodyText,
  Overline,
  Provocation,
  AccentText,
  PullQuote,
  SplitContent,
  FullBleedText,
  EvidenceBlock,
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
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { ScrollReveal, ParallaxLayer } from "@/components/motion/scroll-reveal";
import { GSAPReveal, GSAPStaggerReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { Timeline } from "@/components/interactive/timeline";
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
  evolucao,
  workshopDiscussions,
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
    <WorkshopLayout discussions={workshopDiscussions}>
      <PresentationShell>
        <ChapterNav chapters={chapters} />
        <ModeIndicator />

        {/* ═══════════════════════════════════════
            HERO — Left-aligned, cinematic particles
            ═══════════════════════════════════════ */}
        <HeroSection
          id="hero"
          align="left"
          backgroundElement={
            <>
              <div className="h-full w-full opacity-25">
                <ParticleField count={500} color="#F59E0B" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
            </>
          }
        >
          <Container size="wide">
            <div className="max-w-[640px]">
              <ScrollReveal direction="left" delay={0.2}>
                <Overline className="mb-6">{hero.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4}>
                <DisplayHeading>
                  {hero.headline}{" "}
                  <AccentText>{hero.headlineAccent}</AccentText>
                </DisplayHeading>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.6}>
                <BodyText className="mt-6 max-w-[38ch]">
                  {hero.subtext}
                </BodyText>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <div className="mt-10 flex items-center gap-10 md:gap-14">
                  {hero.stats.map((stat, i) => (
                    <EvidenceBlock
                      key={i}
                      stat={`${stat.value}${stat.suffix}`}
                      context={stat.label}
                      className="py-0"
                    />
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    document.getElementById("equacao")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-12 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10"
                >
                  {hero.cta} ↓
                </motion.button>
              </ScrollReveal>
            </div>
          </Container>
        </HeroSection>

        {/* ═══════════════════════════════════════
            EQUAÇÃO — Split layout: text left, visual right
            ═══════════════════════════════════════ */}
        <Section id="equacao" background="surface" variant="default">
          <Container size="wide">
            <SplitContent
              ratio="wide-left"
              left={
                <>
                  <GSAPReveal from={{ opacity: 0, x: -30 }} to={{ opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }}>
                    <Overline>{equation.overline}</Overline>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }} start="top 80%">
                    <SectionHeading className="mt-4 max-w-[16ch]">
                      {equation.headline}
                    </SectionHeading>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.7 }} start="top 75%">
                    <BodyText className="mt-4 max-w-[40ch]">{equation.subtext}</BodyText>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.6 }} start="top 70%">
                    <div className="mt-8 border-l-2 border-[var(--accent-primary)]/20 pl-5">
                      <p className="text-base leading-relaxed text-[var(--text)]">
                        <strong>{equation.insight.split(". ")[0]}.</strong>{" "}
                        {equation.insight.split(". ").slice(1).join(". ")}
                      </p>
                    </div>
                  </GSAPReveal>
                </>
              }
              right={
                <div className="flex flex-col items-center gap-4 pt-8 md:pt-12">
                  <GSAPReveal from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }} start="top 75%">
                    <Card className="w-full text-center">
                      <SubHeading className="text-[var(--text)]">
                        {equation.parts[0].title}
                      </SubHeading>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {equation.parts[0].description}
                      </p>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }} start="top 70%">
                    <span className="font-display text-3xl text-[var(--accent-primary)]/60">+</span>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }} start="top 70%">
                    <Card className="w-full text-center">
                      <SubHeading className="text-[var(--text)]">
                        {equation.parts[1].title}
                      </SubHeading>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {equation.parts[1].description}
                      </p>
                    </Card>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }} start="top 65%">
                    <span className="font-display text-3xl text-[var(--accent-primary)]/60">=</span>
                  </GSAPReveal>

                  <GSAPReveal from={{ opacity: 0, x: 30 }} to={{ opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }} start="top 65%">
                    <span className="font-display text-[clamp(1.3rem,2.5vw,2rem)] tracking-tight text-[var(--accent-primary)]">
                      {equation.conclusion}
                    </span>
                  </GSAPReveal>
                </div>
              }
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            CHAPTER 02 DIVIDER
            ═══════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="02" title="O que quase todo mundo entende errado" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            MITOS — Expandable cards, 2-column asymmetric
            ═══════════════════════════════════════ */}
        <Section id="mitos" variant="default">
          <Container size="wide">
            <div className="max-w-[480px]">
              <GSAPReveal from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }}>
                <Overline>{myths.overline}</Overline>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }} start="top 82%">
                <SectionHeading className="mt-4">
                  {myths.headline}
                </SectionHeading>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.6 }} start="top 78%">
                <BodyText className="mt-3">{myths.subtext}</BodyText>
              </GSAPReveal>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
              {myths.items.slice(0, 3).map((item, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 25 + i * 5 }}
                  to={{ opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, ease: "power2.out" }}
                  start="top 78%"
                >
                  <ExpandableCard
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
                </GSAPReveal>
              ))}
            </div>

            {/* Second row: 2 wider cards for different rhythm */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {myths.items.slice(3).map((item, i) => (
                <GSAPReveal
                  key={i + 3}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power2.out" }}
                  start="top 80%"
                >
                  <ExpandableCard
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
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            PROVOCAÇÃO — Full-bleed text, no card wrapping
            ═══════════════════════════════════════ */}
        <Section variant="breathing" background="accent-muted">
          <Container size="default" align="left" className="md:pl-[15%]">
            <GSAPReveal
              from={{ opacity: 0, x: -40 }}
              to={{ opacity: 1, x: 0, duration: 1.4, ease: "power3.out" }}
            >
              <Provocation>
                Se experiência fosse só atendimento, bastava ser simpático.
                Se fosse só NPS, bastava pedir nota.
                O problema é que não é nenhum dos dois.
              </Provocation>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            RESULTADO — Split: evidence left, cards right
            ═══════════════════════════════════════ */}
        <Section id="resultado" background="surface" variant="asymmetric">
          <Container size="wide">
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
              <Overline>{resultado.overline}</Overline>
            </GSAPReveal>

            <GSAPReveal from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.8 }} start="top 82%">
              <SectionHeading className="mt-4 max-w-[24ch]">
                {resultado.headline}
              </SectionHeading>
            </GSAPReveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {resultado.dimensions.map((dim, i) => (
                <GSAPReveal
                  key={dim.number}
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.07, ease: "power2.out" }}
                  start="top 78%"
                >
                  <div className="group border-t border-[var(--accent-primary)]/20 pt-5">
                    <span className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-[var(--accent-primary)]/50">
                      {dim.number}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
                      {dim.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {dim.description}
                    </p>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            CHAPTER 04 DIVIDER
            ═══════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="04" title="A forma como acontece muda tudo" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            EXPERIÊNCIA — Tabs with editorial intro
            ═══════════════════════════════════════ */}
        <Section id="experiencia" variant="default">
          <Container>
            <SplitContent
              ratio="wide-right"
              left={
                <>
                  <ScrollReveal direction="left">
                    <Overline>{experiencia.overline}</Overline>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <SectionHeading className="mt-4">
                      {experiencia.headline}
                    </SectionHeading>
                  </ScrollReveal>
                </>
              }
              right={
                <Tabs
                  variant="pills"
                  tabs={experiencia.dimensions.map((dim, i) => ({
                    id: `exp-${i}`,
                    label: dim.title,
                    content: (
                      <div className="border-l-2 border-[var(--accent-primary)]/20 pl-5 py-2">
                        <p className="text-lg font-medium text-[var(--text)]">
                          {dim.question}
                        </p>
                        <p className="mt-2 text-[var(--text-secondary)]">
                          {dim.answer}
                        </p>
                      </div>
                    ),
                  }))}
                />
              }
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            STAT MOMENT — Asymmetric, not centered
            ═══════════════════════════════════════ */}
        <Section variant="compact" background="base">
          <Container size="wide">
            <div className="md:ml-[20%]">
              <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}>
                <GSAPCounter
                  value={96}
                  suffix="%"
                  className="block font-mono text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
                />
                <p className="mt-4 max-w-[32ch] text-xl text-[var(--text-secondary)]">
                  dos clientes que enfrentam alto esforço se tornam desleais.
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Não reclamam. Não pedem desconto. Simplesmente vão embora.
                </p>
              </GSAPReveal>
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            CASO PRÁTICO — Comparison cards with pull quote
            ═══════════════════════════════════════ */}
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

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <GSAPReveal from={{ opacity: 0, x: -25 }} to={{ opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }} start="top 78%">
                <ComparisonCard
                  label={caso.scenarios.positive.label}
                  title={caso.scenarios.positive.title}
                  description={caso.scenarios.positive.description}
                  accent="positive"
                />
              </GSAPReveal>
              <GSAPReveal from={{ opacity: 0, x: 25 }} to={{ opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }} start="top 78%">
                <ComparisonCard
                  label={caso.scenarios.negative.label}
                  title={caso.scenarios.negative.title}
                  description={caso.scenarios.negative.description}
                  accent="negative"
                />
              </GSAPReveal>
            </div>

            <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }} start="top 72%">
              <PullQuote className="mx-auto mt-10 max-w-3xl">
                {caso.insight}
              </PullQuote>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            CHAPTER 06 DIVIDER
            ═══════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="06" title="Da reação à orquestração" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            EVOLUÇÃO — Maturity timeline
            ═══════════════════════════════════════ */}
        <Section id="evolucao" background="surface" variant="default">
          <Container>
            <div className="max-w-[500px]">
              <ScrollReveal>
                <Overline>{evolucao.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4">
                  {evolucao.headline}
                </SectionHeading>
              </ScrollReveal>
            </div>

            <div className="mt-14">
              <Timeline items={evolucao.stages} />
            </div>
          </Container>
        </Section>

        <PausePoint />

        {/* ═══════════════════════════════════════
            DISCUSSÃO — Workshop prompts
            ═══════════════════════════════════════ */}
        <Section id="discussao" variant="breathing">
          <Container size="narrow">
            <DiscussionPrompt
              question={discussion.question}
              context={discussion.context}
              timerMinutes={discussion.timerMinutes}
            />

            <div className="mt-14">
              <DiscussionPrompt
                question="Em qual nível de maturidade sua operação está hoje? O que precisaria mudar para subir um nível?"
                context="Reveja os 4 níveis de maturidade. Identifique em qual sua equipe opera na maioria dos processos — não no melhor caso, no caso típico."
                timerMinutes={5}
              />
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════
            FECHAMENTO — Staggered insights, no uniform cards
            ═══════════════════════════════════════ */}
        <Section id="fechamento" background="surface" variant="default">
          <Container size="wide">
            <SplitContent
              ratio="wide-left"
              left={
                <ParallaxLayer speed={0.3}>
                  <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}>
                    <FullBleedText>
                      {fechamento.headline}
                    </FullBleedText>
                  </GSAPReveal>
                </ParallaxLayer>
              }
              right={
                <GSAPStaggerReveal staggerAmount={0.08} className="pt-4">
                  {fechamento.insights.map((insight, i) => (
                    <div
                      key={i}
                      className="flex gap-4 border-b border-[var(--border)] py-4 last:border-0"
                    >
                      <span className="font-mono text-xs font-bold text-[var(--accent-primary)]/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {insight}
                      </p>
                    </div>
                  ))}
                </GSAPStaggerReveal>
              }
            />

            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }} start="top 72%">
              <div className="mx-auto mt-20 max-w-3xl border-t border-[var(--accent-primary)]/10 pt-10 text-center">
                <BodyText className="font-display text-xl text-[var(--text)]">
                  {fechamento.provocation}
                </BodyText>
              </div>
            </GSAPReveal>
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
      </PresentationShell>
    </WorkshopLayout>
  );
}
