'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { SectionHeading, SubHeading, Body, Overline, StatNumber } from '@/components/design-system/typography'
import { Card } from '@/components/design-system/card'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/stagger-group'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { DiscussionPrompt } from '@/components/workshop/discussion-prompt'
import { TextReveal } from '@/components/motion/text-reveal'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { cn } from '@/lib/cn'
import { content } from './content'

const ease = [0.16, 1, 0.3, 1] as const

/* ═══════════════════════════════════════════════════
   Chapter 1 — Abertura
   Full viewport cinematic hero with parallax depth.
   ═══════════════════════════════════════════════════ */

export function Abertura() {
  return (
    <Section id="abertura" bg="primary" fullHeight>
      <AmbientBackground variant="spotlight" breathe />
      <AmbientBackground variant="corner-glow" />
      <ParallaxContainer speed={0.2} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease }}
          >
            <StatNumber className="block text-[clamp(4rem,14vw,12rem)]">
              {content.abertura.stat}
            </StatNumber>
          </motion.div>

          <motion.p
            className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {content.abertura.statLabel}
          </motion.p>

          <div className="mt-16 max-w-4xl">
            <TextReveal tag="h1" className="text-[clamp(1.5rem,4vw,3rem)]" delay={0.8}>
              {content.abertura.headline}
            </TextReveal>
          </div>

          <ScrollReveal delay={1.2} variant="blur" className="mt-10 max-w-xl">
            <Body className="text-lg">{content.abertura.body}</Body>
          </ScrollReveal>

          <motion.p
            className="mt-16 font-display text-xl italic text-[var(--accent-amber)] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
          >
            {content.abertura.provocation}
          </motion.p>
        </div>
      </ParallaxContainer>
    </Section>
  )
}

export { Abertura as ChapterAbertura }

/* ═══════════════════════════════════════════════════
   Chapter 2 — O Mundo Mudou
   REDESIGNED: Stacked rotated cards, no 3-col grid.
   ═══════════════════════════════════════════════════ */

