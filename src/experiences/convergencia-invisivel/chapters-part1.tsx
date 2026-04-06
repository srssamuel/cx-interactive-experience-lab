'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { DisplayHeading, SectionHeading, SubHeading, Body, Overline, StatNumber } from '@/components/design-system/typography'
import { Card } from '@/components/design-system/card'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/stagger-group'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { DiscussionPrompt } from '@/components/workshop/discussion-prompt'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════
   Chapter 1 — Abertura
   Full viewport cinematic. Giant stat, headline, body.
   ═══════════════════════════════════════════════════ */

export function Abertura() {
  return (
    <Section id="abertura" bg="primary" fullHeight>
      <AmbientBackground variant="spotlight" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <StatNumber className="block text-[clamp(4rem,12vw,10rem)]">
            {content.abertura.stat}
          </StatNumber>
        </motion.div>

        <motion.p
          className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.abertura.statLabel}
        </motion.p>

        <motion.div
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <DisplayHeading className="text-[clamp(1.5rem,4vw,3rem)]">
            {content.abertura.headline}
          </DisplayHeading>
        </motion.div>

        <motion.div
          className="mt-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Body className="text-lg">{content.abertura.body}</Body>
        </motion.div>

        <motion.p
          className="mt-12 font-display text-lg italic text-[var(--accent-amber)] max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {content.abertura.provocation}
        </motion.p>
      </div>
    </Section>
  )
}

export { Abertura as ChapterAbertura }

/* ═══════════════════════════════════════════════════
   Chapter 2 — O Mundo Mudou
   Three stat cards in staggered grid with varying spans.
   ═══════════════════════════════════════════════════ */

