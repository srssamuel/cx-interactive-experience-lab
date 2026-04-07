'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { SubHeading, Body, Overline, StatNumber } from '@/components/design-system/typography'
import { Card } from '@/components/design-system/card'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/stagger-group'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { DiscussionPrompt } from '@/components/workshop/discussion-prompt'
import { PausePoint } from '@/components/workshop/pause-point'
import { TextReveal } from '@/components/motion/text-reveal'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { LazyParticleField } from '@/components/three/lazy-particle-field'
import { Spotlight } from '@/components/effects/spotlight'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { CharReveal } from '@/components/motion/char-reveal'
import { FloatingElements } from '@/components/effects/floating-elements'
import { MovingBorder } from '@/components/effects/moving-border'
import { Layers, ScanSearch, BrainCircuit, Trophy, ShieldAlert, Merge, Users, ClipboardCheck, MessagesSquare, Clock, Flame } from 'lucide-react'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════
   Chapter 12 — O Modelo de Maturidade
   Ascending levels with accent-blue labels + rise animation.
   ═══════════════════════════════════════════════════ */

export function DataMaturidade() {
  return (
    <Section id="data-maturidade" bg="gradient-down" spacing="generous">
      <AmbientBackground variant="mesh-dark" />
      <BackgroundBeams color="rgba(91, 143, 185, 0.08)" beamCount={3} />
      <FloatingElements count={4} color="var(--accent-blue)" />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Dados"
        headline={content.dataMaturidade.headline}
        align="left"
        size="display"
        icon={<Layers className="w-4 h-4 text-[var(--accent-blue)]" />}
      />

      <div className="mt-16 space-y-4">
        {content.dataMaturidade.levels.map((level, i) => (
          <ScrollReveal key={level.name} delay={i * 0.1} variant="rise">
            <div
              className={cn(
                'flex flex-col md:flex-row md:items-center gap-4 rounded-xl border transition-all',
                i === content.dataMaturidade.levels.length - 1
                  ? 'border-[var(--accent-amber)]/30 bg-[var(--accent-amber-soft)] hover:border-[var(--accent-amber)]/50'
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-hover)]'
              )}
              style={{
                padding: `${16 + i * 4}px ${24 + i * 4}px`,
                opacity: 0.5 + i * 0.125,
                marginLeft: `${i * 16}px`,
              }}
            >
              <span
                className="font-mono text-xs shrink-0 w-8 font-bold"
                style={{ color: 'var(--accent-blue, #5B8FB9)' }}
              >
                L{i + 1}
              </span>
              <SubHeading
                as="h3"
                className={cn(
                  'text-base font-semibold shrink-0 min-w-[140px] text-[var(--accent-blue)]',
                  i === content.dataMaturidade.levels.length - 1 && 'text-[var(--accent-amber)]'
                )}
              >
                {level.name}
              </SubHeading>
              <Body as="span" className="text-sm">
                {level.desc}
              </Body>
              {i === content.dataMaturidade.levels.length - 1 && (
                <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-amber)] opacity-70">
                  target
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.6} variant="rise" className="mt-16 flex items-baseline gap-4">
        <span className="font-display text-5xl md:text-6xl text-[var(--accent-amber)]">
          <AnimatedCounter value={245} suffix="%" />
        </span>
        <Body className="text-lg max-w-md">
          {content.dataMaturidade.statContext}
        </Body>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { DataMaturidade as ChapterDataMaturidade }

/* ═══════════════════════════════════════════════════
   Chapter 13 — Dado vs Insight
   Pipeline with accent-blue stages + glass cards.
   ═══════════════════════════════════════════════════ */

export function DataDadoVsInsight() {
  return (
    <Spotlight className="w-full" color="rgba(91, 143, 185, 0.05)" size={700}>
    <Section id="data-dado-vs-insight" bg="surface" spacing="compact">
      <AmbientBackground variant="top-light" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Dados"
          headline={content.dataDadoVsInsight.headline}
          align="center"
          size="display"
          icon={<ScanSearch className="w-4 h-4 text-[var(--accent-blue)]" />}
        />

        <ScrollReveal className="mt-6 max-w-2xl mx-auto text-center">
          <Body className="text-lg">{content.dataDadoVsInsight.body}</Body>
        </ScrollReveal>

        <div className="mt-16 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
          {content.dataDadoVsInsight.pipeline.map((step, i) => (
            <div key={step.stage} className="flex-1 flex items-stretch">
              <ScrollReveal delay={i * 0.12} className="flex-1">
                <BorderRevealCard
                  glowColor={i === content.dataDadoVsInsight.pipeline.length - 1 ? 'rgba(74, 124, 92, 0.4)' : 'rgba(91, 143, 185, 0.4)'}
                  tilt={false}
                  className={cn(
                    'h-full !p-5 !rounded-xl md:!rounded-none !border-[var(--border-subtle)]',
                    i === 0 && 'md:!rounded-l-xl',
                    i === content.dataDadoVsInsight.pipeline.length - 1 && 'md:!rounded-r-xl !bg-[var(--accent-green-soft)] !border-[var(--accent-green)]/20'
                  )}
                >
                  <span
                    className="overline block mb-2"
                    style={{
                      color: i === content.dataDadoVsInsight.pipeline.length - 1
                        ? 'var(--accent-green)'
                        : 'var(--accent-blue)',
                    }}
                  >
                    {step.stage}
                  </span>
                  <Body as="span" className="text-sm">{step.example}</Body>
                </BorderRevealCard>
              </ScrollReveal>
              {i < content.dataDadoVsInsight.pipeline.length - 1 && (
                <motion.span
                  className="hidden md:flex items-center text-lg px-1"
                  style={{ color: 'var(--accent-blue, #5B8FB9)' }}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
    </Spotlight>
  )
}

export { DataDadoVsInsight as ChapterDataDadoVsInsight }

/* ═══════════════════════════════════════════════════
   Chapter 14 — O que AI Realmente Faz
   TERMINAL AESTHETIC — monospace, green text, command-line cards.
   ═══════════════════════════════════════════════════ */

export function AiOQueFaz() {
  const commands = ['$ ai --analyze --depth=full', '$ ai --predict --confidence=0.92', '$ ai --automate --scope=cx']

  return (
    <Section id="ai-o-que-realmente-faz" bg="primary" spacing="generous">
      <AmbientBackground variant="mesh-dark" />
      <div className="relative z-10">
        <Overline className="mb-4 text-[var(--accent-purple)] flex items-center gap-2">
          <BrainCircuit className="w-4 h-4" />Inteligencia Artificial
        </Overline>
        <h2
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]"
          style={{ color: 'var(--accent-purple, #8B6FB0)' }}
        >
          {content.aiOQueFaz.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.aiOQueFaz.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12} variant="clip-up">
              <div className="terminal-card rounded-lg border border-[#4A7C5C]/30 p-6 bg-[#0a1a10]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#4A7C5C]/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C75B5B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4A7C5C]" />
                  <span className="font-mono text-[10px] text-[#4A7C5C]/60 ml-2">terminal</span>
                </div>
                <p className="font-mono text-xs text-[#4A7C5C]/70 mb-3">
                  {commands[i] || '$ ai --run'}
                </p>
                <span className="font-mono text-4xl font-bold block" style={{ color: '#4A7C5C' }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-mono text-sm mt-3" style={{ color: '#4A7C5C' }}>
                  {stat.label}
                </p>
                <p className="font-mono text-[10px] mt-2 text-[var(--text-muted)]">
                  // {stat.source}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} variant="clip-up" className="mt-12 max-w-3xl">
          <Body className="text-lg">{content.aiOQueFaz.body}</Body>
        </ScrollReveal>

        <ScrollReveal delay={0.6} variant="clip-up" className="mt-8">
          <div className="terminal-card rounded-lg border border-[#4A7C5C]/30 p-5 bg-[#0a1a10]">
            <p className="font-mono text-xs text-[#C75B5B] mb-2">$ WARNING: ROI_CHECK_FAILED</p>
            <p className="font-mono text-sm" style={{ color: '#4A7C5C' }}>
              {content.aiOQueFaz.warning}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiOQueFaz as ChapterAiOQueFaz }

/* ═══════════════════════════════════════════════════
   Chapter 15 — Onde AI Realmente Ganha
   Case cards with accent-purple, alternating scale/blur.
   ═══════════════════════════════════════════════════ */

export function AiOndeGanha() {
  const bgVariants = ['surface', 'elevated', 'surface'] as const
  return (
    <Section id="ai-onde-ganha" bg="primary">
      <BackgroundBeams color="rgba(139, 111, 176, 0.06)" beamCount={4} />
      <FloatingElements count={5} color="var(--accent-purple)" />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Inteligencia Artificial"
        headline={content.aiOndeGanha.headline}
        align="left"
        size="display"
        icon={<Trophy className="w-4 h-4 text-[var(--accent-purple)]" />}
      />

      {/* Stacked full-width case study cards — each with watermark company name */}
      <div className="mt-16 space-y-6">
        {content.aiOndeGanha.cases.map((c, i) => (
          <ScrollReveal key={c.company} delay={i * 0.15} variant={i === 1 ? 'blur' : 'rise'}>
            <BorderRevealCard
              glowColor="rgba(139, 111, 176, 0.35)"
              tilt={false}
              className={cn(
                '!rounded-xl',
                i === 0 && '!bg-[var(--bg-surface)]',
                i === 1 && '!bg-[var(--bg-elevated)]',
                i === 2 && '!bg-[var(--bg-surface)]'
              )}
            >
              <div className="relative overflow-hidden">
              {/* Watermark company name */}
              <span
                className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[clamp(4rem,12vw,8rem)] text-[var(--accent-purple)] opacity-[0.04] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {c.company}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <Overline className="block text-[var(--accent-purple)] mb-3">
                    {c.area}
                  </Overline>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight text-[var(--text-primary)]">
                    {c.company}
                  </h3>
                </div>
                <div className="md:text-right md:max-w-sm">
                  <Body className="text-lg text-[var(--text-primary)] font-medium leading-snug">
                    {c.result}
                  </Body>
                </div>
              </div>
              </div>
            </BorderRevealCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Insight — centered breathing glow */}
      <ScrollReveal delay={0.5} className="mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-8 py-6 rounded-2xl bg-[var(--accent-amber-soft)] border border-[var(--accent-amber)]/20">
            <Body className="text-lg text-[var(--text-primary)] font-medium italic">
              {content.aiOndeGanha.insight}
            </Body>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiOndeGanha as ChapterAiOndeGanha }

/* ═══════════════════════════════════════════════════
   Chapter 16 — As Armadilhas
   WARNING PATTERN — hazard stripes, accent-red, rotated numbers.
   ═══════════════════════════════════════════════════ */

export function AiArmadilhas() {
  return (
    <Section id="ai-armadilhas" bg="elevated" spacing="compact">
      <AmbientBackground variant="diagonal-split" />
      <div className="relative z-10">
      <Overline className="text-center mb-6 text-sm tracking-[0.25em] uppercase text-[var(--accent-red)] flex items-center justify-center gap-2">
        <ShieldAlert className="w-4 h-4" />CAUTION
      </Overline>

      <h2
        className="font-display text-4xl md:text-6xl lg:text-7xl text-center leading-[0.95] tracking-[-0.02em]"
        style={{ color: 'var(--accent-red, #C75B5B)' }}
      >
        {content.aiArmadilhas.headline}
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.aiArmadilhas.traps.map((trap, i) => (
          <ScrollReveal
            key={trap.name}
            delay={i * 0.18}
            variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
          >
            <div
              className="warning-stripes relative rounded-xl overflow-hidden border p-6 pt-20"
              style={{ borderColor: 'rgba(199, 91, 91, 0.3)' }}
            >
              <span
                className="absolute top-3 left-4 font-display text-[5rem] leading-none font-bold opacity-15 select-none"
                style={{
                  color: 'var(--accent-red, #C75B5B)',
                  transform: `rotate(-8deg)`,
                }}
              >
                {trap.icon.padStart(2, '0')}
              </span>

              <SubHeading
                as="h3"
                className="relative z-10 text-lg mb-3 text-[var(--accent-red)]"
              >
                {trap.name}
              </SubHeading>
              <Body className="relative z-10 text-sm">{trap.desc}</Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} variant="slide-left" className="mt-16 text-center">
        <span
          className="font-display text-5xl md:text-6xl"
          style={{ color: 'var(--accent-red, #C75B5B)' }}
        >
          <AnimatedCounter value={72} suffix="%" />
        </span>
        <Body className="mt-3 max-w-lg mx-auto">
          {content.aiArmadilhas.statContext}
        </Body>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiArmadilhas as ChapterAiArmadilhas }

/* ═══════════════════════════════════════════════════
   Chapter 17 — O Sistema Unico (CLIMAX)
   BorderRevealCards + AmbientBackground breathe + scale reveals.
   ═══════════════════════════════════════════════════ */

export function ConvergenciaSistema() {
  const quadrantColors = ['#5B8FB9', '#4A7C5C', '#8B6FB0', '#C75B5B']

  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.07)" size={800}>
    <Section id="convergencia-sistema-unico" bg="vignette" spacing="dramatic">
      <BackgroundBeams color="rgba(200, 135, 58, 0.12)" beamCount={5} />
      <AmbientBackground variant="diagonal-split" breathe={true} />
      <div className="relative z-10">
        <Overline className="text-center mb-6 flex items-center justify-center gap-2"><Merge className="w-4 h-4 text-[var(--accent-amber)]" />A Convergencia</Overline>
        <CharReveal
          tag="h1"
          className="text-center text-[var(--text-hero)]"
          delay={0.2}
          stagger={0.02}
          color="var(--accent-amber)"
        >
          {content.convergenciaSistema.headline}
        </CharReveal>

        <ScrollReveal className="mt-6 max-w-2xl mx-auto text-center">
          <Body className="text-lg">{content.convergenciaSistema.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.convergenciaSistema.quadrants.map((q, i) => (
            <ScrollReveal key={q.name} delay={i * 0.15} variant="scale">
              <BorderRevealCard
                className="h-full"
                glowColor={`${quadrantColors[i]}80`}
              >
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: quadrantColors[i] }}
                >
                  {q.name}
                </span>
                <Body className="mt-3 text-[var(--text-primary)] font-medium">{q.role}</Body>
                <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                  <Overline className="text-[var(--text-muted)] block mb-1">Sozinho</Overline>
                  <Body className="text-sm text-[var(--text-tertiary)]">{q.alone}</Body>
                </div>
              </BorderRevealCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.7} variant="scale" className="mt-16 text-center">
          <motion.p
            className="gradient-border-top font-display text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] max-w-3xl mx-auto pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {content.convergenciaSistema.closing}
          </motion.p>
        </ScrollReveal>
      </div>
    </Section>
    </Spotlight>
  )
}

export { ConvergenciaSistema as ChapterConvergenciaSistema }

/* ═══════════════════════════════════════════════════
   Chapter 18 — Quem Lidera Isso?
   Each role card uses a different accent (amber, green, blue).
   ═══════════════════════════════════════════════════ */

export function ConvergenciaLidera() {
  const roleAccents = ['var(--accent-amber)', 'var(--accent-green)', 'var(--accent-blue)']
  const roleBorders = ['rgba(200, 135, 58, 0.25)', 'rgba(74, 124, 92, 0.25)', 'rgba(91, 143, 185, 0.25)']

  return (
    <Section id="convergencia-quem-lidera" bg="gradient-up">
      <BackgroundBeams color="rgba(200, 135, 58, 0.05)" beamCount={3} />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Lideranca"
        headline={content.convergenciaLidera.headline}
        align="left"
        size="display"
        icon={<Users className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.convergenciaLidera.body}</Body>
      </ScrollReveal>

      {/* Alternating left-right role cards with connecting vertical line */}
      <div className="mt-16 relative">
        {/* Vertical connector line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border-default)] to-transparent hidden md:block" aria-hidden="true" />

        <div className="space-y-12 md:space-y-16">
          {content.convergenciaLidera.roles.map((role, i) => {
            const isLeft = i % 2 === 0
            return (
              <ScrollReveal key={role.title} delay={i * 0.2} variant={isLeft ? 'slide-left' : 'slide-right'}>
                <div className={cn(
                  'relative flex flex-col md:flex-row items-center gap-8',
                  !isLeft && 'md:flex-row-reverse'
                )}>
                  {/* Role card — takes half width */}
                  <div className={cn('w-full md:w-5/12', isLeft ? 'md:text-right' : 'md:text-left')}>
                    <span
                      className="block font-mono text-xs uppercase tracking-[0.2em] mb-3 opacity-50"
                      style={{ color: roleAccents[i] }}
                    >
                      Role 0{i + 1}
                    </span>
                    <h3
                      className="font-display text-2xl md:text-3xl tracking-tight mb-4"
                      style={{ color: roleAccents[i] }}
                    >
                      {role.title}
                    </h3>
                    <Body className="text-base">{role.desc}</Body>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2"
                      style={{ borderColor: roleAccents[i], backgroundColor: `${roleBorders[i]}` }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 + 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    />
                  </div>

                  {/* Empty half for asymmetry */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Provocation — full-width centered */}
      <ScrollReveal delay={0.6} className="mt-20">
        <motion.p
          className="font-display text-2xl md:text-3xl leading-[1.2] text-[var(--text-primary)] text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {content.convergenciaLidera.provocation}
        </motion.p>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { ConvergenciaLidera as ChapterConvergenciaLidera }

/* ═══════════════════════════════════════════════════
   Chapter 19 — Diagnostico Rapido
   Glass dimension cards + dot-grid background.
   ═══════════════════════════════════════════════════ */

export function WorkshopDiagnostico() {
  const dimColors: Record<string, string> = {
    CX: '#5B8FB9',
    CS: '#4A7C5C',
    Dados: '#8B6FB0',
    AI: '#C75B5B',
    Integracao: '#C8873A',
  }

  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.04)" size={600}>
    <Section id="workshop-diagnostico" bg="surface" className="dot-grid" spacing="generous">
      <AmbientBackground variant="radial-amber" />
      <div className="relative z-10">
      <PausePoint label="Workshop" />

      <CinematicHeadline
        overline="Diagnostico"
        headline={content.workshopDiagnostico.headline}
        align="center"
        size="display"
        icon={<ClipboardCheck className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <StaggerGroup className="mt-12 space-y-5 max-w-3xl mx-auto">
        {content.workshopDiagnostico.dimensions.map((dim, i) => {
          const color = dimColors[dim.dim] || 'var(--text-secondary)'
          return (
          <StaggerItem key={dim.dim}>
            <div
              className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
              style={{ paddingLeft: `${20 + i * 8}px` }}
            >
              {/* Colored left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: color }}
              />
              <div className="flex items-start gap-5 p-6 pl-4">
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <span
                    className="font-mono text-[0.65rem] font-bold tracking-widest uppercase opacity-50"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-mono text-sm font-bold px-3 py-1.5 rounded-md"
                    style={{
                      color,
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {dim.dim}
                  </span>
                </div>
                <Body className="text-base text-[var(--text-primary)] pt-1 leading-relaxed">{dim.q}</Body>
              </div>
            </div>
          </StaggerItem>
          )
        })}
      </StaggerGroup>
      </div>
    </Section>
    </Spotlight>
  )
}

export { WorkshopDiagnostico as ChapterWorkshopDiagnostico }

/* ═══════════════════════════════════════════════════
   Chapter 20 — O que Muda Segunda-Feira?
   INTERACTIVE FLIP CARDS — Framer Motion rotateY on hover.
   ═══════════════════════════════════════════════════ */

function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="relative w-full"
      style={{ perspective: '600px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full min-h-[260px]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex items-center justify-center p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="font-display text-xl md:text-2xl text-center leading-snug text-[var(--text-primary)]">
            {front}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center p-8 rounded-xl border border-[var(--accent-green)]/30 bg-[var(--accent-green-soft,_#0d1f14)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-base text-center leading-relaxed text-[var(--text-primary)]">
            {back}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function WorkshopDiscussao() {
  const backTexts = [
    'Identifique o atrito mais silencioso — aquele que ninguem reclama, mas que faz o cliente desistir.',
    'O dado que conecta CX e CS e o que mostra comportamento, nao opiniao.',
    'O dono do sistema integrado e quem tem mandato sobre a experiencia end-to-end.',
  ]

  return (
    <Section id="workshop-discussao" bg="green-glow" className="dot-grid">
      <FloatingElements count={6} color="var(--accent-green)" />
      <div className="relative z-10">
      <PausePoint label="Discussao em grupo" />

      <CinematicHeadline
        overline="Workshop"
        headline={content.workshopDiscussao.headline}
        align="center"
        size="display"
        icon={<MessagesSquare className="w-4 h-4 text-[var(--accent-green)]" />}
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {content.workshopDiscussao.prompts.map((prompt, i) => (
          <ScrollReveal key={i} delay={i * 0.2}>
            <FlipCard
              front={prompt}
              back={backTexts[i] || `Reflexao ${i + 1}`}
            />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.7} className="mt-8 text-center">
        <Body className="text-sm text-[var(--text-muted)]">
          Passe o mouse ou toque para revelar o contexto
        </Body>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { WorkshopDiscussao as ChapterWorkshopDiscussao }

/* ═══════════════════════════════════════════════════
   Chapter 21 — A Janela de 24 Meses
   Timeline with blur reveal for items.
   ═══════════════════════════════════════════════════ */

export function FechamentoJanela() {
  return (
    <Section id="fechamento-janela" bg="primary">
      <AmbientBackground variant="bottom-fade" />
      <BackgroundBeams color="rgba(200, 135, 58, 0.06)" beamCount={2} />
      <div className="relative z-10">
      <CinematicHeadline
        overline="Fechamento"
        headline={content.fechamentoJanela.headline}
        align="left"
        size="display"
        icon={<Clock className="w-4 h-4 text-[var(--accent-amber)]" />}
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.fechamentoJanela.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-0">
          {content.fechamentoJanela.timeline.map((t, i) => (
            <ScrollReveal key={t.period} delay={i * 0.2} variant="blur">
              <div className="flex items-stretch gap-6">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      'w-4 h-4 rounded-full border-2 shrink-0',
                      i === 0
                        ? 'bg-[var(--accent-amber)] border-[var(--accent-amber)]'
                        : 'bg-transparent border-[var(--text-muted)]'
                    )}
                  />
                  {i < content.fechamentoJanela.timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border-subtle)] my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <span className={cn(
                    'font-display text-2xl',
                    i === 0 ? 'text-[var(--accent-amber)]' : 'text-[var(--text-tertiary)]'
                  )}>
                    {t.period}
                  </span>
                  <Body className="mt-2 text-base">{t.status}</Body>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} variant="blur" className="lg:col-span-2">
          <Card variant="stat" accentColor="amber" className="text-center">
            <span className="font-display text-5xl md:text-6xl text-[var(--accent-amber)]">
              <AnimatedCounter value={48} prefix="$" suffix="B" />
            </span>
            <Body className="mt-4 text-sm">
              {content.fechamentoJanela.statContext}
            </Body>
          </Card>
        </ScrollReveal>
      </div>
      </div>
    </Section>
  )
}

export { FechamentoJanela as ChapterFechamentoJanela }

/* ═══════════════════════════════════════════════════
   Chapter 22 — Provocacao Final
   Full viewport + ParallaxContainer + LazyParticleField background.
   ═══════════════════════════════════════════════════ */

export function FechamentoProvocacao() {
  return (
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.06)" size={800}>
    <Section id="fechamento-provocacao" bg="primary" fullHeight spacing="dramatic">
      <AmbientBackground variant="diagonal-split" />
      <BackgroundBeams color="rgba(200, 135, 58, 0.10)" beamCount={4} />
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <LazyParticleField bloom interactive />
      </div>
      <ParallaxContainer speed={0.12} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Overline className="mb-8 flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-[var(--accent-amber)]" />Provocacao Final
            </Overline>
          </motion.div>

          <CharReveal
            tag="h2"
            className="text-[var(--text-hero)]"
            delay={0.3}
            stagger={0.03}
          >
            {content.fechamentoProvocacao.headline}
          </CharReveal>

          <motion.p
            className="mt-8 font-display text-2xl md:text-4xl text-gradient-amber"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {content.fechamentoProvocacao.subline}
          </motion.p>

          <motion.p
            className="mt-12 text-[var(--text-secondary)] text-lg leading-relaxed max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {content.fechamentoProvocacao.body}
          </motion.p>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <Overline className="text-[var(--text-muted)]">
              CX Experience Lab — 2025
            </Overline>
          </motion.div>
        </div>
      </ParallaxContainer>
    </Section>
    </Spotlight>
  )
}

export { FechamentoProvocacao as ChapterFechamentoProvocacao }
