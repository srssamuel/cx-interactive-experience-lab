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
import { PausePoint } from '@/components/workshop/pause-point'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════
   Chapter 12 — O Modelo de Maturidade
   Five ascending levels as horizontal bands.
   ═══════════════════════════════════════════════════ */

export function DataMaturidade() {
  return (
    <Section id="data-maturidade" bg="gradient-down">
      <CinematicHeadline
        overline="Dados"
        headline={content.dataMaturidade.headline}
        align="left"
        size="display"
      />

      <div className="mt-16 space-y-4">
        {content.dataMaturidade.levels.map((level, i) => (
          <ScrollReveal key={level.name} delay={i * 0.1}>
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
              <span className="font-mono text-xs text-[var(--text-muted)] shrink-0 w-8">
                L{i + 1}
              </span>
              <SubHeading as="h3" className="text-base font-semibold shrink-0 min-w-[140px]">
                {level.name}
              </SubHeading>
              <Body as="span" className="text-sm">
                {level.desc}
              </Body>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.6} className="mt-16 flex items-baseline gap-4">
        <span className="font-display text-5xl md:text-6xl text-[var(--accent-amber)]">
          <AnimatedCounter value={245} suffix="%" />
        </span>
        <Body className="text-lg max-w-md">
          {content.dataMaturidade.statContext}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { DataMaturidade as ChapterDataMaturidade }

/* ═══════════════════════════════════════════════════
   Chapter 13 — Dado vs Insight
   Pipeline visualization: 5 stages connected.
   ═══════════════════════════════════════════════════ */

export function DataDadoVsInsight() {
  return (
    <Section id="data-dado-vs-insight" bg="surface">
      <CinematicHeadline
        overline="Dados"
        headline={content.dataDadoVsInsight.headline}
        align="center"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-2xl mx-auto text-center">
        <Body className="text-lg">{content.dataDadoVsInsight.body}</Body>
      </ScrollReveal>

      <div className="mt-16 flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
        {content.dataDadoVsInsight.pipeline.map((step, i) => (
          <div key={step.stage} className="flex-1 flex items-stretch">
            <ScrollReveal delay={i * 0.12} className="flex-1">
              <div
                className={cn(
                  'h-full p-5 rounded-xl md:rounded-none border border-[var(--border-subtle)]',
                  i === 0 && 'md:rounded-l-xl',
                  i === content.dataDadoVsInsight.pipeline.length - 1 && 'md:rounded-r-xl',
                  i === content.dataDadoVsInsight.pipeline.length - 1 && 'bg-[var(--accent-green-soft)] border-[var(--accent-green)]/20'
                )}
              >
                <Overline className={cn(
                  'block mb-2',
                  i === content.dataDadoVsInsight.pipeline.length - 1 ? 'text-[var(--accent-green)]' : ''
                )}>
                  {step.stage}
                </Overline>
                <Body as="span" className="text-sm">{step.example}</Body>
              </div>
            </ScrollReveal>
            {i < content.dataDadoVsInsight.pipeline.length - 1 && (
              <span className="hidden md:flex items-center text-[var(--text-muted)] text-lg px-1">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export { DataDadoVsInsight as ChapterDataDadoVsInsight }

/* ═══════════════════════════════════════════════════
   Chapter 14 — O que AI Realmente Faz
   Three stats top, body center, warning bottom.
   ═══════════════════════════════════════════════════ */

export function AiOQueFaz() {
  return (
    <Section id="ai-o-que-realmente-faz" bg="amber-glow">
      <AmbientBackground variant="corner-glow" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Inteligencia Artificial"
          headline={content.aiOQueFaz.headline}
          align="left"
          size="display"
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.aiOQueFaz.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card variant="stat" accentColor="amber">
                <span className="font-display text-4xl text-[var(--accent-amber)]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <Body as="span" className="block mt-3 text-sm">{stat.label}</Body>
                <span className="block mt-1 font-mono text-xs text-[var(--text-muted)]">{stat.source}</span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.3} className="mt-12 max-w-3xl">
          <Body className="text-lg">{content.aiOQueFaz.body}</Body>
        </ScrollReveal>

        <ScrollReveal delay={0.5} className="mt-8">
          <Card variant="bordered" hover={false}>
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">⚠</span>
              <Body className="text-[var(--accent-amber)] font-medium text-base">
                {content.aiOQueFaz.warning}
              </Body>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  )
}

export { AiOQueFaz as ChapterAiOQueFaz }

/* ═══════════════════════════════════════════════════
   Chapter 15 — Onde AI Realmente Ganha
   Three case study cards + insight highlight.
   ═══════════════════════════════════════════════════ */

export function AiOndeGanha() {
  return (
    <Section id="ai-onde-ganha" bg="primary">
      <CinematicHeadline
        overline="Inteligencia Artificial"
        headline={content.aiOndeGanha.headline}
        align="left"
        size="display"
      />

      <div className="mt-12 space-y-6">
        {content.aiOndeGanha.cases.map((c, i) => (
          <ScrollReveal key={c.company} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="shrink-0">
                <Overline className="text-[var(--accent-amber)] block">{c.area}</Overline>
                <SubHeading as="h3" className="text-xl mt-1">{c.company}</SubHeading>
              </div>
              <div className="flex-1 md:border-l md:border-[var(--border-subtle)] md:pl-6">
                <Body className="text-base text-[var(--text-primary)]">{c.result}</Body>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} className="mt-12">
        <Card variant="highlight" accentColor="amber">
          <Body className="text-lg text-[var(--text-primary)] font-medium">
            {content.aiOndeGanha.insight}
          </Body>
        </Card>
      </ScrollReveal>
    </Section>
  )
}

export { AiOndeGanha as ChapterAiOndeGanha }

/* ═══════════════════════════════════════════════════
   Chapter 16 — As Armadilhas
   Three numbered trap cards + stat.
   ═══════════════════════════════════════════════════ */

export function AiArmadilhas() {
  return (
    <Section id="ai-armadilhas" bg="elevated">
      <CinematicHeadline
        overline="Inteligencia Artificial"
        headline={content.aiArmadilhas.headline}
        align="center"
        size="display"
      />

      <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.aiArmadilhas.traps.map((trap) => (
          <StaggerItem key={trap.name}>
            <Card variant="bordered" hover={true}>
              <span className="font-display text-5xl text-[var(--text-muted)]/30 block mb-4">
                {trap.icon.padStart(2, '0')}
              </span>
              <SubHeading as="h3" className="text-lg mb-3">{trap.name}</SubHeading>
              <Body className="text-sm">{trap.desc}</Body>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.4} className="mt-16 text-center">
        <span className="font-display text-5xl md:text-6xl text-[var(--accent-amber)]">
          <AnimatedCounter value={72} suffix="%" />
        </span>
        <Body className="mt-3 max-w-lg mx-auto">
          {content.aiArmadilhas.statContext}
        </Body>
      </ScrollReveal>
    </Section>
  )
}

export { AiArmadilhas as ChapterAiArmadilhas }

/* ═══════════════════════════════════════════════════
   Chapter 17 — O Sistema Unico (CLIMAX)
   Four quadrant 2x2 grid. Powerful visual.
   ═══════════════════════════════════════════════════ */

export function ConvergenciaSistema() {
  const quadrantColors = ['#5B8FB9', '#4A7C5C', '#8B6FB0', '#C75B5B']

  return (
    <Section id="convergencia-sistema-unico" bg="vignette">
      <AmbientBackground variant="diagonal-split" />
      <div className="relative z-10">
        <CinematicHeadline
          overline="A Convergencia"
          headline={content.convergenciaSistema.headline}
          align="center"
          size="hero"
        />

        <ScrollReveal className="mt-6 max-w-2xl mx-auto text-center">
          <Body className="text-lg">{content.convergenciaSistema.body}</Body>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.convergenciaSistema.quadrants.map((q, i) => (
            <ScrollReveal key={q.name} delay={i * 0.15}>
              <motion.div
                className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] h-full"
                whileHover={{ borderColor: quadrantColors[i], transition: { duration: 0.3 } }}
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
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.7} className="mt-16 text-center">
          <motion.p
            className="font-display text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] max-w-3xl mx-auto"
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
  )
}

export { ConvergenciaSistema as ChapterConvergenciaSistema }

/* ═══════════════════════════════════════════════════
   Chapter 18 — Quem Lidera Isso?
   Three role cards + provocation.
   ═══════════════════════════════════════════════════ */

export function ConvergenciaLidera() {
  return (
    <Section id="convergencia-quem-lidera" bg="gradient-up">
      <CinematicHeadline
        overline="Lideranca"
        headline={content.convergenciaLidera.headline}
        align="left"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.convergenciaLidera.body}</Body>
      </ScrollReveal>

      <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.convergenciaLidera.roles.map((role) => (
          <StaggerItem key={role.title}>
            <Card variant="accent" accentColor="green" className="h-full">
              <SubHeading as="h3" className="text-lg mb-3">{role.title}</SubHeading>
              <Body className="text-sm">{role.desc}</Body>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ScrollReveal delay={0.5} className="mt-16">
        <div className="border-t border-[var(--border-default)] pt-8 text-center">
          <motion.p
            className="font-display text-2xl md:text-3xl leading-[1.2] text-[var(--text-primary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {content.convergenciaLidera.provocation}
          </motion.p>
        </div>
      </ScrollReveal>
    </Section>
  )
}

export { ConvergenciaLidera as ChapterConvergenciaLidera }

/* ═══════════════════════════════════════════════════
   Chapter 19 — Diagnostico Rapido
   Five dimension cards with questions.
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
    <Section id="workshop-diagnostico" bg="surface">
      <PausePoint label="Workshop" />

      <CinematicHeadline
        overline="Diagnostico"
        headline={content.workshopDiagnostico.headline}
        align="center"
        size="display"
      />

      <StaggerGroup className="mt-12 space-y-4 max-w-3xl mx-auto">
        {content.workshopDiagnostico.dimensions.map((dim) => (
          <StaggerItem key={dim.dim}>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <span
                className="font-mono text-sm font-bold shrink-0 w-20 text-center py-1 rounded"
                style={{
                  color: dimColors[dim.dim] || 'var(--text-secondary)',
                  backgroundColor: `${dimColors[dim.dim] || 'var(--text-secondary)'}15`,
                }}
              >
                {dim.dim}
              </span>
              <Body className="text-base text-[var(--text-primary)]">{dim.q}</Body>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  )
}

export { WorkshopDiagnostico as ChapterWorkshopDiagnostico }

/* ═══════════════════════════════════════════════════
   Chapter 20 — O que Muda Segunda-Feira?
   Three prompt cards. Facilitation moment.
   ═══════════════════════════════════════════════════ */

export function WorkshopDiscussao() {
  return (
    <Section id="workshop-discussao" bg="green-glow">
      <PausePoint label="Discussao em grupo" />

      <CinematicHeadline
        overline="Workshop"
        headline={content.workshopDiscussao.headline}
        align="center"
        size="display"
      />

      <div className="mt-12 space-y-6 max-w-3xl mx-auto">
        {content.workshopDiscussao.prompts.map((prompt, i) => (
          <ScrollReveal key={i} delay={i * 0.2}>
            <DiscussionPrompt
              question={prompt}
              context={`Pergunta ${i + 1} de ${content.workshopDiscussao.prompts.length}`}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}

export { WorkshopDiscussao as ChapterWorkshopDiscussao }

/* ═══════════════════════════════════════════════════
   Chapter 21 — A Janela de 24 Meses
   Timeline: 2025, 2026, 2027+. Stat at side.
   ═══════════════════════════════════════════════════ */

export function FechamentoJanela() {
  return (
    <Section id="fechamento-janela" bg="primary">
      <CinematicHeadline
        overline="Fechamento"
        headline={content.fechamentoJanela.headline}
        align="left"
        size="display"
      />

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.fechamentoJanela.body}</Body>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-0">
          {content.fechamentoJanela.timeline.map((t, i) => (
            <ScrollReveal key={t.period} delay={i * 0.2}>
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

        <ScrollReveal delay={0.5} className="lg:col-span-2">
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
    </Section>
  )
}

export { FechamentoJanela as ChapterFechamentoJanela }

/* ═══════════════════════════════════════════════════
   Chapter 22 — Provocacao Final
   Full viewport. Giant headline. Minimal, powerful.
   ═══════════════════════════════════════════════════ */

export function FechamentoProvocacao() {
  return (
    <Section id="fechamento-provocacao" bg="primary" fullHeight>
      <AmbientBackground variant="diagonal-split" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <motion.h2
          className="font-display leading-[1.05] tracking-tight"
          style={{ fontSize: 'var(--text-hero)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {content.fechamentoProvocacao.headline}
        </motion.h2>

        <motion.p
          className="mt-6 font-display text-2xl md:text-4xl text-[var(--accent-amber)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {content.fechamentoProvocacao.subline}
        </motion.p>

        <motion.p
          className="mt-12 text-[var(--text-secondary)] text-lg leading-relaxed max-w-[560px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] as const }}
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
          <Overline className="text-[var(--text-muted)]">
            CX Experience Lab — 2025
          </Overline>
        </motion.div>
      </div>
    </Section>
  )
}

export { FechamentoProvocacao as ChapterFechamentoProvocacao }