export function ContextoMundoMudou() {
  return (
    <Section id="contexto-o-mundo-mudou" bg="gradient-down">
      <CinematicHeadline
        overline="Contexto"
        headline={content.contextoMundoMudou.headline}
        align="left"
        size="display"
      />

      <StaggerGroup
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        staggerDelay={0.12}
      >
        {content.contextoMundoMudou.points.map((point, i) => (
          <StaggerItem
            key={point.stat}
            className={cn(
              i === 0 && 'md:col-span-2',
              i === 1 && 'md:col-span-1',
              i === 2 && 'md:col-span-3'
            )}
          >
            <Card
              variant={i === 2 ? 'accent' : 'default'}
              hover
              className={cn(
                'h-full',
                i === 2 && 'md:flex md:items-center md:gap-12'
              )}
            >
              <StatNumber className="block text-[clamp(2.5rem,6vw,4.5rem)]">
                {point.stat}
              </StatNumber>
              <div className={cn(i === 2 ? 'mt-0' : 'mt-4')}>
                <Body className="text-[var(--text-primary)] font-medium">
                  {point.text}
                </Body>
                <span className="mt-2 block font-mono text-xs text-[var(--text-muted)]">
                  {point.source}
                </span>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.6} className="mt-12">
        <Body className="max-w-2xl text-lg text-[var(--text-primary)] font-medium">
          {content.contextoMundoMudou.closing}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { ContextoMundoMudou as ChapterContextoMundoMudou }

/* ═══════════════════════════════════════════════════
   Chapter 3 — A Ilusao Digital
   Split layout: left contrast cards, right stat.
   ═══════════════════════════════════════════════════ */

export function ContextoIlusao() {
  return (
    <Section id="contexto-ilusao-digital" bg="surface">
      <CinematicHeadline
        overline="Contexto"
        headline={content.contextoIlusao.headline}
        align="left"
        size="display"
      />

      <ScrollReveal className="mt-8 max-w-3xl">
        <Body className="text-lg">{content.contextoIlusao.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-6">
          <ScrollReveal delay={0.1}>
            <Card variant="bordered" hover={false}>
              <Overline className="text-[var(--text-muted)] mb-3 block">
                O que as empresas mediram
              </Overline>
              <Body className="text-[var(--text-primary)]">
                {content.contextoIlusao.contrast.before}
              </Body>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Card variant="highlight" accentColor="amber" hover={false}>
              <Overline className="text-[var(--accent-amber)] mb-3 block">
                O que deveriam ter medido
              </Overline>
              <Body className="text-[var(--text-primary)] font-medium">
                {content.contextoIlusao.contrast.after}
              </Body>
            </Card>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <ScrollReveal delay={0.4}>
            <Card variant="stat" accentColor="amber" className="text-center">
              <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">
                {content.contextoIlusao.stat}
              </StatNumber>
              <Body className="mt-4 text-sm text-[var(--text-secondary)]">
                {content.contextoIlusao.statContext}
              </Body>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { ContextoIlusao as ChapterContextoIlusao }

/* ═══════════════════════════════════════════════════
   Chapter 4 — CX: A Equacao Invisivel
   Three pillars in bordered cards with amber accent.
   ═══════════════════════════════════════════════════ */

export function CxEquacao() {
  return (
    <Section id="cx-equacao-invisivel" bg="amber-glow">
      <CinematicHeadline
        overline="Customer Experience"
        headline={content.cxEquacao.headline}
        align="center"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl mx-auto text-center">
        <Body className="text-lg">{content.cxEquacao.body}</Body>
      </ScrollReveal>

      <StaggerGroup
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        staggerDelay={0.1}
        baseDelay={0.2}
      >
        {content.cxEquacao.pillars.map((pillar, i) => (
          <StaggerItem key={pillar.title}>
            <Card
              variant="bordered"
              className={cn(
                'h-full relative overflow-hidden',
                'border-[var(--accent-amber)]/20'
              )}
            >
              <span className="absolute top-4 right-4 font-mono text-xs text-[var(--accent-amber)]/50">
                0{i + 1}
              </span>
              <SubHeading className="text-[var(--accent-amber)]">
                {pillar.title}
              </SubHeading>
              <Body className="mt-4">{pillar.desc}</Body>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  )
}

export { CxEquacao as ChapterCxEquacao }

/* ═══════════════════════════════════════════════════
   Chapter 5 — Experiencia vs Percepcao
   Asymmetric two-column: wider left (text + insight), right (stat).
   ═══════════════════════════════════════════════════ */

export function CxExperiencia() {
  return (
    <Section id="cx-experiencia-vs-percepcao" bg="elevated">
      <CinematicHeadline
        overline="Customer Experience"
        headline={content.cxExperiencia.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-12 items-center">
        <div className="lg:col-span-4 space-y-8">
          <ScrollReveal>
            <Body className="text-lg leading-relaxed">
              {content.cxExperiencia.body}
            </Body>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card variant="highlight" accentColor="green" hover={false}>
              <Overline className="text-[var(--accent-green)] mb-2 block">
                Insight
              </Overline>
              <Body className="text-[var(--text-primary)] font-medium">
                {content.cxExperiencia.insight}
              </Body>
            </Card>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-3 flex flex-col items-center justify-center">
          <ScrollReveal delay={0.3} direction="right">
            <div className="text-center">
              <StatNumber className="block text-[clamp(3.5rem,10vw,6rem)]">
                {content.cxExperiencia.stat}
              </StatNumber>
              <Body className="mt-4 text-sm max-w-xs mx-auto">
                {content.cxExperiencia.statContext}
              </Body>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { CxExperiencia as ChapterCxExperiencia }

/* ═══════════════════════════════════════════════════
   Chapter 6 — O Custo do Atrito
   Four stats in 2x2 grid with AnimatedCounter.
   ═══════════════════════════════════════════════════ */

export function CxCusto() {
  return (
    <Section id="cx-custo-do-atrito" bg="gradient-up">
      <CinematicHeadline
        overline="Customer Experience"
        headline={content.cxCusto.headline}
        align="center"
        size="display"
      />

      <StaggerGroup
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        staggerDelay={0.15}
        baseDelay={0.2}
      >
        {content.cxCusto.stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <Card variant="stat" accentColor="amber" className="h-full">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                className="block text-[var(--accent-amber)] text-[clamp(2.5rem,6vw,4rem)] leading-none"
              />
              <Body className="mt-4 text-sm">{stat.label}</Body>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.6} className="mt-8 text-center">
        <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.1em]">
          {content.cxCusto.source}
        </span>
      </ScrollReveal>

      <ScrollReveal delay={0.8} className="mt-12 max-w-2xl mx-auto text-center">
        <Body className="text-lg text-[var(--text-primary)] font-medium italic">
          {content.cxCusto.closing}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { CxCusto as ChapterCxCusto }

/* ═══════════════════════════════════════════════════
   Chapter 7 — Momento de Reflexao
   Staircase cards + DiscussionPrompt.
   ═══════════════════════════════════════════════════ */

export function CxReflexao() {
  const marginSteps = ['ml-0', 'ml-6 md:ml-12', 'ml-12 md:ml-24', 'ml-18 md:ml-36']

  return (
    <Section id="cx-momento-reflexao" bg="vignette">
      <CinematicHeadline
        overline="Reflexao"
        headline={content.cxReflexao.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 space-y-4">
        {content.cxReflexao.levels.map((lvl, i) => (
          <ScrollReveal key={lvl.level} delay={i * 0.12}>
            <div className={cn(marginSteps[i], 'max-w-2xl')}>
              <Card
                variant="minimal"
                hover={false}
                className={cn(
                  'flex items-start gap-6 border-l-2 pl-6 rounded-none',
                  i === 3
                    ? 'border-l-[var(--accent-amber)] bg-[var(--accent-amber-soft)]'
                    : 'border-l-[var(--border-default)]'
                )}
              >
                <span
                  className={cn(
                    'shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold',
                    i === 3
                      ? 'bg-[var(--accent-amber)] text-[var(--bg-primary)]'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)]'
                  )}
                >
                  {lvl.level}
                </span>
                <div>
                  <SubHeading
                    as="h3"
                    className={cn(
                      'text-lg',
                      i === 3 && 'text-[var(--accent-amber)]'
                    )}
                  >
                    {lvl.name}
                  </SubHeading>
                  <Body className="mt-1 text-sm">{lvl.desc}</Body>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.6} className="mt-16">
        <DiscussionPrompt
          question={content.cxReflexao.provocation}
          context="Considere nao onde voce gostaria de estar — mas onde os dados realmente colocam sua operacao hoje."
        />
      </ScrollReveal>
    </Section>
  )
}

export { CxReflexao as ChapterCxReflexao }

/* ═══════════════════════════════════════════════════
   Chapter 8 — O Paradoxo da Retencao
   Three stat cards at top, body below, insight highlight.
   ═══════════════════════════════════════════════════ */

export function CsParadoxo() {
  return (
    <Section id="cs-paradoxo-retencao" bg="surface">
      <CinematicHeadline
        overline="Customer Success"
        headline={content.csParadoxo.headline}
        align="left"
        size="display"
      />

      <StaggerGroup
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        staggerDelay={0.1}
      >
        {content.csParadoxo.stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <Card variant="stat" accentColor="green" className="h-full">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="block text-[var(--accent-green)] text-[clamp(2rem,5vw,3.5rem)] leading-none"
              />
              <Body className="mt-3 text-sm font-medium">{stat.label}</Body>
              <span className="mt-1 block font-mono text-[0.65rem] text-[var(--text-muted)]">
                {stat.source}
              </span>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.3} className="mt-12 max-w-3xl">
        <Body className="text-lg leading-relaxed">{content.csParadoxo.body}</Body>
      </ScrollReveal>

      <ScrollReveal delay={0.5} className="mt-8 max-w-3xl">
        <Card variant="highlight" accentColor="green" hover={false}>
          <Overline className="text-[var(--accent-green)] mb-2 block">
            O paradoxo
          </Overline>
          <Body className="text-[var(--text-primary)] font-medium">
            {content.csParadoxo.insight}
          </Body>
        </Card>
      </ScrollReveal>
    </Section>
  )
}

export { CsParadoxo as ChapterCsParadoxo }

/* ═══════════════════════════════════════════════════
   Chapter 9 — Metricas que Mentem
   Three vertical metric cards + alternative accent card.
   ═══════════════════════════════════════════════════ */

export function CsMetricas() {
  return (
    <Section id="cs-metricas-que-mentem" bg="primary">
      <CinematicHeadline
        overline="Customer Success"
        headline={content.csMetricas.headline}
        align="center"
        size="display"
      />

      <StaggerGroup
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        staggerDelay={0.12}
        baseDelay={0.15}
      >
        {content.csMetricas.metrics.map((metric) => (
          <StaggerItem key={metric.name}>
            <Card variant="bordered" className="h-full flex flex-col">
              <div className="mb-6">
                <span className="font-display text-3xl md:text-4xl text-[var(--text-primary)]">
                  {metric.name}
                </span>
              </div>
              <div className="flex-1 border-t border-[var(--border-subtle)] pt-6">
                <Overline className="text-[var(--text-muted)] mb-2 block">
                  A realidade
                </Overline>
                <Body className="text-sm leading-relaxed">
                  {metric.reality}
                </Body>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.5} className="mt-12 max-w-2xl mx-auto">
        <Card variant="accent" accentColor="green" hover={false}>
          <Overline className="text-[var(--accent-green)] mb-2 block">
            Alternativa
          </Overline>
          <Body className="text-[var(--text-primary)] font-medium">
            {content.csMetricas.alternative}
          </Body>
        </Card>
      </ScrollReveal>
    </Section>
  )
}

export { CsMetricas as ChapterCsMetricas }

/* ═══════════════════════════════════════════════════
   Chapter 10 — A Expansao Escondida
   Big stat hero left, body text right. Closing full-width.
   ═══════════════════════════════════════════════════ */

export function CsExpansao() {
  return (
    <Section id="cs-expansao-escondida" bg="green-glow">
      <CinematicHeadline
        overline="Customer Success"
        headline={content.csExpansao.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="text-center lg:text-left">
            <StatNumber className="block text-[clamp(4rem,12vw,8rem)]">
              {content.csExpansao.stat}
            </StatNumber>
            <Body className="mt-4 text-sm max-w-sm mx-auto lg:mx-0">
              {content.csExpansao.statContext}
            </Body>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Body className="text-lg leading-relaxed">
            {content.csExpansao.body}
          </Body>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.5} className="mt-16">
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <Body className="text-lg text-[var(--text-primary)] font-medium max-w-3xl">
            {content.csExpansao.closing}
          </Body>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export { CsExpansao as ChapterCsExpansao }

/* ═══════════════════════════════════════════════════
   Chapter 11 — A Verdade Sobre o Cliente
   Two columns: bad vs good data. Contrast reveal.
   ═══════════════════════════════════════════════════ */

export function DataVerdade() {
  return (
    <Section id="data-verdade-sobre-cliente" bg="elevated">
      <CinematicHeadline
        overline="Dados"
        headline={content.dataVerdade.headline}
        align="left"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.dataVerdade.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScrollReveal delay={0.1}>
          <div className="space-y-3">
            <Overline className="text-[var(--text-muted)] mb-4 block">
              O que seu CRM guarda
            </Overline>
            {content.dataVerdade.contrast.bad.map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] opacity-60"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--text-muted)] shrink-0" />
                <Body as="span" className="text-sm text-[var(--text-muted)]">
                  {item}
                </Body>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="space-y-3">
            <Overline className="text-[var(--accent-green)] mb-4 block">
              O que deveria guardar
            </Overline>
            {content.dataVerdade.contrast.good.map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--accent-green-soft)] border border-[var(--accent-green)]/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] shrink-0" />
                <Body as="span" className="text-sm text-[var(--text-primary)] font-medium">
                  {item}
                </Body>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { DataVerdade as ChapterDataVerdade }
