"use client";

import {
  DisplayHeading,
  SectionHeading,
  BodyText,
  Overline,
  Provocation,
  AccentText,
  EvidenceBlock,
  SplitContent,
  FullBleedText,
  Section,
  Container,
  HeroSection,
  ChapterDivider,
  Card,
  ComparisonCard,
} from "@/components/design-system";
import { KeyboardHUD } from "@/components/navigation/keyboard-hud";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GSAPReveal,
  GSAPStaggerReveal,
  GSAPCounter,
} from "@/components/motion/gsap-reveal";
import { TextReveal, BlurReveal } from "@/components/motion/text-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { Timeline } from "@/components/interactive/timeline";
import { Accordion } from "@/components/interactive/accordion";
import {
  HeadlineSlide,
  ChapterTransition,
  GrainOverlay,
} from "@/components/cinematic/headline-slide";
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
    <div className="theme-cs">
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <KeyboardHUD chapters={chapters} title="O Paradoxo do Sucesso" />
          <ModeIndicator />

          {/* ═══════════════════════════════════════
              HERO — Typographic, no background image
              ═══════════════════════════════════════ */}
          <HeroSection
            id="hero"
            align="left"
            overlay={false}
            backgroundElement={
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/30" />
                <GrainOverlay opacity={0.02} />
              </>
            }
          >
            <Container size="default">
              <div className="max-w-[680px]">
                <ScrollReveal delay={0.2}>
                  <Overline className="mb-6">
                    {hero.overline}
                  </Overline>
                </ScrollReveal>

                <TextReveal
                  text={hero.headline}
                  tag="h1"
                  trigger="mount"
                  delay={0.4}
                  stagger={0.03}
                  className="font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--text)]"
                />
                <ScrollReveal delay={0.8}>
                  <span className="mt-2 block font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--accent-primary)]">
                    {hero.headlineAccent}
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                  <BodyText className="mt-8 max-w-[40ch]">
                    {hero.subtext}
                  </BodyText>
                </ScrollReveal>

                <ScrollReveal delay={1.2}>
                  <div className="mt-10 flex items-center gap-12">
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
              </div>
            </Container>
          </HeroSection>

          {/* ═══════════════════════════════════════
              CAP 01 — O PARADOXO
              ═══════════════════════════════════════ */}
          <ChapterTransition
            id="paradoxo"
            number="01"
            title={paradoxo.headline}
          />

          <Section variant="default">
            <Container>
              <GSAPReveal>
                <BodyText className="max-w-[52ch]">{paradoxo.subtext}</BodyText>
              </GSAPReveal>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {paradoxo.parts.map((part) => (
                  <GSAPReveal key={part.title}>
                    <Card variant="insight">
                      <h3 className="font-display text-2xl font-light text-[var(--text)]">
                        {part.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {part.description}
                      </p>
                    </Card>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <HeadlineSlide background="surface">
            <GSAPReveal>
              <Provocation>{paradoxo.insight}</Provocation>
            </GSAPReveal>
          </HeadlineSlide>

          {/* ═══════════════════════════════════════
              CAP 02 — SINAIS
              ═══════════════════════════════════════ */}
          <ChapterTransition
            id="sinais"
            number="02"
            title={sinais.headline}
          />

          <Section variant="default">
            <Container size="narrow">
              <GSAPReveal>
                <BodyText className="mb-10">{sinais.subtext}</BodyText>
              </GSAPReveal>

              <Accordion
                items={sinais.items.map((item) => ({
                  id: item.signal,
                  trigger: item.signal,
                  content: (
                    <div>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                      <span className={`mt-3 inline-block rounded-md px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.1em] ${
                        item.severity === "critico"
                          ? "bg-red-500/10 text-red-400"
                          : item.severity === "alto"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-blue-500/10 text-blue-400"
                      }`}>
                        {item.severity}
                      </span>
                    </div>
                  ),
                }))}
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              CAP 03 — METRICAS
              ═══════════════════════════════════════ */}
          <ChapterTransition
            id="metricas"
            number="03"
            title={metricas.headline}
          />

          <Section background="surface">
            <Container>
              <SplitContent
                ratio="equal"
                left={
                  <div>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-red-400">
                      Metricas de vaidade
                    </span>
                    <div className="mt-4 space-y-4">
                      {metricas.vanity.map((v) => (
                        <GSAPReveal key={v.metric}>
                          <div className="rounded-lg border border-red-500/10 bg-red-500/[0.02] p-5">
                            <h4 className="text-sm font-semibold text-[var(--text)]">
                              {v.metric}
                            </h4>
                            <p className="mt-1 text-sm text-[var(--text-muted)]">
                              {v.problem}
                            </p>
                          </div>
                        </GSAPReveal>
                      ))}
                    </div>
                  </div>
                }
                right={
                  <div>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                      Metricas que importam
                    </span>
                    <div className="mt-4 space-y-4">
                      {metricas.real.map((r) => (
                        <GSAPReveal key={r.metric}>
                          <div className="rounded-lg border border-[var(--accent-primary)]/10 bg-[var(--accent-primary)]/[0.02] p-5">
                            <h4 className="text-sm font-semibold text-[var(--text)]">
                              {r.metric}
                            </h4>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                              {r.insight}
                            </p>
                          </div>
                        </GSAPReveal>
                      ))}
                    </div>
                  </div>
                }
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              CAP 04 — MODELO
              ═══════════════════════════════════════ */}
          <ChapterTransition
            id="modelo"
            number="04"
            title={modelo.headline}
          />

          <Section variant="default">
            <Container>
              <Timeline
                items={modelo.stages.map((stage) => ({
                  id: stage.id,
                  label: stage.label,
                  title: stage.title,
                  description: stage.description,
                }))}
              />
            </Container>
          </Section>

          <PausePoint message="Em qual nivel esta sua operacao de CS?" />

          {/* ═══════════════════════════════════════
              CAP 05 — JORNADA
              ═══════════════════════════════════════ */}
          <ChapterTransition
            id="jornada"
            number="05"
            title={jornada.headline}
          />

          <Section background="surface">
            <Container>
              <Tabs
                variant="underline"
                tabs={jornada.phases.map((phase) => ({
                  id: phase.title,
                  label: phase.title,
                  content: (
                    <div className="py-6">
                      <h3 className="font-display text-xl font-light text-[var(--accent-primary)]">
                        {phase.question}
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                        {phase.answer}
                      </p>
                    </div>
                  ),
                }))}
              />
            </Container>
          </Section>

          {/* ═══════════════════════════════════════
              DISCUSSAO
              ═══════════════════════════════════════ */}
          <div id="discussao">
            <HeadlineSlide align="center" background="surface">
              <GSAPReveal>
                <Provocation>
                  {discussion.question}
                </Provocation>
                <p className="mt-6 max-w-[48ch] mx-auto text-sm leading-relaxed text-[var(--text-secondary)]">
                  {discussion.context}
                </p>
              </GSAPReveal>
            </HeadlineSlide>

            <DiscussionPrompt
              question={discussion.question}
              timerMinutes={discussion.timerMinutes}
            />
          </div>

          {/* ═══════════════════════════════════════
              FECHAMENTO — Typographic close
              ═══════════════════════════════════════ */}
          <HeroSection
            id="fechamento"
            align="left"
            overlay={false}
            backgroundElement={
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)]/40 via-[var(--bg)] to-[var(--bg)]" />
                <GrainOverlay opacity={0.02} />
              </>
            }
          >
            <Container size="wide">
              <div className="max-w-[700px]">
                <ScrollReveal direction="left" delay={0.3}>
                  <DisplayHeading>
                    {fechamento.headline}
                  </DisplayHeading>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <GSAPStaggerReveal className="mt-10 space-y-4 max-w-[52ch]">
                    {fechamento.insights.map((insight, i) => (
                      <p
                        key={i}
                        className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]"
                      >
                        {insight}
                      </p>
                    ))}
                  </GSAPStaggerReveal>
                </ScrollReveal>

                <ScrollReveal delay={0.9}>
                  <div className="mt-12 border-l-2 border-[var(--accent-primary)]/30 pl-6">
                    <p className="font-display text-xl font-light leading-[1.4] text-[var(--text)]">
                      {fechamento.provocation}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1.1}>
                  <div className="mt-12 h-px w-32 bg-gradient-to-r from-[var(--accent-primary)] to-transparent" />
                  <p className="mt-4 text-[0.6rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    CX Experience Lab
                  </p>
                </ScrollReveal>
              </div>
            </Container>
          </HeroSection>
        </PresentationShell>
      </WorkshopLayout>
    </div>
  );
}
