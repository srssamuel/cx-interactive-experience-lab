"use client";

import {
  DisplayHeading,
  SectionHeading,
  BodyText,
  Overline,
  Provocation,
  AccentText,
  PullQuote,
  FullBleedText,
  EvidenceBlock,
  Section,
  Container,
  HeroSection,
  Card,
} from "@/components/design-system";
import { KeyboardHUD } from "@/components/navigation/keyboard-hud";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GSAPReveal,
  GSAPStaggerReveal,
  GSAPCounter,
} from "@/components/motion/gsap-reveal";
import { TextReveal, BlurReveal } from "@/components/motion/text-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { SpotlightCard } from "@/components/interactive/spotlight-card";
import {
  HeadlineSlide,
  DataSpectacle,
  ChapterTransition,
  GrainOverlay,
} from "@/components/cinematic/headline-slide";
import {
  chapters,
  hero,
  abertura,
  equation,
  myths,
  dimensoes,
  forma,
  custoSilencio,
  mapa,
  pratica,
  maturidade,
  referencias,
  workshopDiscussions,
  workshopFinal,
  fechamento,
} from "./content";
import { motion } from "framer-motion";

export default function EquacaoInvisivel() {
  return (
    <div className="theme-cx">
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <KeyboardHUD chapters={chapters} title="A Equacao Invisivel" />
          <ModeIndicator />

          {/* ═══════════════════════════════════════════
              HERO — Typographic. No image. No particles.
              ═══════════════════════════════════════════ */}
          <HeroSection
            id="hero"
            align="left"
            overlay={false}
            backgroundElement={
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--surface)]/40" />
                <GrainOverlay opacity={0.02} />
              </>
            }
          >
            <Container size="wide">
              <div className="max-w-[720px]">
                <ScrollReveal direction="left" delay={0.3}>
                  <Overline className="mb-6">{hero.overline}</Overline>
                </ScrollReveal>

                <TextReveal
                  text={hero.headline}
                  tag="h1"
                  trigger="mount"
                  delay={0.5}
                  stagger={0.03}
                  className="font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--text)]"
                />
                <ScrollReveal direction="left" delay={0.9}>
                  <span className="mt-2 block font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.88] tracking-[-0.04em] text-[var(--accent-primary)]">
                    {hero.headlineAccent}
                  </span>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={1.1}>
                  <BodyText className="mt-8 max-w-[38ch]">
                    {hero.subtext}
                  </BodyText>
                </ScrollReveal>

                <ScrollReveal delay={1.3}>
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

          {/* ═══════════════════════════════════════════
              ABERTURA — Three principles
              ══════════════════════════════���════════════ */}
          <div id="abertura">
            {abertura.principios.map((p, i) => (
              <HeadlineSlide
                key={p.number}
                align="center"
                background={i === 1 ? "surface" : "base"}
              >
                <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-[var(--accent-primary)]/[0.08]">
                  {p.number}
                </span>
                <div className="mt-4">
                  <TextReveal
                    text={p.statement}
                    tag="h2"
                    className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-light tracking-[-0.03em] text-[var(--text)]"
                  />
                </div>
              </HeadlineSlide>
            ))}
          </div>

          {/* ═══════════════════════════════════════════
              CAP 01 — A EQUACAO
              ═══════════════════════════════════════════ */}
          <ChapterTransition
            id="equacao"
            number="01"
            title={equation.headline}
          />

          <Section variant="breathing" className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.03)_0%,transparent_60%)]" />
            <Container size="default">
              <GSAPReveal>
                <div className="flex flex-col items-center text-center">
                  <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                    {equation.parts.map((part, i) => (
                      <div key={part.title} className="flex items-center gap-4 md:gap-8">
                        {i > 0 && (
                          <span className="font-mono text-3xl font-bold text-[var(--accent-primary)]">
                            +
                          </span>
                        )}
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-6">
                          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                            {part.title}
                          </span>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {part.short}
                          </p>
                        </div>
                      </div>
                    ))}
                    <span className="font-mono text-3xl font-bold text-[var(--accent-primary)]">
                      =
                    </span>
                    <div className="rounded-xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.04] px-8 py-6">
                      <span className="font-display text-xl font-light text-[var(--text)]">
                        {equation.conclusion}
                      </span>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            </Container>
          </Section>

          <HeadlineSlide background="surface">
            <GSAPReveal>
              <Provocation>{equation.insight}</Provocation>
              <GSAPStaggerReveal className="mt-8 space-y-4 max-w-[52ch]">
                {equation.deepPoints.map((point, i) => (
                  <p
                    key={i}
                    className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]"
                  >
                    {point}
                  </p>
                ))}
              </GSAPStaggerReveal>
            </GSAPReveal>
          </HeadlineSlide>

          <WorkshopBlock {...equation.workshop} />

          {/* ═���═════════════════════════════════════════
              CAP 02 — DESCONSTRUCAO
              ══════════════��════════════════════════════ */}
          <ChapterTransition
            id="mitos"
            number="02"
            title={myths.headline}
          />

          {/* Each myth as a card with evidence */}
          <Section variant="default">
            <Container>
              <div className="space-y-6">
                {myths.items.map((item, i) => (
                  <GSAPReveal key={item.myth}>
                    <div className={`rounded-xl border p-8 ${
                      i % 2 === 0
                        ? "border-[var(--border)] bg-[var(--surface)]/20"
                        : "border-[var(--border)] bg-[var(--bg)]"
                    }`}>
                      <div className="flex items-start gap-6">
                        <span className="font-mono text-[0.65rem] font-medium text-[var(--text-muted)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-light text-[var(--text)]">
                            &ldquo;{item.myth}&rdquo;
                          </h3>
                          <div className="mt-4 border-l-2 border-[var(--accent-primary)]/30 pl-4">
                            <p className="font-medium text-[var(--text)]">
                              {item.truth}
                            </p>
                          </div>
                          <p className="mt-3 text-sm text-[var(--text-muted)]">
                            {item.evidence}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════
              CAP 03 — AS 4 DIMENSOES
              ═══��══════════════════════════════════��════ */}
          <ChapterTransition
            id="dimensoes"
            number="03"
            title={dimensoes.headline}
          />

          <Section variant="default">
            <Container>
              <div className="grid gap-6 md:grid-cols-2">
                {dimensoes.items.map((dim) => (
                  <GSAPReveal key={dim.title}>
                    <SpotlightCard className="h-full">
                      <div className="relative p-8">
                        <div className="absolute -right-4 -top-4 font-mono text-[5rem] font-bold leading-none text-[var(--accent-primary)]/[0.04]">
                          {dim.number}
                        </div>
                        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]">
                          {dim.short}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-light text-[var(--text)]">
                          {dim.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {dim.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <WorkshopBlock {...dimensoes.workshop} />

          {/* ���══════════════════════════════════════════
              CAP 04 — A FORMA
              ═══════════════════════��═══════════════════ */}
          <ChapterTransition
            id="forma"
            number="04"
            title={forma.headline}
            subtitle={forma.subtitle}
          />

          <Section background="surface">
            <Container>
              <Tabs
                variant="underline"
                tabs={forma.dimensions.map((d, i) => ({
                  id: `forma-${i}`,
                  label: d.title,
                  content: (
                    <div className="py-6">
                      <h3 className="font-display text-xl font-light text-[var(--accent-primary)]">
                        {d.question}
                      </h3>
                      <p className="mt-3 max-w-[48ch] text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                        {d.answer}
                      </p>
                    </div>
                  ),
                }))}
              />
            </Container>
          </Section>

          <HeadlineSlide align="center">
            <GSAPReveal>
              <Provocation>{forma.insight}</Provocation>
            </GSAPReveal>
          </HeadlineSlide>

          {/* ��══════════════════════════════════════════
              CAP 05 — O CUSTO DO SILENCIO
              ═════════���═════════════════════════���═══════ */}
          <ChapterTransition
            id="custosilencio"
            number="05"
            title={custoSilencio.headline}
          />

          <DataSpectacle accent>
            <div className="flex flex-col items-center text-center">
              <GSAPReveal>
                <span className="font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none text-[var(--accent-primary)]">
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
                {custoSilencio.stats.map((stat) => (
                  <GSAPReveal key={stat.label}>
                    <div className="text-center">
                      <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--accent-primary)]">
                        <GSAPCounter value={stat.value} />
                        {stat.suffix}
                      </span>
                      <p className="mt-1 text-sm font-medium text-[var(--text)]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-xs text-[var(--text-muted)]">
                        {stat.context}
                      </p>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <HeadlineSlide align="center" background="base">
            <BlurReveal>
              <FullBleedText>
                {custoSilencio.pullQuote}
              </FullBleedText>
            </BlurReveal>
          </HeadlineSlide>

          <WorkshopBlock {...custoSilencio.workshop} />

          {/* ═══════════════════════════════════════════
              CAP 06 — O MAPA
              ═════════════���═════════════════════════════ */}
          <ChapterTransition
            id="mapa"
            number="06"
            title={mapa.headline}
          />

          <Section variant="default" className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.03)_0%,transparent_50%)]" />
            <Container>
              <GSAPStaggerReveal className="space-y-3">
                {mapa.layers.map((layer, i) => {
                  const widths = ["max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl"];
                  const isCore = layer.position === "core";
                  const isOuter = layer.position === "outer";
                  return (
                    <div
                      key={layer.title}
                      className={`mx-auto rounded-lg border px-6 py-4 text-center transition-all duration-300 ${widths[i]} ${
                        isCore
                          ? "border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.06]"
                          : isOuter
                          ? "border-[var(--accent-primary)]/10 bg-[var(--surface)]/20"
                          : "border-[var(--border)] bg-[var(--surface)]/30"
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                        {layer.title}
                      </span>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        {layer.description}
                      </p>
                    </div>
                  );
                })}
              </GSAPStaggerReveal>
            </Container>
          </Section>

          <HeadlineSlide background="surface">
            <GSAPReveal>
              <Provocation>{mapa.insight}</Provocation>
              <p className="mt-6 font-display text-xl font-light text-[var(--accent-primary)]">
                {mapa.provocacao}
              </p>
            </GSAPReveal>
          </HeadlineSlide>

          {/* ═══════════════════════════════════════════
              CAP 07 — NA PRATICA
              ════���════════════════���═════════════════════ */}
          <ChapterTransition
            id="pratica"
            number="07"
            title={pratica.headline}
          />

          <Section>
            <Container>
              <div className="grid gap-6 md:grid-cols-2">
                <GSAPReveal>
                  <div className="h-full rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-emerald-400">
                      {pratica.scenarios.positive.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-light text-[var(--text)]">
                      {pratica.scenarios.positive.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pratica.scenarios.positive.description}
                    </p>
                  </div>
                </GSAPReveal>
                <GSAPReveal>
                  <div className="h-full rounded-xl border border-red-500/20 bg-red-500/[0.03] p-8">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-red-400">
                      {pratica.scenarios.negative.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-light text-[var(--text)]">
                      {pratica.scenarios.negative.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pratica.scenarios.negative.description}
                    </p>
                  </div>
                </GSAPReveal>
              </div>
            </Container>
          </Section>

          <HeadlineSlide align="center" background="surface">
            <GSAPReveal>
              <SectionHeading>{pratica.insight}</SectionHeading>
            </GSAPReveal>
          </HeadlineSlide>

          <Section variant="default">
            <Container>
              <div className="grid gap-8 md:grid-cols-2">
                {pratica.analogias.map((a) => (
                  <GSAPReveal key={a.contexto}>
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/20 p-8">
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                        {a.contexto}
                      </span>
                      <p className="mt-2 text-sm text-[var(--text-muted)]">
                        {a.resultado}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="border-l-2 border-emerald-500/30 pl-3">
                          <span className="text-[0.5rem] uppercase tracking-wider text-emerald-400">
                            Volta
                          </span>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {a.experienciaA}
                          </p>
                        </div>
                        <div className="border-l-2 border-red-500/30 pl-3">
                          <span className="text-[0.5rem] uppercase tracking-wider text-red-400">
                            Nunca mais
                          </span>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {a.experienciaB}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <WorkshopBlock {...pratica.workshop} />

          {/* ═════��══════════════════���══════════════════
              CAP 08 — MATURIDADE
              ═══════════════════════════════════════════ */}
          <ChapterTransition
            id="maturidade"
            number="08"
            title={maturidade.headline}
          />

          <Section variant="default">
            <Container>
              <div className="space-y-6">
                {maturidade.stages.map((stage, i) => (
                  <GSAPReveal key={stage.id}>
                    <div
                      className={`group relative overflow-hidden rounded-xl border p-8 transition-all duration-300 ${
                        i === maturidade.stages.length - 1
                          ? "border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.03]"
                          : "border-[var(--border)] bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40"
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.05]">
                          <span className="font-mono text-lg font-bold text-[var(--accent-primary)]">
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-xl font-light text-[var(--text)]">
                              {stage.title}
                            </h3>
                            <span className="text-[0.5rem] uppercase tracking-wider text-[var(--text-muted)]">
                              {stage.label}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">
                            {stage.short}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {stage.characteristics.map((c) => (
                              <span
                                key={c}
                                className="rounded-md bg-[var(--bg)]/50 px-2.5 py-1 text-[0.65rem] text-[var(--text-muted)]"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          <WorkshopBlock {...maturidade.workshop} />

          {/* ═══════════════════════════════════════════
              CAP 09 — REFERENCIAS
              ══════════════════════════���════════════════ */}
          <ChapterTransition
            id="referencias"
            number="09"
            title={referencias.headline}
          />

          <Section background="surface">
            <Container>
              <div className="grid gap-8 md:grid-cols-3">
                {referencias.cases.map((c) => (
                  <GSAPReveal key={c.title}>
                    <div className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 p-8">
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]/60">
                        {c.sector}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-light text-[var(--text)]">
                        {c.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {c.insight}
                      </p>
                      <div className="mt-6 border-t border-[var(--border)] pt-4">
                        <span className="font-mono text-2xl font-bold text-[var(--accent-primary)]">
                          {c.metric.value}
                          {c.metric.suffix}
                        </span>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          {c.metric.label}
                        </p>
                      </div>
                    </div>
                  </GSAPReveal>
                ))}
              </div>
            </Container>
          </Section>

          {/* ═══════════════════════════════════════════
              WORKSHOP FINAL
              ═══════════════════════════��═══════════════ */}
          <div id="workshop">
            <HeadlineSlide align="center" background="surface">
              <GSAPReveal>
                <SectionHeading>
                  {workshopFinal.synthesis.headline}
                </SectionHeading>
              </GSAPReveal>
            </HeadlineSlide>

            {workshopFinal.synthesis.questions.map((q, i) => (
              <WorkshopBlock
                key={i}
                type={q.type}
                question={q.question}
                context={q.context}
                instructions={"instructions" in q ? q.instructions : undefined}
                timerMinutes={q.timerMinutes}
              />
            ))}
          </div>

          {/* ═══════════════════════════════════════════
              FECHAMENTO — Typographic close
              ═══════════════════════════════════════════ */}
          <HeroSection
            id="fechamento"
            align="left"
            overlay={false}
            backgroundElement={
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)]/60 via-[var(--bg)] to-[var(--bg)]" />
                <GrainOverlay opacity={0.02} />
              </>
            }
          >
            <Container size="wide">
              <div className="max-w-[700px]">
                <ScrollReveal direction="left" delay={0.3}>
                  <DisplayHeading>
                    {fechamento.headline}{" "}
                    <AccentText>{fechamento.headlineAccent}</AccentText>
                  </DisplayHeading>
                </ScrollReveal>

                <ScrollReveal delay={0.7}>
                  <p className="mt-8 max-w-[44ch] font-display text-xl font-light leading-relaxed text-[var(--text-secondary)]">
                    {fechamento.provocation}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={1}>
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
