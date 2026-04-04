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
  Card,
} from "@/components/design-system";
import { ChapterNav } from "@/components/navigation/chapter-nav";
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
import { Tabs } from "@/components/interactive/tabs";
// import { ComparisonSlider } from "@/components/interactive/comparison-slider";
import { ImageHero, ImageSplit } from "@/components/cinematic/image-section";
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
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () =>
    import("@/components/cinematic/particle-field").then(
      (mod) => mod.ParticleField
    ),
  { ssr: false }
);

const GlowingOrb = dynamic(
  () =>
    import("@/components/cinematic/glowing-orb").then(
      (mod) => mod.GlowingOrb
    ),
  { ssr: false }
);

export default function EquacaoInvisivel() {
  return (
    <WorkshopLayout discussions={workshopDiscussions}>
      <PresentationShell>
        <ChapterNav chapters={chapters} />
        <ModeIndicator />

        {/* ═══════════════════════════════════════════
            HERO — Cinematic entry
            ═══════════════════════════════════════════ */}
        <ImageHero
          src={hero.heroImage}
          alt="Jornada do cliente"
          overlay="cyan"
          height="full"
        >
          <div id="hero">
            <Container size="wide">
              <div className="max-w-[640px]">
                <ScrollReveal direction="left" delay={0.3}>
                  <Overline className="mb-5">{hero.overline}</Overline>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.5}>
                  <DisplayHeading>
                    {hero.headline}{" "}
                    <AccentText>{hero.headlineAccent}</AccentText>
                  </DisplayHeading>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.7}>
                  <BodyText className="mt-5 max-w-[34ch]">
                    {hero.subtext}
                  </BodyText>
                </ScrollReveal>

                <ScrollReveal delay={0.9}>
                  <div className="mt-8 flex items-center gap-10">
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
          </div>
        </ImageHero>

        {/* ═══════════════════════════════════════════
            ABERTURA — Three principles, one per screen
            ═══════════════════════════════════════════ */}
        <div id="abertura">
          {abertura.principios.map((p, i) => (
            <HeadlineSlide
              key={p.number}
              align="center"
              background={i === 1 ? "surface" : "base"}
            >
              <GSAPReveal>
                <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-[var(--accent-primary)]/[0.08]">
                  {p.number}
                </span>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-light tracking-[-0.03em] text-[var(--text)]">
                  {p.statement}
                </h2>
              </GSAPReveal>
            </HeadlineSlide>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            CAP 01 — A EQUAÇÃO
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="equacao"
          number="01"
          title={equation.headline}
        />

        {/* The equation visual */}
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
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-6 backdrop-blur-sm">
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
                  <div className="rounded-xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/[0.04] px-8 py-6 shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.08)]">
                    <span className="font-display text-xl font-light text-[var(--text)]">
                      {equation.conclusion}
                    </span>
                  </div>
                </div>
              </div>
            </GSAPReveal>
          </Container>
        </Section>

        {/* Equation insight */}
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

        {/* ═══════════════════════════════════════════
            CAP 02 — DESCONSTRUÇÃO
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="mitos"
          number="02"
          title={myths.headline}
        />

        {/* Each myth as an image split — alternating */}
        {myths.items.map((item, i) => (
          <section
            key={item.myth}
            className={i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--surface)]"}
          >
            <ImageSplit
              src={item.image}
              alt={item.myth}
              imagePosition={i % 2 === 0 ? "left" : "right"}
              imageRatio="wide"
            >
              <GSAPReveal>
                <span className="text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent-primary)]/60">
                  Mito {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-[clamp(1.3rem,3vw,2rem)] font-light tracking-[-0.02em] text-[var(--text)]">
                  &ldquo;{item.myth}&rdquo;
                </h3>
                <div className="mt-4 border-l-2 border-[var(--accent-primary)]/30 pl-4">
                  <p className="font-medium text-[var(--text)]">
                    {item.truth}
                  </p>
                </div>
                <p className="mt-4 text-sm text-[var(--text-muted)]">
                  {item.evidence}
                </p>
              </GSAPReveal>
            </ImageSplit>
          </section>
        ))}

        {/* ═══════════════════════════════════════════
            CAP 03 — AS 4 DIMENSÕES
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="dimensoes"
          number="03"
          title={dimensoes.headline}
        />

        {/* Dimension cards — 2x2 grid */}
        <Section variant="default">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {dimensoes.items.map((dim, i) => (
                <GSAPReveal key={dim.title}>
                  <div className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/30 p-8 transition-all duration-300 hover:border-[var(--accent-primary)]/15 hover:bg-[var(--surface)]/50">
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
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        <WorkshopBlock {...dimensoes.workshop} />

        {/* ═══════════════════════════════════════════
            CAP 04 — A FORMA
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="forma"
          number="04"
          title={forma.headline}
          subtitle={forma.subtitle}
        />

        {/* 6 vectors as tabs */}
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

        {/* Insight */}
        <HeadlineSlide align="center">
          <GSAPReveal>
            <Provocation>{forma.insight}</Provocation>
          </GSAPReveal>
        </HeadlineSlide>

        {/* ═══════════════════════════════════════════
            CAP 05 — O CUSTO DO SILÊNCIO
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="custosilencio"
          number="05"
          title={custoSilencio.headline}
        />

        {/* Big number moment */}
        <DataSpectacle accent>
          <div className="flex flex-col items-center text-center">
            <GSAPReveal>
              <div className="relative">
                <span className="font-mono text-[clamp(4rem,12vw,10rem)] font-bold leading-none text-[var(--accent-primary)]">
                  <GSAPCounter value={custoSilencio.bigNumber.value} />
                  {custoSilencio.bigNumber.suffix}
                </span>
                {/* Glow behind number */}
                <div className="absolute inset-0 -z-10 blur-3xl bg-[var(--accent-primary)]/10 rounded-full scale-150" />
              </div>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                {custoSilencio.bigNumber.label}
              </p>
            </GSAPReveal>
          </div>
        </DataSpectacle>

        {/* Supporting stats */}
        <Section background="surface">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {custoSilencio.stats.map((stat, i) => (
                <GSAPReveal key={stat.label}>
                  <div className="text-center">
                    <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--accent-primary)]">
                      <GSAPCounter
                        value={stat.value}
                      />
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

        {/* Pull quote */}
        <HeadlineSlide align="center" background="base">
          <GSAPReveal>
            <FullBleedText>
              {custoSilencio.pullQuote}
            </FullBleedText>
          </GSAPReveal>
        </HeadlineSlide>

        <WorkshopBlock {...custoSilencio.workshop} />

        {/* ═══════════════════════════════════════════
            CAP 06 — O MAPA
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="mapa"
          number="06"
          title={mapa.headline}
        />

        {/* Concentric layers visualization */}
        <Section variant="default" className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-primary-rgb),0.04)_0%,transparent_50%)]" />
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

        {/* Insight + provocação */}
        <HeadlineSlide background="surface">
          <GSAPReveal>
            <Provocation>{mapa.insight}</Provocation>
            <p className="mt-6 font-display text-xl font-light text-[var(--accent-primary)]">
              {mapa.provocacao}
            </p>
          </GSAPReveal>
        </HeadlineSlide>

        {/* ═══════════════════════════════════════════
            CAP 07 — NA PRÁTICA
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="pratica"
          number="07"
          title={pratica.headline}
        />

        {/* Scenario comparison */}
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

        {/* Insight */}
        <HeadlineSlide align="center" background="surface">
          <GSAPReveal>
            <SectionHeading>
              {pratica.insight}
            </SectionHeading>
          </GSAPReveal>
        </HeadlineSlide>

        {/* Analogies */}
        <Section variant="default">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {pratica.analogias.map((a, i) => (
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

        {/* ═══════════════════════════════════════════
            CAP 08 — MATURIDADE
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="maturidade"
          number="08"
          title={maturidade.headline}
        />

        {/* Maturity levels as progressive reveal */}
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
                    {/* Progress line */}
                    {i < maturidade.stages.length - 1 && (
                      <div className="absolute bottom-0 left-[3.25rem] h-6 w-px -mb-6 bg-[var(--border)]" />
                    )}
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        <WorkshopBlock {...maturidade.workshop} />

        {/* ═══════════════════════════════════════════
            CAP 09 — REFERÊNCIAS
            ═══════════════════════════════════════════ */}
        <ChapterTransition
          id="referencias"
          number="09"
          title={referencias.headline}
        />

        <Section background="surface">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {referencias.cases.map((c, i) => (
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
            ═══════════════════════════════════════════ */}
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
            FECHAMENTO — Cinematic close
            ═══════════════════════════════════════════ */}
        <ImageHero
          id="fechamento"
          src={fechamento.closingImage}
          alt="Fechamento"
          overlay="cyan"
          height="full"
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
                  CX Experience Lab — Diretoria de Qualidade e Dados
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </ImageHero>
      </PresentationShell>
    </WorkshopLayout>
  );
}
