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
  ComparisonCard,
  NumberedCard,
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

/* ─── Teal accent palette override via CSS variables ─── */
const ACCENT_STYLE = {
  "--accent-primary": "#0D9488",
  "--accent-primary-rgb": "13, 148, 136",
  "--accent-secondary": "#F59E0B",
} as React.CSSProperties;

export default function ParadoxoDoSucesso() {
  return (
    <div style={ACCENT_STYLE}>
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <ChapterNav chapters={chapters} />
          <ModeIndicator />

          {/* ═══════════════════════════════════════════════
              HERO — Clean, data-driven opening (no particles, different feel)
              ═══════════════════════════════════════════════ */}
          <HeroSection
            id="hero"
            backgroundElement={
              <>
                {/* Teal radial glow — distinct from amber experience */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(13,148,136,0.04)_0%,transparent_60%)]" />
                {/* Horizontal lines pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(13,148,136,1) 0px, transparent 1px, transparent 60px)",
                  }}
                />
              </>
            }
          >
            <Container size="default" className="text-center">
              <ScrollReveal delay={0.2}>
                <Overline className="mb-8 justify-center">
                  {hero.overline}
                </Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <DisplayHeading className="mx-auto max-w-[18ch]">
                  {hero.headline}{" "}
                  <AccentText>{hero.headlineAccent}</AccentText>
                </DisplayHeading>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <BodyText className="mx-auto mt-6 max-w-[42ch] text-center">
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
                      <span className="mt-2 block max-w-[14ch] text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
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
                    document
                      .getElementById("paradoxo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-14 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10"
                >
                  {hero.cta} ↓
                </motion.button>
              </ScrollReveal>
            </Container>
          </HeroSection>

          {/* ═══════════════════════════════════════════════
              PARADOXO — The core thesis
              ═══════════════════════════════════════════════ */}
          <Section id="paradoxo" background="surface" variant="default">
            <Container>
              <GSAPReveal
                from={{ opacity: 0, x: -40 }}
                to={{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }}
              >
                <Overline>{paradoxo.overline}</Overline>
              </GSAPReveal>

              <GSAPReveal
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
                start="top 80%"
              >
                <SectionHeading className="mt-4 max-w-[18ch]">
                  {paradoxo.headline}
                </SectionHeading>
              </GSAPReveal>

              <GSAPReveal
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.8, ease: "power2.out" }}
                start="top 75%"
              >
                <BodyText className="mt-4 max-w-[48ch]">
                  {paradoxo.subtext}
                </BodyText>
              </GSAPReveal>

              {/* Ativo vs Saudável — side-by-side contrast */}
              <GSAPStaggerReveal
                className="mt-14 grid gap-6 md:grid-cols-2"
                staggerAmount={0.2}
              >
                <ComparisonCard
                  label="O que parece"
                  title={paradoxo.parts[0].title}
                  description={paradoxo.parts[0].description}
                  accent="negative"
                />
                <ComparisonCard
                  label="O que importa"
                  title={paradoxo.parts[1].title}
                  description={paradoxo.parts[1].description}
                  accent="positive"
                />
              </GSAPStaggerReveal>

              <GSAPReveal
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }}
                start="top 65%"
              >
                <Card
                  variant="highlighted"
                  className="mx-auto mt-10 max-w-2xl text-center"
                >
                  <BodyText className="text-[var(--text)]">
                    {paradoxo.insight}
                  </BodyText>
                </Card>
              </GSAPReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              CHAPTER DIVIDER
              ═══════════════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="02"
                title="O que o dashboard não mostra"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              SINAIS — Accordion (different from first experience's expandable cards)
              ═══════════════════════════════════════════════ */}
          <Section id="sinais" variant="default">
            <Container>
              <ScrollReveal>
                <Overline>{sinais.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4 max-w-[22ch]">
                  {sinais.headline}
                </SectionHeading>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <BodyText className="mt-4">{sinais.subtext}</BodyText>
              </ScrollReveal>

              <div className="mt-12 max-w-3xl">
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
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              PROVOCAÇÃO — Breathing moment
              ═══════════════════════════════════════════════ */}
          <Section variant="breathing" background="accent-muted">
            <Container size="narrow" className="text-center">
              <GSAPReveal
                from={{ opacity: 0, scale: 0.95 }}
                to={{
                  opacity: 1,
                  scale: 1,
                  duration: 1.2,
                  ease: "power2.out",
                }}
              >
                <Provocation className="mx-auto text-center">
                  O cliente não vai te avisar que parou de progredir. Ele vai
                  simplesmente parar de renovar.
                </Provocation>
              </GSAPReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              MÉTRICAS — Tabs contrasting vanity vs real
              ═══════════════════════════════════════════════ */}
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
                        <GSAPStaggerReveal
                          className="grid gap-4 md:grid-cols-3"
                          staggerAmount={0.1}
                        >
                          {metricas.vanity.map((item, i) => (
                            <Card key={i} className="border-rose-500/10">
                              <span className="text-xs font-bold uppercase tracking-[0.12em] text-rose-400">
                                Vaidade
                              </span>
                              <h4 className="mt-2 text-base font-semibold text-[var(--text)]">
                                {item.metric}
                              </h4>
                              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                                {item.problem}
                              </p>
                            </Card>
                          ))}
                        </GSAPStaggerReveal>
                      ),
                    },
                    {
                      id: "real",
                      label: "Métricas que importam",
                      content: (
                        <GSAPStaggerReveal
                          className="grid gap-4 md:grid-cols-3"
                          staggerAmount={0.1}
                        >
                          {metricas.real.map((item, i) => (
                            <Card key={i} variant="insight">
                              <span className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-400">
                                Real
                              </span>
                              <h4 className="mt-2 text-base font-semibold text-[var(--text)]">
                                {item.metric}
                              </h4>
                              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                                {item.insight}
                              </p>
                            </Card>
                          ))}
                        </GSAPStaggerReveal>
                      ),
                    },
                  ]}
                />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              COMPARAÇÃO — Slider: Operação sem CS vs com CS orquestrado
              ═══════════════════════════════════════════════ */}
          <Section variant="default" background="base">
            <Container>
              <ScrollReveal>
                <Overline>A diferença na prática</Overline>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4 max-w-[24ch]">
                  Arraste para ver o contraste
                </SectionHeading>
              </ScrollReveal>
              <div className="mt-12">
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

          {/* ═══════════════════════════════════════════════
              STAT MOMENT — Full-screen breathing data
              ═══════════════════════════════════════════════ */}
          <Section variant="breathing" background="base">
            <Container size="narrow" className="text-center">
              <GSAPReveal
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
              >
                <GSAPCounter
                  value={67}
                  suffix="%"
                  className="block font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
                />
                <p className="mt-6 text-xl text-[var(--text-secondary)]">
                  do churn começa no onboarding.
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Não por falha técnica. Por expectativa não alinhada.
                </p>
              </GSAPReveal>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              CHAPTER DIVIDER
              ═══════════════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="04"
                title="De apagar incêndio a orquestrar resultado"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              MODELO — Timeline maturity (same component, different data)
              ═══════════════════════════════════════════════ */}
          <Section id="modelo" background="surface" variant="default">
            <Container>
              <ScrollReveal>
                <Overline>{modelo.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4 max-w-[22ch]">
                  {modelo.headline}
                </SectionHeading>
              </ScrollReveal>

              <div className="mt-16">
                <Timeline items={modelo.stages} />
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              CHAPTER DIVIDER
              ═══════════════════════════════════════════════ */}
          <Section variant="fullbleed" background="base">
            <Container>
              <ChapterDivider
                number="05"
                title="A jornada que ninguém desenhou"
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              JORNADA — Numbered cards (different layout: single column, editorial)
              ═══════════════════════════════════════════════ */}
          <Section id="jornada" variant="editorial">
            <Container size="narrow">
              <ScrollReveal>
                <Overline>{jornada.overline}</Overline>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <SectionHeading className="mt-4 max-w-[22ch]">
                  {jornada.headline}
                </SectionHeading>
              </ScrollReveal>

              <GSAPStaggerReveal
                className="mt-12 space-y-6"
                staggerAmount={0.12}
              >
                {jornada.phases.map((phase, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex-shrink-0 font-mono text-[2rem] font-bold leading-none text-[var(--accent-primary)]/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)]">
                          {phase.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[var(--accent-primary)]">
                          {phase.question}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {phase.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </GSAPStaggerReveal>
            </Container>
          </Section>

          <PausePoint />

          {/* ═══════════════════════════════════════════════
              DISCUSSÃO — Workshop prompt
              ═══════════════════════════════════════════════ */}
          <Section id="discussao" variant="breathing">
            <Container size="narrow">
              <DiscussionPrompt
                question={discussion.question}
                context={discussion.context}
                timerMinutes={discussion.timerMinutes}
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════════
              FECHAMENTO — Provocative close
              ═══════════════════════════════════════════════ */}
          <Section id="fechamento" background="surface" variant="default">
            <Container size="narrow" className="text-center">
              <GSAPReveal
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}
              >
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

              <GSAPReveal
                from={{ opacity: 0, scale: 0.95 }}
                to={{
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: "power2.out",
                }}
                start="top 70%"
              >
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
    </div>
  );
}
