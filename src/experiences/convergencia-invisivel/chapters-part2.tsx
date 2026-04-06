'use client'

import { useState } from 'react'
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
import { PausePoint } from '@/components/workshop/pause-point'
import { TextReveal } from '@/components/motion/text-reveal'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { LazyParticleField } from '@/components/three/lazy-particle-field'
import { cn } from '@/lib/cn'
import { content } from './content'

const ease = [0.16, 1, 0.3, 1] as const

/* ═══════════════════════════════════════════════════
   Chapter 12 — O Modelo de Maturidade
   Ascending levels with blue accent.
   ═══════════════════════════════════════════════════ */

export function DataMaturidade() {
  return (
    <Section id="data-maturidade" bg="gradient-down">
      <AmbientBackground variant="mesh-dark" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Dados"
          headline={content.dataMaturidade.headline}
          align="left"
          size="display"
        />

        <div className="mt-16 space-y-4">
          {content.dataMaturidade.levels.map((level, i) => (
            <ScrollReveal key={level.name} delay={i * 0.1} variant="rise">
              <div
                className={cn(
                  'flex flex-col md:flex-row md:items-center gap-4 rounded-xl border border-[var(--border-subtle)] transition-all',
                  'hover:border-[var(--border-hover)]'
                )}
                style={{
                  padding: `${16 + i * 4}px ${24 + i * 4}px`,
                  opacity: 0.5 + i * 0.125,
                  marginLeft: `${i * 16}px`,
                }}
              >
                <span className="font-mono text-xs shrink-0 w-8" style={{ color: 'var(--accent-blue)' }}>
                  L{i + 1}
                </span>
                <SubHeading className="text-[var(--text-primary)]">{level.name}</SubHeading>
                <Body className="md:ml-auto md:text-right max-w-sm">{level.desc}</Body>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.7} variant="scale" className="mt-16 text-center">
          <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">
            <AnimatedCounter value={245} />%
          </StatNumber>
          <Body className="mt-3 text-sm text-[var(--text-muted)]">{content.dataMaturidade.statContext}</Body>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { DataMaturidade as ChapterDataMaturidade }

/* ═══════════════════════════════════════════════════
   Chapter 13 — Dado vs Insight
   Pipeline with glass cards and blue accent.
   ═══════════════════════════════════════════════════ */

export function DataDadoVsInsight() {
  return (
    <Section id="data-dado-vs-insight" bg="surface">
      <AmbientBackground variant="top-light" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Dados"
          headline={content.dataDadoVsInsight.headline}
          align="left"
          size="display"
        />

        <ScrollReveal className="mt-6 max-w-3xl" variant="blur">
          <Body className="text-lg">{content.dataDadoVsInsight.body}</Body>
        </ScrollReveal>

        <div className="mt-16 flex flex-col md:flex-row gap-4 items-stretch">
          {content.dataDadoVsInsight.pipeline.map((step, i) => (
            <ScrollReveal
              key={step.stage}
              delay={i * 0.12}
              variant={i % 2 === 0 ? 'scale' : 'blur'}
              className="flex-1"
            >
              <div className={cn(
                'glass p-6 rounded-xl h-full border',
                i === content.dataDadoVsInsight.pipeline.length - 1
                  ? 'border-[var(--accent-green)]/30'
                  : 'border-[var(--border-subtle)]'
              )}>
                <span className="font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <SubHeading className="mt-2 text-[var(--text-primary)]">{step.stage}</SubHeading>
                <Body className="mt-2 text-sm">{step.example}</Body>
              </div>
              {i < content.dataDadoVsInsight.pipeline.length - 1 && (
                <div className="hidden md:flex justify-center mt-4">
                  <span className="text-[var(--text-muted)] text-lg">→</span>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { DataDadoVsInsight as ChapterDataDadoVsInsight }

/* ═══════════════════════════════════════════════════
   Chapter 14 — O que AI Realmente Faz
   REDESIGNED: Terminal aesthetic with purple accent.
   ═══════════════════════════════════════════════════ */

export function AiOQueFaz() {
  return (
    <Section id="ai-o-que-faz" bg="primary">
      <AmbientBackground variant="mesh-dark" />
      <div className="relative z-10">
        <Overline className="block mb-4 text-[var(--accent-purple)]">Inteligencia Artificial</Overline>
        <TextReveal tag="h2" className="text-[clamp(1.75rem,5vw,3.5rem)] max-w-3xl">
          {content.aiOQueFaz.headline}
        </TextReveal>

        <ScrollReveal className="mt-6 max-w-3xl" variant="blur">
          <Body className="text-lg">{content.aiOQueFaz.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.aiOQueFaz.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12} variant="clip-up">
              <div className="terminal-card p-6 pt-8 h-full">
                <div className="font-mono text-xs text-[var(--accent-green)]/60 mb-4">$ ai --stat {i + 1}</div>
                <span className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none" style={{ color: 'var(--accent-purple)' }}>
                  <AnimatedCounter value={stat.value} />{stat.suffix}
                </span>
                <Body className="mt-3 text-sm">{stat.label}</Body>
                <span className="mt-2 block font-mono text-xs text-[var(--text-muted)]">{stat.source}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} variant="blur" className="mt-12">
          <div className="terminal-card p-6 pt-8 max-w-lg border-[var(--accent-red)]/30">
            <div className="font-mono text-xs text-[var(--accent-red)]/60 mb-3">$ warning --critical</div>
            <Body className="text-[var(--accent-red)] font-medium">{content.aiOQueFaz.warning}</Body>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiOQueFaz as ChapterAiOQueFaz }

/* ═══════════════════════════════════════════════════
   Chapter 15 — Onde AI Ganha
   Alternating scale/blur with purple accents.
   ═══════════════════════════════════════════════════ */

export function AiOndeGanha() {
  return (
    <Section id="ai-onde-ganha" bg="gradient-up">
      <CinematicHeadline
        overline="Inteligencia Artificial"
        headline={content.aiOndeGanha.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 space-y-8">
        {content.aiOndeGanha.cases.map((c, i) => (
          <ScrollReveal
            key={c.company}
            delay={i * 0.15}
            variant={i % 2 === 0 ? 'slide-right' : 'slide-left'}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-all duration-300" style={{ borderLeftColor: 'var(--accent-purple)', borderLeftWidth: '3px' }}>
              <div className="shrink-0">
                <span className="font-display text-2xl" style={{ color: 'var(--accent-purple)' }}>{c.company}</span>
                <Overline className="block mt-1 text-[var(--text-muted)]">{c.area}</Overline>
              </div>
              <Body className="text-[var(--text-primary)] font-medium text-lg md:ml-auto md:text-right max-w-md">
                {c.result}
              </Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} variant="blur" className="mt-12">
        <Body className="text-lg text-[var(--text-primary)] italic font-medium max-w-2xl">
          {content.aiOndeGanha.insight}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { AiOndeGanha as ChapterAiOndeGanha }

/* ═══════════════════════════════════════════════════
   Chapter 16 — As Armadilhas
   REDESIGNED: Warning pattern with red accent.
   ═══════════════════════════════════════════════════ */

export function AiArmadilhas() {
  return (
    <Section id="ai-armadilhas" bg="elevated">
      <div className="relative z-10">
        <Overline className="block mb-4 text-[var(--accent-red)]">Cuidado</Overline>
        <TextReveal tag="h2" className="text-[clamp(1.75rem,5vw,3.5rem)] max-w-3xl">
          {content.aiArmadilhas.headline}
        </TextReveal>

        <div className="mt-16 space-y-6">
          {content.aiArmadilhas.traps.map((trap, i) => (
            <ScrollReveal
              key={trap.name}
              delay={i * 0.12}
              variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
            >
              <div className="warning-stripes rounded-2xl p-8 border border-[var(--accent-red)]/15 hover:border-[var(--accent-red)]/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span
                    className="font-display text-[3rem] leading-none opacity-30 shrink-0"
                    style={{ color: 'var(--accent-red)', transform: `rotate(${(i - 1) * 3}deg)` }}
                  >
                    {trap.icon}
                  </span>
                  <div>
                    <SubHeading className="text-[var(--accent-red)]">{trap.name}</SubHeading>
                    <Body className="mt-2 text-[var(--text-primary)]">{trap.desc}</Body>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} variant="scale" className="mt-16 text-center">
          <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">{content.aiArmadilhas.stat}</StatNumber>
          <Body className="mt-3 text-sm text-[var(--text-muted)]">{content.aiArmadilhas.statContext}</Body>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiArmadilhas as ChapterAiArmadilhas }

/* ═══════════════════════════════════════════════════
   Chapter 17 — O Sistema Unico (CLIMAX)
   BorderRevealCard quadrants with breathing ambient.
   ═══════════════════════════════════════════════════ */

export function ConvergenciaSistema() {
  const quadrantColors = ['var(--accent-amber)', 'var(--accent-green)', 'var(--accent-blue)', 'var(--accent-purple)']
  const quadrantHex = ['#C8873A', '#4A7C5C', '#5B8FB9', '#8B6FB0']

  return (
    <Section id="convergencia-sistema-unico" bg="vignette">
      <AmbientBackground variant="diagonal-split" breathe />
      <div className="relative z-10">
        <Overline className="text-center block mb-6">A Convergencia</Overline>
        <TextReveal tag="h1" className="text-center" delay={0.2}>
          {content.convergenciaSistema.headline}
        </TextReveal>

        <ScrollReveal className="mt-6 max-w-2xl mx-auto text-center" variant="blur">
          <Body className="text-lg">{content.convergenciaSistema.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.convergenciaSistema.quadrants.map((q, i) => (
            <ScrollReveal key={q.name} delay={i * 0.15} variant="scale">
              <BorderRevealCard className="h-full" glowColor={`${quadrantHex[i]}80`}>
                <span className="font-display text-3xl font-bold" style={{ color: quadrantColors[i] }}>
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

        <ScrollReveal delay={0.7} variant="blur" className="mt-16 text-center gradient-border-top pt-8">
          <Body className="font-display text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] max-w-3xl mx-auto">
            {content.convergenciaSistema.closing}
          </Body>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { ConvergenciaSistema as ChapterConvergenciaSistema }

/* ═══════════════════════════════════════════════════
   Chapter 18 — Quem Lidera Isso?
   Different accent per role card.
   ═══════════════════════════════════════════════════ */

export function ConvergenciaLidera() {
  const roleColors = ['var(--accent-amber)', 'var(--accent-green)', 'var(--accent-blue)']

  return (
    <Section id="convergencia-quem-lidera" bg="gradient-up">
      <CinematicHeadline
        overline="Lideranca"
        headline={content.convergenciaLidera.headline}
        align="left"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl" variant="slide-right">
        <Body className="text-lg">{content.convergenciaLidera.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.convergenciaLidera.roles.map((role, i) => (
          <ScrollReveal key={role.title} delay={i * 0.12} variant="rise">
            <div
              className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] h-full hover:border-[var(--border-hover)] transition-all duration-300"
              style={{ borderTopWidth: '3px', borderTopColor: roleColors[i] }}
            >
              <SubHeading className={cn(
                    i === 0 && 'text-[var(--accent-amber)]',
                    i === 1 && 'text-[var(--accent-green)]',
                    i === 2 && 'text-[var(--accent-blue)]'
                  )}>{role.title}</SubHeading>
              <Body className="mt-4">{role.desc}</Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} variant="blur" className="mt-12">
        <PausePoint />
        <Body className="mt-6 text-lg text-[var(--accent-amber)] italic font-medium max-w-2xl">
          {content.convergenciaLidera.provocation}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { ConvergenciaLidera as ChapterConvergenciaLidera }

/* ═══════════════════════════════════════════════════
   Chapter 19 — Diagnostico Rapido
   Glass cards with dot-grid background.
   ═══════════════════════════════════════════════════ */

export function WorkshopDiagnostico() {
  const dimColors = ['var(--accent-amber)', 'var(--accent-green)', 'var(--accent-blue)', 'var(--accent-purple)', 'var(--text-primary)']

  return (
    <Section id="workshop-diagnostico" bg="surface" className="dot-grid">
      <CinematicHeadline
        overline="Workshop"
        headline={content.workshopDiagnostico.headline}
        align="center"
        size="display"
      />

      <div className="mt-16 space-y-4 max-w-3xl mx-auto">
        {content.workshopDiagnostico.dimensions.map((d, i) => (
          <ScrollReveal key={d.dim} delay={i * 0.1} variant="rise">
            <div className="glass rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
              <span
                className="font-display text-lg font-bold shrink-0 w-24"
                style={{ color: dimColors[i] }}
              >
                {d.dim}
              </span>
              <Body className="text-[var(--text-primary)]">{d.q}</Body>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export { WorkshopDiagnostico as ChapterWorkshopDiagnostico }

/* ═══════════════════════════════════════════════════
   Chapter 20 — Discussao: O que muda segunda-feira?
   REDESIGNED: Interactive flip cards.
   ═══════════════════════════════════════════════════ */

function FlipCard({ front, index }: { front: string; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const colors = ['var(--accent-amber)', 'var(--accent-green)', 'var(--accent-blue)']

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: '600px', minHeight: '200px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 flex flex-col justify-center backface-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="overline block mb-4" style={{ color: colors[index] }}>Pergunta {index + 1}</span>
        <Body className="text-[var(--text-primary)] font-medium text-lg">{front}</Body>
        <span className="mt-4 font-mono text-xs text-[var(--text-muted)]">Clique para refletir →</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-2xl border p-8 flex flex-col justify-center"
        style={{ backfaceVisibility: 'hidden', borderColor: colors[index] }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="overline block mb-4" style={{ color: colors[index] }}>Reflexao</span>
        <Body className="text-[var(--text-primary)] italic">
          Discuta com seu grupo: como isso se aplica a realidade da sua empresa? Que acao concreta voce pode tomar?
        </Body>
      </motion.div>
    </div>
  )
}

export function WorkshopDiscussao() {
  return (
    <Section id="workshop-discussao" bg="primary" className="dot-grid">
      <CinematicHeadline
        overline="Workshop"
        headline={content.workshopDiscussao.headline}
        align="center"
        size="display"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.workshopDiscussao.prompts.map((prompt, i) => (
          <ScrollReveal key={i} delay={i * 0.15} variant="scale">
            <FlipCard front={prompt} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export { WorkshopDiscussao as ChapterWorkshopDiscussao }

/* ═══════════════════════════════════════════════════
   Chapter 21 — A Janela de 24 Meses
   Blur-reveal timeline.
   ═══════════════════════════════════════════════════ */

export function FechamentoJanela() {
  return (
    <Section id="fechamento-janela-24-meses" bg="gradient-down">
      <AmbientBackground variant="bottom-fade" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Fechamento"
          headline={content.fechamentoJanela.headline}
          align="left"
          size="display"
        />

        <ScrollReveal className="mt-6 max-w-3xl" variant="blur">
          <Body className="text-lg">{content.fechamentoJanela.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            {content.fechamentoJanela.timeline.map((t, i) => (
              <ScrollReveal key={t.period} delay={i * 0.15} variant="blur">
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: i === 0 ? 'var(--accent-amber)' : i === 1 ? 'var(--text-secondary)' : 'var(--text-muted)',
                      }}
                    />
                    {i < content.fechamentoJanela.timeline.length - 1 && (
                      <div className="w-px h-16 bg-[var(--border-subtle)]" />
                    )}
                  </div>
                  <div>
                    <span className="font-display text-lg text-[var(--text-primary)]">{t.period}</span>
                    <Body className="mt-1">{t.status}</Body>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.4} variant="scale">
              <Card variant="stat" accentColor="amber" className="text-center">
                <StatNumber className="block text-[clamp(3rem,8vw,5rem)]">{content.fechamentoJanela.stat}</StatNumber>
                <Body className="mt-3 text-sm text-[var(--text-secondary)]">{content.fechamentoJanela.statContext}</Body>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { FechamentoJanela as ChapterFechamentoJanela }

/* ═══════════════════════════════════════════════════
   Chapter 22 — Provocacao Final
   Full hero with 3D particles and parallax.
   ═══════════════════════════════════════════════════ */

export function FechamentoProvocacao() {
  return (
    <Section id="fechamento-provocacao" bg="primary" fullHeight>
      <LazyParticleField color="#C8873A" count={1000} />
      <AmbientBackground variant="diagonal-split" breathe />
      <ParallaxContainer speed={0.12} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          <TextReveal tag="h2" className="text-[var(--text-hero)]" delay={0.3}>
            {content.fechamentoProvocacao.headline}
          </TextReveal>

          <motion.p
            className="mt-6 font-display text-2xl md:text-4xl text-[var(--accent-amber)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease }}
          >
            {content.fechamentoProvocacao.subline}
          </motion.p>

          <motion.p
            className="mt-12 text-[var(--text-secondary)] text-lg leading-relaxed max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            {content.fechamentoProvocacao.body}
          </motion.p>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Overline className="text-[var(--text-muted)]">CX Experience Lab — 2025</Overline>
          </motion.div>
        </div>
      </ParallaxContainer>
    </Section>
  )
}

export { FechamentoProvocacao as ChapterFechamentoProvocacao }
