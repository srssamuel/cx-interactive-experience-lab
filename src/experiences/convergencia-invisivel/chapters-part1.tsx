'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { SubHeading, Body, Overline, StatNumber } from '@/components/design-system/typography'
import { Card } from '@/components/design-system/card'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { DiscussionPrompt } from '@/components/workshop/discussion-prompt'
import { TextReveal } from '@/components/motion/text-reveal'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { Spotlight } from '@/components/effects/spotlight'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { MovingBorder } from '@/components/effects/moving-border'
import { FloatingElements } from '@/components/effects/floating-elements'
import { CharReveal } from '@/components/motion/char-reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/stagger-group'
import { GradientMesh } from '@/components/effects/gradient-mesh'
import { Globe, Sparkles, BarChart3, TrendingUp, DollarSign, MessageSquare, HeartHandshake, ChartNoAxesCombined, Unplug, Database } from 'lucide-react'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════
   Chapter 1 — Abertura
   Full viewport cinematic. Giant stat, headline, body.
   ═══════════════════════════════════════════════════ */

export function Abertura() {
  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.15)" size={800}>
    <Section id="abertura" bg="primary" fullHeight>
      <AmbientBackground variant="spotlight" />
      <FloatingElements count={5} color="var(--accent-amber)" />
      <ParallaxContainer speed={0.15} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
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

          <div className="mt-16 max-w-3xl">
            <CharReveal
              tag="h1"
              className="text-[clamp(1.5rem,4vw,3rem)]"
              delay={0.8}
              stagger={0.025}
            >
              {content.abertura.headline}
            </CharReveal>
          </div>

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

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 scroll-indicator"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                scroll
              </span>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[var(--text-muted)]">
                <path d="M8 0v18M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </ParallaxContainer>
    </Section>
    </Spotlight>
  )
}

export { Abertura as ChapterAbertura }

/* ═══════════════════════════════════════════════════
   Chapter 2 — O Mundo Mudou
   STACKED CARDS WITH ROTATION — no CinematicHeadline.
   Each card tilts slightly, large stat dominates.
   ═══════════════════════════════════════════════════ */

const ch2Rotations = ['-1deg', '0deg', '1deg'] as const

