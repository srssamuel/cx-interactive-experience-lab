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
  ComparisonCard,
  Card,
} from "@/components/design-system";
import { ChapterNav } from "@/components/navigation/chapter-nav";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { WorkshopBlock } from "@/components/workshop/workshop-block";
import { ScrollReveal, ParallaxLayer } from "@/components/motion/scroll-reveal";
import { GSAPReveal, GSAPStaggerReveal, GSAPCounter } from "@/components/motion/gsap-reveal";
import { Tabs } from "@/components/interactive/tabs";
import { Timeline } from "@/components/interactive/timeline";
import { ComparisonSlider } from "@/components/interactive/comparison-slider";
import { PausePoint } from "@/components/workshop/discussion-prompt";
import { ImageHero, ImageSplit, FloatingImage } from "@/components/cinematic/image-section";
import { HeadlineSlide, DataSpectacle, ChapterTransition, GrainOverlay } from "@/components/cinematic/headline-slide";
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
  () => import("@/components/cinematic/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

export default function EquacaoInvisivel() {
  return (
    <WorkshopLayout discussions={workshopDiscussions}>
      <PresentationShell>
        <ChapterNav chapters={chapters} />
        <ModeIndicator />

        {/* ═══════════════════════════════════════════════════
            HERO — Cinematic image + particles + left-aligned
            ═══════════════════════════════════════════════════ */}
        <ImageHero
          src={hero.heroImage}
          alt="Jornada do cliente"
          overlay="amber"
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
                  <BodyText className="mt-5 max-w-[36ch]">{hero.subtext}</BodyText>
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

                <ScrollReveal delay={1.1}>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById("abertura")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-10 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/[0.08] px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--accent-primary)]/15"
                  >
                    {hero.cta} ↓
                  </motion.button>
                </ScrollReveal>
              </div>
            </Container>
          </div>
        </ImageHero>

        {/* ═══════════════════════════════════════════════════
            ABERTURA — Princípios como telas de palco
            ═══════════════════════════════════════════════════ */}
        <HeadlineSlide id="abertura" background="surface">
          <GSAPStaggerReveal staggerAmount={0.15}>
            {abertura.principios.map((p) => (
              <div key={p.number} className="mb-10 last:mb-0">
                <span className="font-mono text-xs font-bold text-[var(--accent-primary)]/30">{p.number}</span>
                <h2 className="mt-2 font-display text-[clamp(1.5rem,4vw,3rem)] font-light leading-[1.05] tracking-[-0.03em] text-[var(--text)]">
                  {p.statement}
                </h2>
                <p className="mt-2 max-w-[50ch] text-sm text-[var(--text-secondary)]">{p.detail}</p>
              </div>
            ))}
          </GSAPStaggerReveal>
        </HeadlineSlide>

        {/* ═══════════════════════════════════════════════════
            CAP 1 — A EQUAÇÃO
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="equacao" number="01" title="A Equação" subtitle="A ideia que muda tudo" />

        {/* 1.1 — Tese principal com equação visual */}
        <Section background="surface" variant="default">
          <Container size="wide">
            <SplitContent
              ratio="wide-left"
              left={
                <>
                  <GSAPReveal from={{ opacity: 0, x: -25 }} to={{ opacity: 1, x: 0, duration: 0.7 }}>
                    <Overline>{equation.overline}</Overline>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.9 }} start="top 80%">
                    <SectionHeading className="mt-4 max-w-[16ch]">{equation.headline}</SectionHeading>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.7 }} start="top 75%">
                    <BodyText className="mt-4 max-w-[40ch]">{equation.subtext}</BodyText>
                  </GSAPReveal>
                </>
              }
              right={
                <div className="flex flex-col items-center gap-4 pt-4">
                  <GSAPReveal from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }} start="top 75%">
                    <Card className="w-full text-center">
                      <SubHeading>{equation.parts[0].title}</SubHeading>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{equation.parts[0].description}</p>
                    </Card>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }} start="top 70%">
                    <span className="font-display text-3xl text-[var(--accent-primary)]/50">+</span>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }} start="top 70%">
                    <Card className="w-full text-center">
                      <SubHeading>{equation.parts[1].title}</SubHeading>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{equation.parts[1].description}</p>
                    </Card>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }} start="top 65%">
                    <span className="font-display text-3xl text-[var(--accent-primary)]/50">=</span>
                  </GSAPReveal>
                  <GSAPReveal from={{ opacity: 0, x: 30 }} to={{ opacity: 1, x: 0, duration: 0.7 }} start="top 65%">
                    <span className="font-display text-2xl tracking-tight text-[var(--accent-primary)]">{equation.conclusion}</span>
                  </GSAPReveal>
                </div>
              }
            />
          </Container>
        </Section>

        {/* 1.2 — Deep dive */}
        <Section variant="asymmetric" background="base">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <SubHeading className="max-w-[28ch]">{equation.deepDive.headline}</SubHeading>
            </GSAPReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {equation.deepDive.points.map((point, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.08 }}
                  start="top 80%"
                >
                  <div className="border-t border-[var(--accent-primary)]/15 pt-4">
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{point}</p>
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* 1.3 — Insight */}
        <Section variant="breathing" background="accent-muted">
          <Container size="default" align="left" className="md:pl-[12%]">
            <GSAPReveal from={{ opacity: 0, x: -40 }} to={{ opacity: 1, x: 0, duration: 1.4, ease: "power3.out" }}>
              <Provocation>{equation.insight}</Provocation>
            </GSAPReveal>
          </Container>
        </Section>

        {/* 1.4 — Workshop */}
        <Section variant="compact" background="base">
          <Container size="narrow">
            <WorkshopBlock
              type={equation.workshop.type}
              question={equation.workshop.question}
              context={equation.workshop.context}
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 2 — DESCONSTRUÇÃO (MITOS)
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition number="02" title="Desconstrução" subtitle="O que quase todo mundo entende errado" />

        {/* 2.0 — Section intro */}
        <Section id="mitos" variant="asymmetric">
          <Container>
            <div className="max-w-[500px]">
              <GSAPReveal from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0, duration: 0.6 }}>
                <Overline>{myths.overline}</Overline>
              </GSAPReveal>
              <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }} start="top 82%">
                <SectionHeading className="mt-3">{myths.headline}</SectionHeading>
              </GSAPReveal>
              <GSAPReveal from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.6 }} start="top 78%">
                <BodyText className="mt-3">{myths.subtext}</BodyText>
              </GSAPReveal>
            </div>
          </Container>
        </Section>

        {/* 2.1-2.5 — Each myth as split image section */}
        {myths.items.map((item, i) => (
          <ImageSplit
            key={i}
            src={item.image}
            alt={item.myth}
            imagePosition={i % 2 === 0 ? "right" : "left"}
            imageRatio="equal"
            className={i % 2 === 0 ? "bg-[var(--surface)]" : "bg-[var(--bg)]"}
          >
            <GSAPReveal from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-rose-400">
                Crença {String(i + 1).padStart(2, "0")}
              </span>
              <SectionHeading className="mt-3 max-w-[18ch]">&ldquo;{item.myth}&rdquo;</SectionHeading>
              <div className="mt-6 border-l-2 border-emerald-500/30 pl-5">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400">Verdade</span>
                <p className="mt-1 text-base font-medium text-[var(--text)]">{item.truth}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{item.detail}</p>
              <EvidenceBlock stat="" context={item.evidence} className="mt-4 border-l-[var(--accent-primary)]/20" />
            </GSAPReveal>
          </ImageSplit>
        ))}

        {/* ═══════════════════════════════════════════════════
            CAP 3 — AS 4 DIMENSÕES DO RESULTADO
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="dimensoes" number="03" title="As 4 Dimensões" subtitle="O resultado que o cliente realmente busca" />

        {/* 3.0 — Intro */}
        <HeadlineSlide background="surface">
          <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1 }}>
            <FullBleedText className="max-w-[18ch]">{dimensoes.headline}</FullBleedText>
            <BodyText className="mt-4 max-w-[44ch]">{dimensoes.subtext}</BodyText>
          </GSAPReveal>
        </HeadlineSlide>

        {/* 3.1-3.4 — Each dimension as a slide */}
        {dimensoes.items.map((dim, i) => (
          <ImageSplit
            key={dim.number}
            src={dim.image}
            alt={dim.title}
            imagePosition={i % 2 === 0 ? "left" : "right"}
            imageRatio="wide"
            className={i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--surface)]"}
          >
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
              <span className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-[var(--accent-primary)]/50">{dim.number}</span>
              <SectionHeading className="mt-2">{dim.title}</SectionHeading>
              <p className="mt-2 text-base font-medium italic text-[var(--accent-primary)]">{dim.question}</p>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{dim.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{dim.detail}</p>
            </GSAPReveal>
          </ImageSplit>
        ))}

        {/* 3.5 — Workshop */}
        <Section variant="compact" background="base">
          <Container size="narrow">
            <WorkshopBlock
              type={dimensoes.workshop.type}
              question={dimensoes.workshop.question}
              instructions={dimensoes.workshop.instructions}
              timerMinutes={dimensoes.workshop.timerMinutes}
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 4 — A FORMA (EXPERIÊNCIA APROPRIADA)
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="forma" number="04" title="A Forma" subtitle="Você resolve o problema. Mas da forma errada." />

        <Section background="surface" variant="default">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <Overline>{forma.overline}</Overline>
              <SectionHeading className="mt-3 max-w-[24ch]">{forma.headline}</SectionHeading>
              <BodyText className="mt-3 max-w-[48ch]">{forma.subtext}</BodyText>
            </GSAPReveal>

            <div className="mt-12">
              <Tabs
                variant="underline"
                tabs={forma.dimensions.map((dim, i) => ({
                  id: `forma-${i}`,
                  label: dim.title,
                  content: (
                    <div className="max-w-2xl py-2">
                      <p className="text-lg font-medium text-[var(--text)]">{dim.question}</p>
                      <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{dim.answer}</p>
                    </div>
                  ),
                }))}
              />
            </div>

            <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.6 }} start="top 72%">
              <PullQuote className="mt-10 max-w-3xl">{forma.insight}</PullQuote>
            </GSAPReveal>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 5 — O CUSTO DO SILÊNCIO
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="custosilencio" number="05" title="O Custo do Silêncio" subtitle="O cliente que não reclama é o mais perigoso" />

        {/* 5.1 — Big number moment */}
        <DataSpectacle accent>
          <div className="md:ml-[10%]">
            <GSAPReveal from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}>
              <GSAPCounter
                value={custoSilencio.bigNumber.value}
                suffix={custoSilencio.bigNumber.suffix}
                className="block font-mono text-[clamp(5rem,15vw,12rem)] font-bold leading-none tracking-tight text-[var(--accent-primary)]"
              />
              <p className="mt-4 max-w-[30ch] text-xl text-[var(--text-secondary)]">
                {custoSilencio.bigNumber.label}
              </p>
            </GSAPReveal>
          </div>
        </DataSpectacle>

        {/* 5.2 — Stats trio */}
        <Section variant="asymmetric" background="surface">
          <Container size="wide">
            <SectionHeading className="max-w-[22ch]">{custoSilencio.headline}</SectionHeading>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {custoSilencio.stats.map((stat, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0, duration: 0.6, delay: i * 0.1 }}
                  start="top 78%"
                >
                  <EvidenceBlock
                    stat={`${stat.value}${stat.suffix}`}
                    context={stat.label}
                    source={stat.context}
                  />
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5.3 — Insight */}
        <Section variant="breathing" background="accent-muted">
          <Container size="default" align="left" className="md:pl-[15%]">
            <GSAPReveal from={{ opacity: 0, x: -30 }} to={{ opacity: 1, x: 0, duration: 1.2 }}>
              <Provocation>{custoSilencio.pullQuote}</Provocation>
            </GSAPReveal>
          </Container>
        </Section>

        {/* 5.4 — Detail + Workshop */}
        <Section variant="compact" background="base">
          <Container>
            <SplitContent
              ratio="wide-left"
              left={
                <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
                  <BodyText>{custoSilencio.insight}</BodyText>
                </GSAPReveal>
              }
              right={
                <WorkshopBlock
                  type={custoSilencio.workshop.type}
                  question={custoSilencio.workshop.question}
                  context={custoSilencio.workshop.context}
                  timerMinutes={custoSilencio.workshop.timerMinutes}
                />
              }
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 6 — O MAPA DE CX
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="mapa" number="06" title="O Mapa" subtitle="CX não é departamento. É arquitetura." />

        <Section background="surface" variant="default">
          <Container size="wide">
            <GSAPReveal from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <Overline>{mapa.overline}</Overline>
              <SectionHeading className="mt-3 max-w-[22ch]">{mapa.headline}</SectionHeading>
              <BodyText className="mt-3 max-w-[48ch]">{mapa.subtext}</BodyText>
            </GSAPReveal>

            {/* Concentric layers visualization */}
            <div className="mt-14 grid gap-3 md:grid-cols-3">
              {mapa.layers.map((layer, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.06 }}
                  start="top 78%"
                >
                  <div className={`border-t-2 pt-4 ${
                    layer.position === "core" ? "border-[var(--accent-primary)]/40" :
                    layer.position === "outer" ? "border-[var(--accent-primary)]/30" :
                    "border-[var(--border)]"
                  }`}>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {layer.position === "core" ? "Fundação" : layer.position === "outer" ? "Resultado" : "Camada"}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-[var(--text)]">{layer.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{layer.description}</p>
                  </div>
                </GSAPReveal>
              ))}
            </div>

            <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.6 }} start="top 70%">
              <PullQuote className="mt-12 max-w-3xl">{mapa.insight}</PullQuote>
            </GSAPReveal>
          </Container>
        </Section>

        {/* Provocação */}
        <HeadlineSlide background="accent-muted">
          <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1.2 }}>
            <FullBleedText className="max-w-[16ch]">{mapa.provocacao}</FullBleedText>
          </GSAPReveal>
        </HeadlineSlide>

        {/* ═══════════════════════════════════════════════════
            CAP 7 — NA PRÁTICA
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="pratica" number="07" title="Na Prática" subtitle="A equação aplicada a cenários reais" />

        {/* 7.1 — Scenario contrast */}
        <Section background="surface" variant="default">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <Overline>{pratica.overline}</Overline>
              <SectionHeading className="mt-3 max-w-[24ch]">{pratica.headline}</SectionHeading>
            </GSAPReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <GSAPReveal from={{ opacity: 0, x: -25 }} to={{ opacity: 1, x: 0, duration: 0.7 }} start="top 78%">
                <ComparisonCard
                  label={pratica.scenarios.positive.label}
                  title={pratica.scenarios.positive.title}
                  description={pratica.scenarios.positive.description}
                  accent="positive"
                />
              </GSAPReveal>
              <GSAPReveal from={{ opacity: 0, x: 25 }} to={{ opacity: 1, x: 0, duration: 0.7 }} start="top 78%">
                <ComparisonCard
                  label={pratica.scenarios.negative.label}
                  title={pratica.scenarios.negative.title}
                  description={pratica.scenarios.negative.description}
                  accent="negative"
                />
              </GSAPReveal>
            </div>

            <GSAPReveal from={{ opacity: 0, y: 15 }} to={{ opacity: 1, y: 0, duration: 0.6 }} start="top 72%">
              <PullQuote className="mx-auto mt-10 max-w-3xl">{pratica.insight}</PullQuote>
            </GSAPReveal>
          </Container>
        </Section>

        {/* 7.2 — Analogias */}
        <Section variant="compact" background="base">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
              <SubHeading className="max-w-[30ch]">A equação se repete em qualquer contexto</SubHeading>
            </GSAPReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pratica.analogias.map((a, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.1 }}
                  start="top 80%"
                >
                  <ComparisonSlider
                    before={{
                      label: "Experiência inapropriada",
                      content: (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-[var(--text)]">{a.contexto}</p>
                          <p className="text-xs text-[var(--text-muted)]">{a.resultado}</p>
                          <p className="text-sm text-[var(--text-secondary)]">{a.experienciaB}</p>
                        </div>
                      ),
                    }}
                    after={{
                      label: "Experiência apropriada",
                      content: (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-[var(--text)]">{a.contexto}</p>
                          <p className="text-xs text-[var(--text-muted)]">{a.resultado}</p>
                          <p className="text-sm text-[var(--text-secondary)]">{a.experienciaA}</p>
                        </div>
                      ),
                    }}
                  />
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7.3 — Workshop */}
        <Section variant="compact" background="surface">
          <Container size="narrow">
            <WorkshopBlock
              type={pratica.workshop.type}
              question={pratica.workshop.question}
              context={pratica.workshop.context}
              timerMinutes={pratica.workshop.timerMinutes}
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 8 — MATURIDADE
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="maturidade" number="08" title="Maturidade" subtitle="De reativo a orquestrado" />

        <Section background="base" variant="default">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <Overline>{maturidade.overline}</Overline>
              <SectionHeading className="mt-3 max-w-[22ch]">{maturidade.headline}</SectionHeading>
            </GSAPReveal>

            <div className="mt-14">
              <Timeline
                items={maturidade.stages.map((s) => ({
                  id: s.id,
                  label: s.label,
                  title: s.title,
                  description: s.description,
                }))}
              />
            </div>
          </Container>
        </Section>

        {/* 8.2 — Detail per level */}
        {maturidade.stages.map((stage, i) => (
          <ImageSplit
            key={stage.id}
            src={stage.image}
            alt={stage.title}
            imagePosition={i % 2 === 0 ? "right" : "left"}
            imageRatio="narrow"
            className={i % 2 === 0 ? "bg-[var(--surface)]" : "bg-[var(--bg)]"}
          >
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.7 }}>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--accent-primary)]">{stage.label}</span>
              <SubHeading className="mt-2">{stage.title}</SubHeading>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{stage.description}</p>
              <ul className="mt-4 space-y-2">
                {stage.characteristics.map((c, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent-primary)]/40" />
                    {c}
                  </li>
                ))}
              </ul>
            </GSAPReveal>
          </ImageSplit>
        ))}

        {/* 8.3 — Workshop */}
        <Section variant="compact" background="base">
          <Container size="narrow">
            <WorkshopBlock
              type={maturidade.workshop.type}
              question={maturidade.workshop.question}
              instructions={maturidade.workshop.instructions}
              timerMinutes={maturidade.workshop.timerMinutes}
            />
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            CAP 9 — REFERÊNCIAS
            ═══════════════════════════════════════════════════ */}
        <ChapterTransition id="referencias" number="09" title="Referências" subtitle="Quem está fazendo diferente" />

        <Section background="surface" variant="default">
          <Container>
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <Overline>{referencias.overline}</Overline>
              <SectionHeading className="mt-3 max-w-[22ch]">{referencias.headline}</SectionHeading>
            </GSAPReveal>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {referencias.cases.map((c, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 25 }}
                  to={{ opacity: 1, y: 0, duration: 0.6, delay: i * 0.1 }}
                  start="top 78%"
                >
                  <div className="flex h-full flex-col">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">{c.sector}</span>
                    <h3 className="mt-2 text-base font-semibold text-[var(--text)]">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{c.insight}</p>
                    <EvidenceBlock
                      stat={`${c.metric.value}${c.metric.suffix}`}
                      context={c.metric.label}
                      className="mt-4"
                    />
                  </div>
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            WORKSHOP FINAL
            ═══════════════════════════════════════════════════ */}
        <PausePoint message="Workshop — Síntese e Compromissos" />

        <Section id="workshop" variant="default" background="base">
          <Container size="narrow">
            <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }}>
              <FullBleedText className="text-[clamp(1.8rem,4vw,3rem)]">{workshopFinal.synthesis.headline}</FullBleedText>
            </GSAPReveal>

            <div className="mt-10 space-y-6">
              {workshopFinal.synthesis.questions.map((q, i) => (
                <GSAPReveal
                  key={i}
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0, duration: 0.5, delay: i * 0.08 }}
                  start="top 82%"
                >
                  <WorkshopBlock
                    type={q.type}
                    question={q.question}
                    context={q.context}
                    instructions={"instructions" in q ? q.instructions : undefined}
                    timerMinutes={q.timerMinutes}
                  />
                </GSAPReveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═══════════════════════════════════════════════════
            FECHAMENTO — Cinematic close
            ═══════════════════════════════════════════════════ */}
        <ImageHero
          id="fechamento"
          src={fechamento.closingImage}
          alt="Reflexão final"
          overlay="dark"
          height="tall"
        >
          <Container size="wide">
            <ParallaxLayer speed={0.2}>
              <GSAPReveal from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0, duration: 1.2 }}>
                <FullBleedText className="max-w-[18ch]">{fechamento.headline}</FullBleedText>
              </GSAPReveal>
            </ParallaxLayer>
          </Container>
        </ImageHero>

        <Section variant="default" background="surface">
          <Container size="wide">
            <SplitContent
              ratio="wide-left"
              left={
                <GSAPStaggerReveal staggerAmount={0.07}>
                  {fechamento.insights.map((insight, i) => (
                    <div key={i} className="flex gap-4 border-b border-[var(--border)] py-4 last:border-0">
                      <span className="font-mono text-xs font-bold text-[var(--accent-primary)]/25">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{insight}</p>
                    </div>
                  ))}
                </GSAPStaggerReveal>
              }
              right={
                <GSAPReveal from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0, duration: 0.8 }} start="top 72%">
                  <div className="border-l-2 border-[var(--accent-primary)]/15 pl-6">
                    <BodyText className="font-display text-lg text-[var(--text)]">{fechamento.provocation}</BodyText>
                  </div>
                </GSAPReveal>
              }
            />
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
