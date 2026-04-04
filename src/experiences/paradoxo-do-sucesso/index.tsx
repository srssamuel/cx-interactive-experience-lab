"use client";

import {
  DisplayHeading,
  SectionHeading,
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
  ComparisonCard,
} from "@/components/design-system";
import { ChapterNav } from "@/components/navigation/chapter-nav";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GSAPReveal,
  GSAPStaggerReveal,
  GSAPCounter,
} from "@/components/motion/gsap-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { Timeline } from "@/components/interactive/timeline";
import { Accordion } from "@/components/interactive/accordion";
import { ComparisonSlider } from "@/components/interactive/comparison-slider";
import {
  DiscussionPrompt,
  PausePoint,
} from "@/components/workshop/discussion-prompt";
import {
  chapters,
  hero,
  paradoxo,
  sinais,
  metricas,
  modelo,
  jornada,
  discussion,
  workshopDiscussions,
  fechamento,
} from "./content";
import { motion } from "framer-motion";

export default function ParadoxoDoSucesso() {
  return (
    <div className="theme-teal">
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <ChapterNav chapters={chapters} />
          <ModeIndicator />

          {/* ═══════════════════════════════════════
              HERO — Centered but with asymmetric data layout
              ═══════════════════════════════════════ */}
          <HeroSection
            id="hero"
            backgroundElement={
              <>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(13,148,136,0.04)_0%,transparent_40%)]" />
                <div
                  className="absolute inset-0 opacity-[0.015]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(13,148,136,1) 0px, transparent 1px, transparent 80px)",
                  }}
                />
              </>
            }
          >
            <Container size="default">
              <div className="max-w-[680px] mx-auto text-center">
                <ScrollReveal delay={0.2}>
                  <Overline className="mb-6 justify-center">
                    {hero.overline}
                  </Overline>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <DisplayHeading className="mx-auto">
                    {hero.headline}{" "}
                    <AccentText>{hero.headlineAccent}</AccentText>
                  </DisplayHeading>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <BodyText className="mx-auto mt-6 max-w-[40ch] text-center">
                    {hero.subtext}
                  </BodyText>
                </ScrollReveal>
              </div>

              {/* Stats: asymmetric, not centered row */}
              <ScrollReveal delay={0.8}>
                <div className="mt-14 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-end">
                  <EvidenceBlock
                    stat={`${hero.stats[0].value}${hero.stats[0].suffix}`}
                    context={hero.stats[0].label}
                    className="md:text-right md:border-l-0 md:border-r-2 md:border-[var(--accent-primary)]/30 md:pr-6 md:pl-0"
                  />
                  <div className="hidden md:block h-12 w-px bg-[var(--border)]" />
                  <EvidenceBlock
                    stat={`${hero.stats[1].value}${hero.stats[1].suffix}`}
                    context={hero.stats[1].label}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <div className="mt-12 text-center">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      document
                        .getElementById("paradoxo")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10"
                  >
                    {hero.cta} ↓
                  </motion.button>
                </div>
              </ScrollReveal>
            </Container>
          </HeroSection>

          {/* ═══════════════════════════════════════
              PARADOXO — The core thesis, editorial single-column
              ═══════════════════════════════════════ */}
          <Section id="paradoxo" background="surface" variant="default">
            <Container size="default">
              <div className="max-w-[560px]">
                <GSAPReveal
                  from={{ opacity: 0, x: -25 }}
                  to={{ opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }}
                >
                  <Overline>{paradoxo.overline}</Overline>
                </GSAPReveal>

                <GSAPReveal
                  from={{ opacity: 0, y: 25 }}
                  to={{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }}
                  start="top 80%"
                >
                  <SectionHeading className="mt-4">
                    {paradoxo.headline}
                  </SectionHeading>
                </GSAPReveal>

                <GSAPReveal
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, duration: 0.7 }}
                  start="top 75%"
                >
                  <BodyText className="mt-4">{paradoxo.subtext}</BodyText>
                </GSAPReveal>
              </div>

              {/* Ativo vs Saudável — side-by-side, entering from opposing sides */}
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <GSAPReveal
                  from={{ opacity: 0, x: -30 }}
                  to={{ opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }}
                  start="top 78%"
                >
                  <ComparisonCard
                    label="O que parece"
                    title={paradoxo.parts[0].title}
                    description={paradoxo.parts[0].description}
                    accent="negative"
                  />
                </GSAPReveal>
                <GSAPReveal
                  from={{ opacity: 0, x: 30 }}
                  to={{ opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }}
                  start="top 78%"
                >
                  <ComparisonCard
                    label="O que importa"
                    title={paradoxo.parts[1].title}
                    description={paradoxo.parts[1].description}
                    accent="positive"
                  />
                </GSAPReveal>
              </div>

              <GSAPReveal
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0, duration: 0.6 }}
                start="top 68%"
              >
                <PullQuote className="mt-10 max-w-2xl">
                  {paradoxo.insight}
                </PullQuote>
              </GSAPReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              CHAPTER 02 DIVIDER
              ═══════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="02"
                title="O que o dashboard não mostra"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              SINAIS — Accordion with split layout
              ═══════════════════════════════════════ */}
          <Section id="sinais" variant="default">
            <Container size="wide">
              <SplitContent
                ratio="wide-right"
                left={
                  <>
                    <GSAPReveal from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0, duration: 0.6 }}>
                      <Overline>{sinais.overline}</Overline>
                    </GSAPReveal>
                    <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }} start="top 82%">
                      <SectionHeading className="mt-4">
                        {sinais.headline}
                      </SectionHeading>
                    </GSAPReveal>
                    <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.6 }} start="top 78%">
                      <BodyText className="mt-3">{sinais.subtext}</BodyText>
                    </GSAPReveal>
                  </>
                }
                right={
                  <Accordion
                    items={sinais.items.map((item, i) => ({
                      id: `signal-${i}`,
                      trigger: (
                        <div className="flex items-center gap-4">
                          <span
                            className={`h-2 w-2 flex-shrink-0 rounded-full ${
                              item.severity === "crítico"
                                ? "bg-rose-500"
                                : item.severity === "alto"
                                  ? "bg-amber-500"
                                  : "bg-yellow-500"
                            }`}
                          />
                          <span className="text-base font-semibold text-[var(--text)]">
                            {item.signal}
                          </span>
                          <span className="ml-auto text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                            {item.severity}
                          </span>
                        </div>
                      ),
                      content: (
                        <p className="pl-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {item.description}
                        </p>
                      ),
                    }))}
                  />
                }
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              PROVOCAÇÃO — Left-aligned, not centered
              ═══════════════════════════════════════ */}
          <Section variant="breathing" background="accent-muted">
            <Container size="default" align="left" className="md:pl-[12%]">
              <GSAPReveal
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }}
              >
                <Provocation>
                  O cliente não vai te avisar que parou de progredir. Ele vai
                  simplesmente parar de renovar.
                </Provocation>
              </GSAPReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              MÉTRICAS — Tabs contrasting vanity vs real
              ═══════════════════════════════════════ */}
          <Section id="metricas" background="surface" variant="default">
            <Container>
              <ScrollReveal>
                <Overline>{metricas.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4 max-w-[22ch]">
                  {metricas.headline}
                </SectionHeading>
              </ScrollReveal>

              <div className="mt-12">
                <Tabs
                  variant="underline"
                  tabs={[
                    {
                      id: "vanity",
                      label: "Métricas de vaidade",
                      content: (
                        <div className="grid gap-4 md:grid-cols-3">
                          {metricas.vanity.map((item, i) => (
                            <GSAPReveal
                              key={i}
                              from={{ opacity: 0, y: 20 }}
                              to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.06 }}
                            >
                              <div className="border-t border-rose-500/20 pt-4">
                                <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-rose-400">
                                  Vaidade
                                </span>
                                <h4 className="mt-2 text-base font-semibold text-[var(--text)]">
                                  {item.metric}
                                </h4>
                                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                                  {item.problem}
                                </p>
                              </div>
                            </GSAPReveal>
                          ))}
                        </div>
                      ),
                    },
                    {
                      id: "real",
                      label: "Métricas que importam",
                      content: (
                        <div className="grid gap-4 md:grid-cols-3">
                          {metricas.real.map((item, i) => (
                            <GSAPReveal
                              key={i}
                              from={{ opacity: 0, y: 20 }}
                              to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.06 }}
                            >
                              <div className="border-l-2 border-emerald-500/30 pl-4">
                                <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-emerald-400">
                                  Real
                                </span>
                                <h4 className="mt-2 text-base font-semibold text-[var(--text)]">
                                  {item.metric}
                                </h4>
                                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                                  {item.insight}
                                </p>
                              </div>
                            </GSAPReveal>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              COMPARAÇÃO — Slider
              ═══════════════════════════════════════ */}
          <Section variant="asymmetric" background="base">
            <Container>
              <div className="max-w-[440px]">
                <ScrollReveal>
                  <Overline>A diferença na prática</Overline>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <SectionHeading className="mt-4">
                    Arraste para ver o contraste
                  </SectionHeading>
                </ScrollReveal>
              </div>
              <div className="mt-10">
                <ComparisonSlider
                  before={{
                    label: "Sem CS estruturado",
                    content: (
                      <div className="space-y-4">
                        <p className="text-base font-semibold text-[var(--text)]">
                          Operação reativa
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li>Churn descoberto na hora da renovação</li>
                          <li>NPS como único indicador de saúde</li>
                          <li>CSM resolve ticket, não gera valor</li>
                          <li>Onboarding termina no go-live</li>
                          <li>Expansão depende de desconto</li>
                        </ul>
                      </div>
                    ),
                  }}
                  after={{
                    label: "CS orquestrado",
                    content: (
                      <div className="space-y-4">
                        <p className="text-base font-semibold text-[var(--text)]">
                          Operação preditiva
                        </p>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                          <li>Risco identificado 90 dias antes</li>
                          <li>Health score multidimensional</li>
                          <li>CSM é consultor de resultado</li>
                          <li>Jornada desenhada por segmento</li>
                          <li>Expansão é consequência natural</li>
                        </ul>
                      </div>
                    ),
                  }}
                />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              STAT MOMENT — Right-aligned, not centered
              ═══════════════════════════════════════ */}
          <Section variant="compact" background="base">
            <Container size="wide">
              <div className="md:ml-auto md:max-w-[50%]">
                <GSAPReveal
                  from={{ opacity: 0, x: 30 }}
                  to={{ opacity: 1, x: 0, duration: 1, ease: "power3.out" }}
                >
                  <GSAPCounter
                    value={67}
                    suffix="%"
                    className="block font-mono text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
                  />
                  <p className="mt-4 max-w-[30ch] text-xl text-[var(--text-secondary)]">
                    do churn começa no onboarding.
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Não por falha técnica. Por expectativa não alinhada.
                  </p>
                </GSAPReveal>
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              CHAPTER 04 DIVIDER
              ═══════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="04"
                title="De apagar incêndio a orquestrar resultado"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              MODELO — Timeline maturity
              ═══════════════════════════════════════ */}
          <Section id="modelo" background="surface" variant="default">
            <Container>
              <div className="max-w-[480px]">
                <ScrollReveal>
                  <Overline>{modelo.overline}</Overline>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <SectionHeading className="mt-4">
                    {modelo.headline}
                  </SectionHeading>
                </ScrollReveal>
              </div>

              <div className="mt-14">
                <Timeline items={modelo.stages} />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              CHAPTER 05 DIVIDER
              ═══════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="05"
                title="A jornada que ninguém desenhou"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              JORNADA — Editorial, single column, border-top style
              ═══════════════════════════════════════ */}
          <Section id="jornada" variant="editorial">
            <Container size="narrow">
              <ScrollReveal>
                <Overline>{jornada.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4">
                  {jornada.headline}
                </SectionHeading>
              </ScrollReveal>

              <div className="mt-12 space-y-0">
                {jornada.phases.map((phase, i) => (
                  <GSAPReveal
                    key={i}
                    from={{ opacity: 0, y: 15 }}
                    to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.06, ease: "power2.out" }}
                    start="top 80%"
                  >
                    <div className="border-t border-[var(--border)] py-6 transition-colors duration-200 hover:bg-[var(--surface)]/50">
                      <div className="flex items-start gap-5">
                        <span className="flex-shrink-0 font-mono text-[1.5rem] font-bold leading-none text-[var(--accent-primary)]/15">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-[var(--text)]">
                            {phase.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-[var(--accent-primary)]/80">
                            {phase.question}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                            {phase.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <PausePoint />

          {/* ═══════════════════════════════════════
              DISCUSSÃO — Workshop prompt
              ═══════════════════════════════════════ */}
          <Section id="discussao" variant="breathing">
            <Container size="narrow">
              <DiscussionPrompt
                question={discussion.question}
                context={discussion.context}
                timerMinutes={discussion.timerMinutes}
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              FECHAMENTO — Split: big text + insights list
              ═══════════════════════════════════════ */}
          <Section id="fechamento" background="surface" variant="default">
            <Container size="wide">
              <GSAPReveal
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}
              >
                <FullBleedText className="max-w-[16ch]">
                  {fechamento.headline}
                </FullBleedText>
              </GSAPReveal>

              <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]">
                <GSAPStaggerReveal staggerAmount={0.07}>
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

                <GSAPReveal
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }}
                  start="top 72%"
                >
                  <div className="border-l-2 border-[var(--accent-primary)]/15 pl-6 pt-2">
                    <BodyText className="font-display text-lg text-[var(--text)]">
                      {fechamento.provocation}
                    </BodyText>
                  </div>
                </GSAPReveal>
              </div>
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
    </div>
  );
}
