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
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { ScrollReveal, StaggerGroup } from "@/components/motion/scroll-reveal";
import { GSAPReveal, GSAPStaggerReveal, GSAPParallax, GSAPCounter } from "@/components/motion/gsap-reveal";
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

        {/* ═══════════════════════════════════════════════
            HERO — Cinematic opening with particles + stats
            ═══════════════════════════════════════════════ */}
        <HeroSection
          id="hero"
          backgroundElement={
            <>
              <div className="h-full w-full opacity-30">
                <ParticleField count={500} color="#F59E0B" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
            </>
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
              <div className="mt-12 flex items-center justify-center gap-12 md:gap-20">
                {hero.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <GSAPCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="block font-mono text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
                    />
                    <span className="mt-2 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {stat.label}
                    </span>
                  </div>
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
                className="mt-14 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10"
              >
                {hero.cta} ↓
              </motion.button>
            </ScrollReveal>
          </Container>
        </HeroSection>

        {/* ═══════════════════════════════════════════════
            EQUAÇÃO — The core thesis with GSAP reveal
            ═══════════════════════════════════════════════ */}
        <Section id="equacao" background="surface" variant="default">
          <Container>
            <GSAPReveal from={{ opacity: 0, x: -40 }} to={{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }}>
              <Overline>{equation.overline}</Overline>
            </GSAPReveal>

            <GSAPReveal from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }} start="top 80%">
              <SectionHeading className="mt-4 max-w-[16ch]">
                {equation.headline}
              </SectionHeading>
            </GSAPReveal>

            <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.8, ease: "power2.out" }} start="top 75%">
              <BodyText className="mt-4 max-w-[44ch]">{equation.subtext}</BodyText>
            </GSAPReveal>

            {/* Equation visual — staggered with GSAP */}
            <div className="mt-16 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
              <GSAPReveal from={{ opacity: 0, scale: 0.9, y: 30 }} to={{ opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.7)" }} start="top 75%">
                <Card className="min-w-[240px] text-center">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {equation.parts[0].title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {equation.parts[0].description}
                  </p>
                </Card>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }} start="top 70%">
                <span className="font-display text-4xl text-[var(--accent-primary)]">+</span>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, scale: 0.9, y: 30 }} to={{ opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.7)" }} start="top 70%">
                <Card className="min-w-[240px] text-center">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {equation.parts[1].title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {equation.parts[1].description}
                  </p>
                </Card>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }} start="top 65%">
                <span className="font-display text-4xl text-[var(--accent-primary)]">=</span>
              </GSAPReveal>

              <GSAPReveal from={{ opacity: 0, x: 40 }} to={{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }} start="top 65%">
                <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight text-[var(--accent-primary)]">
                  {equation.conclusion}
                </span>
              </GSAPReveal>
            </div>

            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }} start="top 60%">
              <Card variant="highlighted" className="mx-auto mt-12 max-w-2xl text-center">
                <BodyText className="text-[var(--text)]">
                  <strong>{equation.insight.split(". ")[0]}.</strong>{" "}
                  <strong>{equation.insight.split(". ")[1]}.</strong>{" "}
                  {equation.insight.split(". ")[2]}
                </BodyText>
              </Card>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            CHAPTER DIVIDER — Visual break
            ═══════════════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="02" title="O que quase todo mundo entende errado" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            MITOS — Expandable cards with GSAP stagger
            ═══════════════════════════════════════════════ */}
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

            <GSAPStaggerReveal
              className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              staggerAmount={0.1}
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
            </GSAPStaggerReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            PROVOCAÇÃO — Full-bleed breathing moment
            ═══════════════════════════════════════════════ */}
        <Section variant="breathing" background="accent-muted">
          <Container size="narrow" className="text-center">
            <GSAPReveal
              from={{ opacity: 0, scale: 0.95 }}
              to={{ opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }}
            >
              <Provocation className="mx-auto text-center">
                Se experiência fosse só atendimento, bastava ser simpático.
                Se fosse só NPS, bastava pedir nota.
                O problema é que não é nenhum dos dois.
              </Provocation>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            RESULTADO ESPERADO — Numbered cards with parallax
            ═══════════════════════════════════════════════ */}
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

            <GSAPStaggerReveal
              className="mt-12 grid gap-4 md:grid-cols-2"
              staggerAmount={0.15}
            >
              {resultado.dimensions.map((dim) => (
                <NumberedCard
                  key={dim.number}
                  number={dim.number}
                  title={dim.title}
                  description={dim.description}
                />
              ))}
            </GSAPStaggerReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            CHAPTER DIVIDER
            ═══════════════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="04" title="A forma como acontece muda tudo" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            EXPERIÊNCIA APROPRIADA — Tabs with Framer Motion
            ═══════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════
            STAT MOMENT — Full-screen breathing data point
            ═══════════════════════════════════════════════ */}
        <Section variant="breathing" background="base">
          <Container size="narrow" className="text-center">
            <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}>
              <GSAPCounter
                value={96}
                suffix="%"
                className="block font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
              />
              <p className="mt-6 text-xl text-[var(--text-secondary)]">
                dos clientes que enfrentam alto esforço se tornam desleais.
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Não reclamam. Não pedem desconto. Simplesmente vão embora.
              </p>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            CASO PRÁTICO — Comparison with real contrast
            ═══════════════════════════════════════════════ */}
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

            <GSAPStaggerReveal
              className="mt-12 grid gap-6 md:grid-cols-2"
              staggerAmount={0.2}
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
            </GSAPStaggerReveal>

            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }} start="top 70%">
              <Card variant="highlighted" className="mx-auto mt-8 max-w-2xl">
                <BodyText className="text-center text-[var(--text)]">
                  {caso.insight}
                </BodyText>
              </Card>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            CHAPTER DIVIDER — Maturity evolution
            ═══════════════════════════════════════════════ */}
        <Section variant="fullbleed" background="base">
          <Container>
            <ChapterDivider number="06" title="Da reação à orquestração" />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            EVOLUÇÃO — Maturity timeline
            ═══════════════════════════════════════════════ */}
        <Section id="evolucao" background="surface" variant="default">
          <Container>
            <ScrollReveal>
              <Overline>{evolucao.overline}</Overline>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SectionHeading className="mt-4 max-w-[22ch]">
                {evolucao.headline}
              </SectionHeading>
            </ScrollReveal>

            <div className="mt-16">
              <Timeline items={evolucao.stages} />
            </div>
          </Container>
        </Section>

        <PausePoint />

        {/* ═══════════════════════════════════════════════
            DISCUSSÃO — Workshop prompts
            ═══════════════════════════════════════════════ */}
        <Section id="discussao" variant="breathing">
          <Container size="narrow">
            <DiscussionPrompt
              question={discussion.question}
              context={discussion.context}
              timerMinutes={discussion.timerMinutes}
            />

            <div className="mt-16">
              <DiscussionPrompt
                question="Em qual nível de maturidade sua operação está hoje? O que precisaria mudar para subir um nível?"
                context="Reveja os 4 níveis de maturidade. Identifique em qual sua equipe opera na maioria dos processos — não no melhor caso, no caso típico."
                timerMinutes={5}
              />
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════
            FECHAMENTO — Provocative close with parallax
            ═══════════════════════════════════════════════ */}
        <Section id="fechamento" background="surface" variant="default">
          <Container size="narrow" className="text-center">
            <GSAPReveal from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}>
              <Provocation className="mx-auto text-center">
                {fechamento.headline}
              </Provocation>
            </GSAPReveal>

            <div className="mx-auto mt-16 max-w-2xl text-left">
              <GSAPStaggerReveal staggerAmount={0.1}>
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
              </GSAPStaggerReveal>
            </div>

            <GSAPReveal from={{ opacity: 0, scale: 0.95 }} to={{ opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }} start="top 70%">
              <Card
                variant="highlighted"
                className="mx-auto mt-16 max-w-2xl text-center"
              >
                <BodyText className="font-display text-lg text-[var(--text)]">
                  {fechamento.provocation}
                </BodyText>
              </Card>
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