export function ContextoMundoMudou() {
  return (
    <Section id="contexto-o-mundo-mudou" bg="gradient-down" spacing="generous">
      <BackgroundBeams color="rgba(200, 135, 58, 0.35)" beamCount={2} />
      <FloatingElements count={4} color="var(--accent-amber)" />
      <div className="relative z-10">
      <Overline className="block mb-6 text-[var(--text-muted)] inline-flex items-center gap-2"><Globe className="w-4 h-4 text-[var(--accent-amber)]" />Contexto</Overline>
      <TextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-4xl"
      >
        {content.contextoMundoMudou.headline}
      </TextReveal>

      <div className="mt-20 flex flex-col items-center gap-8 max-w-2xl mx-auto">
        {content.contextoMundoMudou.points.map((point, i) => (
          <ScrollReveal
            key={point.stat}
            variant="scale"
            delay={i * 0.15}
            className="w-full"
          >
            <motion.div
              style={{ rotateZ: ch2Rotations[i] }}
              className={cn(
                'relative p-8 md:p-10 rounded-2xl border border-[var(--border-subtle)]',
                'bg-[var(--bg-surface)] hover:border-[var(--accent-amber)]/30 transition-colors duration-500',
                i === 2 && 'border-[var(--accent-amber)]/20 bg-[var(--accent-amber-soft)]'
              )}
            >
              <StatNumber className="block text-[clamp(3rem,8vw,5rem)] leading-none">
                {point.stat}
              </StatNumber>
              <Body className="mt-4 text-[var(--text-primary)] font-medium text-lg">
                {point.text}
              </Body>
              <span className="mt-3 block font-mono text-xs text-[var(--text-muted)]">
                {point.source}
              </span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.6} className="mt-16">
        <Body className="max-w-2xl text-lg text-[var(--text-primary)] font-medium">
          {content.contextoMundoMudou.closing}
        </Body>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { ContextoMundoMudou as ChapterContextoMundoMudou }

/* ═══════════════════════════════════════════════════
   Chapter 3 — A Ilusao Digital
   Alternating slide-left / slide-right reveals.
   ═══════════════════════════════════════════════════ */

export function ContextoIlusao() {
  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.15)" size={700}>
    <Section id="contexto-ilusao-digital" bg="surface" spacing="compact">
      <AmbientBackground variant="top-light" />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Contexto"
        headline={content.contextoIlusao.headline}
        align="left"
        size="display"
        icon={<Sparkles className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <ScrollReveal variant="slide-right" className="mt-8 max-w-3xl">
        <Body className="text-lg">{content.contextoIlusao.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-6">
          <ScrollReveal variant="slide-left" delay={0.1}>
            <BorderRevealCard glowColor="rgba(255, 255, 255, 0.15)" className="h-full">
              <Overline className="text-[var(--text-muted)] mb-3 block">
                O que as empresas mediram
              </Overline>
              <Body className="text-[var(--text-primary)]">
                {content.contextoIlusao.contrast.before}
              </Body>
            </BorderRevealCard>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={0.25}>
            <BorderRevealCard glowColor="rgba(200, 135, 58, 0.4)" className="h-full">
              <Overline className="text-[var(--accent-amber)] mb-3 block">
                O que deveriam ter medido
              </Overline>
              <Body className="text-[var(--text-primary)] font-medium">
                {content.contextoIlusao.contrast.after}
              </Body>
            </BorderRevealCard>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <ScrollReveal variant="slide-left" delay={0.4}>
            <Card variant="stat" accentColor="amber" className="text-center">
              <AnimatedCounter
                value={40}
                suffix="%"
                className="block text-[var(--accent-amber)] text-[clamp(3rem,8vw,5rem)] leading-none"
              />
              <Body className="mt-4 text-sm text-[var(--text-secondary)]">
                {content.contextoIlusao.statContext}
              </Body>
            </Card>
          </ScrollReveal>
        </div>
      </div>
      </div>
    </Section>
    </Spotlight>
  )
}

export { ContextoIlusao as ChapterContextoIlusao }

/* ═══════════════════════════════════════════════════
   Chapter 4 — CX: A Equacao Invisivel
   AmbientBackground breathe + scale reveals for cards.
   ═══════════════════════════════════════════════════ */

export function CxEquacao() {
  const nodePositions = [
    'md:col-start-2 md:col-span-2 md:justify-self-center', // Expectativa — top center
    'md:col-start-1 md:col-span-2',                        // Percepcao — bottom left
    'md:col-start-3 md:col-span-2 md:justify-self-end',    // Memoria — bottom right
  ]

  return (
    <Section id="cx-equacao-invisivel" bg="amber-glow">
      <AmbientBackground variant="radial-amber" breathe={true} />
      <FloatingElements count={6} color="var(--accent-amber)" />
      <div className="relative z-10">
        <Overline className="text-center mb-6 inline-flex items-center gap-2 w-full justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-amber)]" />Customer Experience</Overline>
        <TextReveal
          tag="h2"
          className="text-center text-[clamp(1.75rem,4vw,3.5rem)]"
        >
          {content.cxEquacao.headline}
        </TextReveal>

        <ScrollReveal variant="scale" className="mt-6 max-w-3xl mx-auto text-center">
          <Body className="text-lg">{content.cxEquacao.body}</Body>
        </ScrollReveal>

        {/* Triangular equation diagram — 3 nodes forming a visual equation */}
        <div className="mt-16 relative">
          {/* SVG connecting lines between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" aria-hidden="true">
            <line x1="50%" y1="15%" x2="20%" y2="85%" stroke="var(--accent-amber)" strokeWidth="1" opacity="0.35" />
            <line x1="50%" y1="15%" x2="80%" y2="85%" stroke="var(--accent-amber)" strokeWidth="1" opacity="0.35" />
            <line x1="20%" y1="85%" x2="80%" y2="85%" stroke="var(--accent-amber)" strokeWidth="1" opacity="0.35" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-y-16">
            {content.cxEquacao.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} variant="scale" delay={i * 0.2} className={nodePositions[i]}>
                <div className="relative p-6 md:p-8 rounded-2xl border border-[var(--accent-amber)]/20 bg-[var(--bg-primary)]/60 backdrop-blur-sm max-w-xs">
                  {/* Node number — large faded */}
                  <span className="absolute -top-4 -left-2 font-display text-5xl text-[var(--accent-amber)] opacity-[0.25] leading-none select-none" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <SubHeading className="text-[var(--accent-amber)] text-xl">
                    {pillar.title}
                  </SubHeading>
                  <Body className="mt-3 text-sm">{pillar.desc}</Body>
                  {/* Operator symbols between nodes */}
                  {i < 2 && (
                    <span className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-2xl text-[var(--accent-amber)] opacity-30">
                      {i === 0 ? '\u00d7' : '='}
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Equation result */}
          <ScrollReveal delay={0.7} className="mt-12 text-center">
            <span className="font-display text-lg md:text-xl text-[var(--accent-amber)] opacity-60 tracking-wide">
              Expectativa &times; Percepcao &times; Tempo = Experiencia
            </span>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { CxEquacao as ChapterCxEquacao }

/* ═══════════════════════════════════════════════════
   Chapter 5 — Experiencia vs Percepcao
   "rise" variant for the stat card.
   ═══════════════════════════════════════════════════ */

export function CxExperiencia() {
  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.15)" size={600}>
    <Section id="cx-experiencia-vs-percepcao" bg="elevated">
      <BackgroundBeams color="rgba(200, 135, 58, 0.35)" beamCount={2} />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Customer Experience"
        headline={content.cxExperiencia.headline}
        align="left"
        size="display"
        icon={<TrendingUp className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-12 items-start">
        <div className="lg:col-span-4 space-y-8">
          <ScrollReveal>
            <Body className="text-lg leading-relaxed">
              {content.cxExperiencia.body}
            </Body>
          </ScrollReveal>

          {/* Perception Gap Visualization — unique to this chapter */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--accent-green)] uppercase tracking-wider">Experiencia Projetada</span>
                <div className="h-3 rounded-full bg-[var(--bg-hover)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[var(--accent-green)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[var(--accent-red)] uppercase tracking-wider">Percepcao do Cliente</span>
                <div className="h-3 rounded-full bg-[var(--bg-hover)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[var(--accent-red)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '42%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                  />
                </div>
              </div>
              <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">
                O gap que ninguem mede
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
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
          <ScrollReveal variant="rise" delay={0.3}>
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
      </div>
    </Section>
    </Spotlight>
  )
}

export { CxExperiencia as ChapterCxExperiencia }

/* ═══════════════════════════════════════════════════
   Chapter 6 — O Custo do Atrito
   FULL-BLEED STAT WALL — giant watermark numbers
   behind asymmetric content. No grid.
   ═══════════════════════════════════════════════════ */

export function CxCusto() {
  return (
    <Section id="cx-custo-do-atrito" bg="gradient-up" spacing="dramatic">
      <AmbientBackground variant="bottom-fade" />
      <div className="relative overflow-hidden">
        {/* Watermark stat numbers — giant, ghostly, layered */}
        <div
          className="absolute inset-0 flex flex-col items-end justify-between pointer-events-none select-none"
          aria-hidden="true"
        >
          {content.cxCusto.stats.map((stat, i) => (
            <span
              key={stat.label}
              className={cn(
                'font-display font-black text-[20vw] leading-none text-[var(--text-primary)] opacity-[0.08]',
                i % 2 === 0 ? 'self-start -ml-[4vw]' : 'self-end -mr-[4vw]'
              )}
            >
              {stat.prefix}{stat.value}{stat.suffix}
            </span>
          ))}
        </div>

        {/* Actual content overlaid */}
        <div className="relative z-10">
          <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2"><DollarSign className="w-4 h-4 text-[var(--accent-amber)]" />Customer Experience</Overline>
          <TextReveal
            tag="h2"
            className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
          >
            {content.cxCusto.headline}
          </TextReveal>

          <div className="mt-20 flex flex-col gap-16 max-w-2xl">
            {content.cxCusto.stats.map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                variant="blur"
                delay={i * 0.12}
                className={cn(i % 2 !== 0 && 'ml-auto')}
              >
                <div className="flex items-baseline gap-6">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    className="block text-[var(--accent-amber)] text-[clamp(3rem,7vw,5rem)] leading-none font-display"
                  />
                  <Body className="text-lg max-w-xs">{stat.label}</Body>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="blur" delay={0.6} className="mt-8">
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.1em]">
              {content.cxCusto.source}
            </span>
          </ScrollReveal>

          <ScrollReveal variant="blur" delay={0.8} className="mt-12 max-w-2xl">
            <Body className="text-lg text-[var(--text-primary)] font-medium italic">
              {content.cxCusto.closing}
            </Body>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { CxCusto as ChapterCxCusto }

/* ═══════════════════════════════════════════════════
   Chapter 7 — Momento de Reflexao
   Staircase cards with gradient-border-top + DiscussionPrompt.
   ═══════════════════════════════════════════════════ */

export function CxReflexao() {
  const marginSteps = ['ml-0', 'ml-6 md:ml-12', 'ml-12 md:ml-24', 'ml-18 md:ml-36']

  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.15)" size={600}>
    <Section id="cx-momento-reflexao" bg="vignette" spacing="compact">
      <BackgroundBeams color="rgba(200, 135, 58, 0.35)" beamCount={2} />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Reflexao"
        headline={content.cxReflexao.headline}
        align="left"
        size="display"
        icon={<MessageSquare className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <div className="mt-16 space-y-4">
        {content.cxReflexao.levels.map((lvl, i) => (
          <ScrollReveal key={lvl.level} delay={i * 0.12}>
            <div className={cn(marginSteps[i], 'max-w-2xl')}>
              <Card
                variant="minimal"
                hover={false}
                className={cn(
                  'gradient-border-top flex items-start gap-6 border-l-2 pl-6 rounded-none',
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
      </div>
    </Section>
    </Spotlight>
  )
}

export { CxReflexao as ChapterCxReflexao }

/* ═══════════════════════════════════════════════════
   Chapter 8 — O Paradoxo da Retencao
   "blur" variant for stat cards. Insight highlight.
   ═══════════════════════════════════════════════════ */

export function CsParadoxo() {
  return (
    <Section id="cs-paradoxo-retencao" bg="surface">
      <BackgroundBeams color="rgba(74, 124, 92, 0.35)" beamCount={3} />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Customer Success"
          headline={content.csParadoxo.headline}
          align="left"
          size="display"
          icon={<HeartHandshake className="w-4 h-4 text-[var(--accent-green)]" />}
        />

        <ScrollReveal delay={0.1} className="mt-8 max-w-3xl">
          <Body className="text-lg leading-relaxed">{content.csParadoxo.body}</Body>
        </ScrollReveal>

        {/* Dual-panel paradox tension — opposing panels with gap reveal */}
        <div className="mt-16 flex flex-col md:flex-row gap-4 md:gap-0 items-stretch min-h-[280px]">
          {/* Left panel — "healthy" metrics */}
          <ScrollReveal variant="slide-left" delay={0.2} className="flex-1">
            <div className="h-full p-8 rounded-l-xl md:rounded-r-none rounded-xl border border-[var(--accent-green)]/20 bg-[var(--accent-green-soft)]">
              <Overline className="text-[var(--accent-green)] mb-6 block">O que o numero diz</Overline>
              <div className="space-y-4">
                {content.csParadoxo.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="block text-[var(--accent-green)] text-[clamp(1.5rem,4vw,2.5rem)] leading-none font-display"
                    />
                    <Body className="mt-1 text-sm">{stat.label}</Body>
                    <span className="font-mono text-[0.6rem] text-[var(--text-muted)]">{stat.source}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Center divider — glowing gap */}
          <div className="hidden md:flex items-center justify-center w-16 relative">
            <motion.div
              className="w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-amber)] to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            />
            <span className="absolute font-display text-sm text-[var(--accent-amber)] bg-[var(--bg-surface)] px-2">vs</span>
          </div>

          {/* Right panel — "reality" */}
          <ScrollReveal variant="slide-right" delay={0.3} className="flex-1">
            <div className="h-full p-8 rounded-r-xl md:rounded-l-none rounded-xl border border-[var(--accent-red)]/20 bg-[rgba(199,91,91,0.15)]">
              <Overline className="text-[var(--accent-red)] mb-6 block">O que o cliente sente</Overline>
              <div>
                <AnimatedCounter
                  value={content.csParadoxo.stats[2].value}
                  suffix={content.csParadoxo.stats[2].suffix}
                  className="block text-[var(--accent-red)] text-[clamp(1.5rem,4vw,2.5rem)] leading-none font-display"
                />
                <Body className="mt-1 text-sm">{content.csParadoxo.stats[2].label}</Body>
                <span className="font-mono text-[0.6rem] text-[var(--text-muted)]">{content.csParadoxo.stats[2].source}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Paradox insight — revealed below the tension */}
        <ScrollReveal delay={0.6} className="mt-12">
          <div className="text-center max-w-2xl mx-auto px-6 py-5 border-t border-b border-[var(--accent-amber)]/15">
            <Body className="text-lg text-[var(--text-primary)] font-medium italic">
              {content.csParadoxo.insight}
            </Body>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { CsParadoxo as ChapterCsParadoxo }

/* ═══════════════════════════════════════════════════
   Chapter 9 — Metricas que Mentem
   STRIKE-THROUGH METRICS — pure typography + space.
   Struck metric names, truth fades in below.
   ═══════════════════════════════════════════════════ */

export function CsMetricas() {
  return (
    <Spotlight className="w-full" color="rgba(74, 124, 92, 0.15)" size={700}>
    <Section id="cs-metricas-que-mentem" bg="primary" spacing="dramatic">
      <Overline className="mb-6 text-[var(--text-muted)] text-center flex items-center justify-center gap-2">
        <ChartNoAxesCombined className="w-4 h-4 text-[var(--accent-green)]" />Customer Success
      </Overline>
      <TextReveal
        tag="h2"
        className="text-center text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl mx-auto"
      >
        {content.csMetricas.headline}
      </TextReveal>

      <div className="mt-24 space-y-20 max-w-3xl mx-auto">
        {content.csMetricas.metrics.map((metric, i) => (
          <div key={metric.name}>
            {/* The struck metric name */}
            <ScrollReveal variant="fade" delay={i * 0.1}>
              <span
                className={cn(
                  'font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none',
                  'text-[var(--accent-amber)] line-through decoration-[3px]',
                  'decoration-[var(--accent-amber)]/60'
                )}
              >
                {metric.name}
              </span>
            </ScrollReveal>

            {/* The truth underneath */}
            <ScrollReveal variant="clip-up" delay={i * 0.1 + 0.2} className="mt-6">
              <div className="pl-1 border-l-2 border-[var(--accent-green)]/40 ml-1">
                <Overline className="text-[var(--accent-green)] mb-2 block pl-4">
                  A realidade
                </Overline>
                <Body className="text-lg leading-relaxed text-[var(--text-primary)] pl-4">
                  {metric.reality}
                </Body>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>

      <ScrollReveal variant="clip-up" delay={0.5} className="mt-24 max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-2xl border border-[var(--accent-green)]/20 bg-[var(--accent-green-soft)]">
          <Overline className="text-[var(--accent-green)] mb-3 block">
            Alternativa
          </Overline>
          <Body className="text-[var(--text-primary)] font-medium text-lg">
            {content.csMetricas.alternative}
          </Body>
        </div>
      </ScrollReveal>
    </Section>
    </Spotlight>
  )
}

export { CsMetricas as ChapterCsMetricas }

/* ═══════════════════════════════════════════════════
   Chapter 10 — A Expansao Escondida
   "scale" variant for the big stat.
   ═══════════════════════════════════════════════════ */

export function CsExpansao() {
  return (
    <Section id="cs-expansao-escondida" bg="green-glow" spacing="dramatic">
      <FloatingElements count={8} color="var(--accent-green)" />
      <div className="relative z-10">
        <Overline className="text-center mb-6 flex items-center justify-center gap-2">
          <Unplug className="w-4 h-4 text-[var(--accent-green)]" />Customer Success
        </Overline>

        {/* Giant centered stat — hero-scale, unique to this chapter */}
        <ScrollReveal variant="scale">
          <div className="text-center">
            <MovingBorder borderColor="var(--accent-green)" duration={6} borderWidth={1} className="inline-block rounded-2xl">
              <div className="px-16 py-12 md:px-24 md:py-16 bg-[var(--bg-surface)] rounded-2xl">
                <StatNumber className="block text-[clamp(5rem,16vw,12rem)] leading-none">
                  {content.csExpansao.stat}
                </StatNumber>
              </div>
            </MovingBorder>
            <ScrollReveal delay={0.2}>
              <Body className="mt-6 text-sm text-[var(--text-muted)] max-w-md mx-auto">
                {content.csExpansao.statContext}
              </Body>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Wide headline below stat */}
        <ScrollReveal delay={0.3} className="mt-16">
          <TextReveal
            tag="h2"
            className="text-center text-[clamp(1.75rem,4vw,3rem)] max-w-3xl mx-auto"
          >
            {content.csExpansao.headline}
          </TextReveal>
        </ScrollReveal>

        {/* Body text — wide, centered, breathing room */}
        <ScrollReveal delay={0.4} className="mt-10">
          <Body className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
            {content.csExpansao.body}
          </Body>
        </ScrollReveal>

        {/* Closing — full-width accent bar */}
        <ScrollReveal delay={0.6} className="mt-16">
          <div className="relative max-w-3xl mx-auto px-8 py-6 rounded-xl border border-[var(--accent-green)]/20 bg-[var(--accent-green-soft)]">
            <span className="absolute -top-3 left-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green)] bg-[var(--bg-primary)] px-3">
              Insight
            </span>
            <Body className="text-lg text-[var(--text-primary)] font-medium text-center">
              {content.csExpansao.closing}
            </Body>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { CsExpansao as ChapterCsExpansao }

/* ═══════════════════════════════════════════════════
   Chapter 11 — A Verdade Sobre o Cliente
   SPLIT SCREEN — blurred left vs clear right,
   amber-glow divider that grows from zero height.
   ═══════════════════════════════════════════════════ */

export function DataVerdade() {
  return (
    <Section id="data-verdade-sobre-cliente" bg="elevated" spacing="dramatic">
      <BackgroundBeams color="rgba(91, 143, 185, 0.35)" beamCount={2} />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Dados"
        headline={content.dataVerdade.headline}
        align="left"
        size="display"
        icon={<Database className="w-4 h-4 text-[var(--accent-blue)]" />}
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.dataVerdade.body}</Body>
      </ScrollReveal>

      <div className="mt-16 relative flex flex-col md:flex-row min-h-[400px]">
        {/* Left side — blurred / muted */}
        <div className="flex-1 md:pr-12">
          <ScrollReveal variant="slide-left" delay={0.1}>
            <Overline className="text-[var(--text-muted)] mb-6 block">
              O que seu CRM sabe
            </Overline>
            <div className="space-y-4">
              {content.dataVerdade.contrast.bad.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-surface)]/60 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--text-muted)] shrink-0" />
                  <Body as="span" className="text-sm text-[var(--text-muted)]">
                    {item}
                  </Body>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Center divider — grows from 0 to full height with amber glow */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 w-px -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--accent-amber), transparent)',
            boxShadow: '0 0 12px var(--accent-amber), 0 0 4px var(--accent-amber)',
          }}
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        />

        {/* Mobile divider */}
        <motion.div
          className="md:hidden my-8 mx-auto h-px w-0"
          style={{
            background: 'linear-gradient(to right, transparent, var(--accent-amber), transparent)',
            boxShadow: '0 0 12px var(--accent-amber)',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '80%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        />

        {/* Right side — clear / primary */}
        <div className="flex-1 md:pl-12">
          <ScrollReveal variant="slide-right" delay={0.2}>
            <Overline className="text-[var(--accent-green)] mb-6 block">
              O que deveria saber
            </Overline>
            <div className="space-y-4">
              {content.dataVerdade.contrast.good.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--accent-green-soft)] border border-[var(--accent-green)]/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
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
      </div>
      </div>
    </Section>
  )
}

export { DataVerdade as ChapterDataVerdade }