export function ContextoMundoMudou() {
  const rotations = ['-1.5deg', '0deg', '1.5deg']

  return (
    <Section id="contexto-o-mundo-mudou" bg="gradient-down">
      <AmbientBackground variant="top-light" />
      <div className="relative z-10">
        <TextReveal tag="h2" className="text-[clamp(1.75rem,5vw,3.5rem)] max-w-3xl">
          {content.contextoMundoMudou.headline}
        </TextReveal>

        <div className="mt-20 flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {content.contextoMundoMudou.points.map((point, i) => (
            <ScrollReveal
              key={point.stat}
              delay={i * 0.15}
              variant="scale"
              className="w-full"
            >
              <div
                className="p-8 md:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-transform duration-500 hover:scale-[1.02]"
                style={{ transform: `rotate(${rotations[i]})` }}
              >
                <div className="flex items-baseline gap-6">
                  <StatNumber className="block text-[clamp(3rem,8vw,5rem)] shrink-0">
                    {point.stat}
                  </StatNumber>
                  <div>
                    <Body className="text-[var(--text-primary)] font-medium text-lg">{point.text}</Body>
                    <span className="mt-2 block font-mono text-xs text-[var(--text-muted)]">{point.source}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} variant="blur" className="mt-16">
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
   Alternating slide directions for visual rhythm.
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

      <ScrollReveal className="mt-8 max-w-3xl" variant="slide-right">
        <Body className="text-lg">{content.contextoIlusao.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-6">
          <ScrollReveal delay={0.1} variant="slide-right">
            <Card variant="bordered" hover={false}>
              <Overline className="text-[var(--text-muted)] mb-3 block">O que as empresas mediram</Overline>
              <Body className="text-[var(--text-primary)]">{content.contextoIlusao.contrast.before}</Body>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25} variant="slide-left">
            <Card variant="highlight" accentColor="amber" hover={false}>
              <Overline className="text-[var(--accent-amber)] mb-3 block">O que deveriam ter medido</Overline>
              <Body className="text-[var(--text-primary)] font-medium">{content.contextoIlusao.contrast.after}</Body>
            </Card>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <ScrollReveal delay={0.4} variant="scale">
            <Card variant="stat" accentColor="amber" className="text-center">
              <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">{content.contextoIlusao.stat}</StatNumber>
              <Body className="mt-4 text-sm text-[var(--text-secondary)]">{content.contextoIlusao.statContext}</Body>
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
   TextReveal headline + breathing ambient + scale cards.
   ═══════════════════════════════════════════════════ */

export function CxEquacao() {
  return (
    <Section id="cx-equacao-invisivel" bg="amber-glow">
      <AmbientBackground variant="radial-amber" breathe />
      <div className="relative z-10">
        <Overline className="text-center block mb-6">Customer Experience</Overline>
        <TextReveal tag="h2" className="text-center text-[clamp(1.75rem,4vw,3.5rem)]">
          {content.cxEquacao.headline}
        </TextReveal>

        <ScrollReveal className="mt-6 max-w-3xl mx-auto text-center" variant="blur">
          <Body className="text-lg">{content.cxEquacao.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.cxEquacao.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15} variant="scale">
              <Card
                variant="bordered"
                className={cn('h-full relative overflow-hidden border-[var(--accent-amber)]/20')}
              >
                <span className="absolute top-4 right-4 font-mono text-xs text-[var(--accent-amber)]/50">0{i + 1}</span>
                <SubHeading className="text-[var(--accent-amber)]">{pillar.title}</SubHeading>
                <Body className="mt-4">{pillar.desc}</Body>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { CxEquacao as ChapterCxEquacao }

/* ═══════════════════════════════════════════════════
   Chapter 5 — Experiencia vs Percepcao
   Rise variant for stat card emphasis.
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

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <ScrollReveal variant="slide-right">
            <Body className="text-lg">{content.cxExperiencia.body}</Body>
          </ScrollReveal>
          <ScrollReveal delay={0.3} variant="clip-up">
            <Card variant="highlight" accentColor="amber">
              <Body className="text-[var(--text-primary)] font-medium italic">
                {content.cxExperiencia.insight}
              </Body>
            </Card>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-3 flex items-center justify-center">
          <ScrollReveal delay={0.4} variant="rise">
            <Card variant="stat" accentColor="amber" className="text-center">
              <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">{content.cxExperiencia.stat}</StatNumber>
              <Body className="mt-4 text-sm text-[var(--text-secondary)]">{content.cxExperiencia.statContext}</Body>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { CxExperiencia as ChapterCxExperiencia }

/* ═══════════════════════════════════════════════════
   Chapter 6 — Custo do Atrito
   REDESIGNED: Full-bleed stat wall with giant watermarks.
   ═══════════════════════════════════════════════════ */

export function CxCusto() {
  return (
    <Section id="cx-custo-do-atrito" bg="primary" wide>
      <AmbientBackground variant="radial-amber" />
      <div className="relative z-10">
        <TextReveal tag="h2" className="text-[clamp(1.75rem,5vw,3.5rem)] max-w-3xl">
          {content.cxCusto.headline}
        </TextReveal>

        <div className="mt-20 flex flex-col gap-16">
          {content.cxCusto.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} variant="blur">
              <div className="relative overflow-hidden">
                {/* Giant watermark stat */}
                <div
                  className="absolute -top-8 -right-4 font-display text-[clamp(8rem,20vw,16rem)] leading-none text-[var(--text-primary)] opacity-[0.03] select-none pointer-events-none"
                  aria-hidden
                >
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                {/* Actual content */}
                <div className="relative z-10 flex items-baseline gap-6 md:gap-10">
                  <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--accent-amber)]">
                    {stat.prefix}<AnimatedCounter value={stat.value} />{stat.suffix}
                  </span>
                  <Body className="text-lg text-[var(--text-primary)] font-medium max-w-md">
                    {stat.label}
                  </Body>
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-[var(--accent-amber)]/20 via-[var(--accent-amber)]/5 to-transparent" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} variant="blur" className="mt-16">
          <span className="font-mono text-xs text-[var(--text-muted)]">{content.cxCusto.source}</span>
          <Body className="mt-4 text-lg text-[var(--text-primary)] font-medium italic max-w-2xl">
            {content.cxCusto.closing}
          </Body>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { CxCusto as ChapterCxCusto }

/* ═══════════════════════════════════════════════════
   Chapter 7 — Momento de Reflexao
   Staircase with gradient border top.
   ═══════════════════════════════════════════════════ */

export function CxReflexao() {
  return (
    <Section id="cx-reflexao-mapa" bg="gradient-up">
      <CinematicHeadline
        overline="Autodiagnostico"
        headline={content.cxReflexao.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 space-y-4">
        {content.cxReflexao.levels.map((level, i) => (
          <ScrollReveal key={level.name} delay={i * 0.12} variant="rise">
            <div
              className={cn(
                'rounded-xl border border-[var(--border-subtle)] p-6 md:p-8 transition-all duration-300',
                'hover:border-[var(--border-hover)] gradient-border-top',
                i === 3 && 'border-[var(--accent-amber)]/30 bg-[var(--bg-surface)]'
              )}
              style={{ marginLeft: `${i * 24}px` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">L{level.level}</span>
                <SubHeading className={cn(i === 3 ? 'text-[var(--accent-amber)]' : 'text-[var(--text-primary)]')}>
                  {level.name}
                </SubHeading>
              </div>
              <Body className="mt-2 ml-10">{level.desc}</Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.8} variant="blur" className="mt-12 ml-24">
        <Body className="text-lg text-[var(--accent-amber)] italic font-medium">
          {content.cxReflexao.provocation}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { CxReflexao as ChapterCxReflexao }

/* ═══════════════════════════════════════════════════
   Chapter 8 — O Paradoxo da Retencao
   Blur reveals for dramatic stat emphasis.
   ═══════════════════════════════════════════════════ */

export function CsParadoxo() {
  return (
    <Section id="cs-paradoxo-retencao" bg="green-glow">
      <AmbientBackground variant="radial-green" breathe />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Customer Success"
          headline={content.csParadoxo.headline}
          align="left"
          size="display"
        />

        <ScrollReveal className="mt-6 max-w-3xl" variant="slide-right">
          <Body className="text-lg">{content.csParadoxo.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.csParadoxo.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12} variant="blur">
              <Card variant="stat" accentColor="green" className="text-center h-full">
                <StatNumber className="block text-[clamp(2.5rem,6vw,4rem)] text-[var(--accent-green)]">
                  <AnimatedCounter value={stat.value} />{stat.suffix}
                </StatNumber>
                <Body className="mt-3 text-sm">{stat.label}</Body>
                <span className="mt-2 block font-mono text-xs text-[var(--text-muted)]">{stat.source}</span>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} variant="clip-up" className="mt-12">
          <Card variant="highlight" accentColor="green">
            <Body className="text-[var(--text-primary)] font-medium italic">{content.csParadoxo.insight}</Body>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { CsParadoxo as ChapterCsParadoxo }

/* ═══════════════════════════════════════════════════
   Chapter 9 — Metricas que Mentem
   REDESIGNED: Strike-through typography reveal.
   ═══════════════════════════════════════════════════ */

export function CsMetricas() {
  return (
    <Section id="cs-metricas-que-mentem" bg="surface">
      <TextReveal tag="h2" className="text-[clamp(1.75rem,5vw,3.5rem)] max-w-3xl">
        {content.csMetricas.headline}
      </TextReveal>

      <div className="mt-20 space-y-20 max-w-3xl">
        {content.csMetricas.metrics.map((metric, i) => (
          <div key={metric.name}>
            <ScrollReveal delay={i * 0.1}>
              <span className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-[var(--accent-amber)] line-through decoration-[var(--accent-red)]/60 decoration-[3px]">
                {metric.name}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={i * 0.1 + 0.3} variant="clip-up" className="mt-4 ml-2">
              <Body className="text-lg text-[var(--text-primary)]">{metric.reality}</Body>
            </ScrollReveal>
          </div>
        ))}
      </div>

      <ScrollReveal delay={0.6} variant="blur" className="mt-20">
        <div className="p-8 rounded-2xl border border-[var(--accent-green)]/20 bg-[var(--accent-green)]/5">
          <Overline className="text-[var(--accent-green)] block mb-3">O que funciona</Overline>
          <Body className="text-[var(--text-primary)] font-medium text-lg">{content.csMetricas.alternative}</Body>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export { CsMetricas as ChapterCsMetricas }

/* ═══════════════════════════════════════════════════
   Chapter 10 — A Expansao Escondida
   Scale variant for dramatic stat entrance.
   ═══════════════════════════════════════════════════ */

export function CsExpansao() {
  return (
    <Section id="cs-expansao-escondida" bg="gradient-down">
      <CinematicHeadline
        overline="Customer Success"
        headline={content.csExpansao.headline}
        align="left"
        size="display"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <ScrollReveal variant="scale">
            <div className="text-center">
              <StatNumber className="block text-[clamp(4rem,10vw,7rem)]">{content.csExpansao.stat}</StatNumber>
              <Body className="mt-3 text-sm text-[var(--text-muted)]">{content.csExpansao.statContext}</Body>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-3">
          <ScrollReveal delay={0.2} variant="slide-left">
            <Body className="text-lg leading-relaxed">{content.csExpansao.body}</Body>
          </ScrollReveal>
          <ScrollReveal delay={0.4} variant="clip-up" className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
            <Body className="text-[var(--text-primary)] font-medium italic">{content.csExpansao.closing}</Body>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}

export { CsExpansao as ChapterCsExpansao }

/* ═══════════════════════════════════════════════════
   Chapter 11 — A Verdade Sobre o Cliente
   REDESIGNED: Split screen with blur contrast.
   ═══════════════════════════════════════════════════ */

export function DataVerdade() {
  return (
    <Section id="data-verdade-cliente" bg="primary" wide>
      <CinematicHeadline
        overline="Dados"
        headline={content.dataVerdade.headline}
        align="center"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl mx-auto text-center" variant="blur">
        <Body className="text-lg">{content.dataVerdade.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[var(--border-subtle)]">
        {/* Left: What CRM knows (blurred/muted) */}
        <ScrollReveal variant="slide-right" className="relative">
          <div className="p-8 md:p-10 bg-[var(--bg-surface)] h-full" style={{ filter: 'saturate(0.3)' }}>
            <Overline className="text-[var(--text-muted)] block mb-6">O que seu CRM sabe</Overline>
            <div className="space-y-4">
              {content.dataVerdade.contrast.bad.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] shrink-0" />
                  <Body className="text-[var(--text-tertiary)]">{item}</Body>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px z-10" style={{ background: 'linear-gradient(180deg, transparent, var(--accent-amber), transparent)' }} />

        {/* Right: What it should know (vivid) */}
        <ScrollReveal variant="slide-left" delay={0.2}>
          <div className="p-8 md:p-10 bg-[var(--bg-elevated)] h-full">
            <Overline className="text-[var(--accent-green)] block mb-6">O que deveria saber</Overline>
            <div className="space-y-4">
              {content.dataVerdade.contrast.good.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0" />
                  <Body className="text-[var(--text-primary)] font-medium">{item}</Body>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { DataVerdade as ChapterDataVerdade }
