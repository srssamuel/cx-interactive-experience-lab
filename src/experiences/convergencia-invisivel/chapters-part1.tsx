'use client'

import { Section } from '@/components/design-system'
import { Body, Overline } from '@/components/design-system/typography'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { GsapTextReveal } from '@/components/cinematic/gsap-text-reveal'
import { CinematicCounter } from '@/components/cinematic/cinematic-counter'
import { GlitchText } from '@/components/cinematic/glitch-text'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════════════════
   CH1 — ABERTURA
   Full viewport centered hero. Giant stat. Typography-first.
   ═══════════════════════════════════════════════════════════════ */

export function Abertura() {
  const d = content.abertura
  return (
    <Section id="abertura" bg="amber-glow" fullHeight>
      <AmbientBackground variant="radial-amber" opacity={0.6} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh]">
        {/* Giant stat — the hero element */}
        <ScrollReveal variant="scale" duration={1.2}>
          <div
            className="font-display leading-none text-[var(--text-primary)] tracking-tight"
            style={{ fontSize: 'clamp(5rem, 14vw, 10rem)' }}
          >
            {d.stat}
          </div>
        </ScrollReveal>

        {/* Stat label — mono micro */}
        <ScrollReveal delay={0.3}>
          <p className="mt-6 font-mono text-xs md:text-sm text-[var(--text-muted)] tracking-widest uppercase max-w-md">
            {d.statLabel}
          </p>
        </ScrollReveal>

        {/* Headline — word reveal */}
        <div className="mt-16 max-w-3xl">
          <GsapTextReveal
            tag="h2"
            variant="words"
            className="text-[var(--text-primary)]"
            stagger={0.06}
            delay={0.5}
          >
            {d.headline}
          </GsapTextReveal>
        </div>

        {/* Body */}
        <ScrollReveal delay={0.8}>
          <Body className="mt-10 max-w-xl mx-auto">{d.body}</Body>
        </ScrollReveal>

        {/* Provocation */}
        <ScrollReveal delay={1.0}>
          <p className="mt-12 text-[var(--accent-amber-vivid)] italic text-lg md:text-xl font-serif max-w-lg">
            {d.provocation}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { Abertura as ChapterAbertura }

/* ═══════════════════════════════════════════════════════════════
   CH2 — O MUNDO MUDOU
   Vertical editorial stack. 3 stats with generous spacing.
   ═══════════════════════════════════════════════════════════════ */

export function ContextoMundoMudou() {
  const d = content.contextoMundoMudou
  return (
    <Section id="contexto-mundo-mudou" bg="gradient-down" spacing="generous">
      <AmbientBackground variant="top-light" opacity={0.5} />
      <div className="relative z-10">
        {/* Headline — left aligned, dramatic */}
        <div className="max-w-4xl">
          <GsapTextReveal
            tag="h2"
            variant="words"
            stagger={0.05}
            className="text-[var(--text-primary)]"
          >
            {d.headline}
          </GsapTextReveal>
        </div>

        {/* Vertical stat stack */}
        <div className="mt-20 md:mt-28 space-y-20 md:space-y-24">
          {d.points.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.15} variant="fade">
              <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16">
                {/* Large stat */}
                <div className="shrink-0 md:w-48">
                  <CinematicCounter
                    value={parseFloat(point.stat)}
                    suffix="%"
                    className="text-6xl md:text-7xl"
                    glowIntensity="low"
                  />
                </div>
                {/* Text + source */}
                <div className="flex-1 max-w-2xl">
                  <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed">
                    {point.text}
                  </p>
                  <p className="mt-3 font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
                    {point.source}
                  </p>
                </div>
              </div>
              {/* Divider between stats */}
              {i < d.points.length - 1 && (
                <div className="mt-20 md:mt-24 w-16 h-px bg-[var(--border-subtle)]" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Closing quote */}
        <ScrollReveal delay={0.5}>
          <blockquote className="mt-24 md:mt-32 text-center max-w-3xl mx-auto text-lg md:text-xl italic text-[var(--text-secondary)] leading-relaxed">
            &ldquo;{d.closing}&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { ContextoMundoMudou as ChapterContextoMundoMudou }

/* ═══════════════════════════════════════════════════════════════
   CH3 — A ILUSAO DIGITAL
   Before/After horizontal split. Glitch headline.
   ═══════════════════════════════════════════════════════════════ */

export function ContextoIlusao() {
  const d = content.contextoIlusao
  return (
    <Section id="contexto-ilusao" bg="surface" spacing="normal">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Glitch headline */}
        <ScrollReveal variant="blur">
          <h2
            className="font-display leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            <GlitchText intensity="low">{d.headline}</GlitchText>
          </h2>
        </ScrollReveal>

        {/* Body */}
        <ScrollReveal delay={0.2}>
          <Body className="max-w-2xl mb-20">{d.body}</Body>
        </ScrollReveal>

        {/* Before / After split */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-0 items-stretch">
          {/* BEFORE */}
          <ScrollReveal variant="slide-right" delay={0.1}>
            <div className="p-8 md:p-12">
              <Overline className="text-[var(--text-muted)] mb-4">O que mediram</Overline>
              <p className="font-mono text-sm md:text-base text-[var(--text-muted)] leading-loose opacity-60">
                {d.contrast.before}
              </p>
            </div>
          </ScrollReveal>

          {/* Vertical divider */}
          <div className="hidden md:block bg-[var(--border-subtle)]" />

          {/* AFTER */}
          <ScrollReveal variant="slide-left" delay={0.2}>
            <div className="p-8 md:p-12">
              <Overline className="text-[var(--accent-amber-vivid)] mb-4">O que deveriam ter medido</Overline>
              <p className="text-base md:text-lg text-[var(--text-primary)] leading-loose font-medium">
                {d.contrast.after}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Centered 40% stat */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 text-center">
            <CinematicCounter
              value={40}
              suffix="%"
              className="text-7xl md:text-8xl"
              glowIntensity="low"
            />
            <p className="mt-4 text-sm text-[var(--text-muted)] max-w-md mx-auto">
              {d.statContext}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { ContextoIlusao as ChapterContextoIlusao }

/* ═══════════════════════════════════════════════════════════════
   CH4 — CX EQUACAO
   Massive equation typography. Pillars below.
   ═══════════════════════════════════════════════════════════════ */

export function CxEquacao() {
  const d = content.cxEquacao
  return (
    <Section id="cx-equacao" bg="amber-glow" spacing="generous">
      <AmbientBackground variant="radial-amber" opacity={0.4} />
      <div className="relative z-10">
        {/* Headline */}
        <div className="max-w-4xl">
          <GsapTextReveal tag="h2" variant="words" stagger={0.05} className="text-[var(--text-primary)]">
            {d.headline}
          </GsapTextReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <Body className="mt-8 max-w-2xl">{d.body}</Body>
        </ScrollReveal>

        {/* Equation — massive stacked terms */}
        <div className="mt-20 md:mt-28 flex flex-col items-center gap-4">
          {['Expectativa', 'Percepcao', 'Memoria'].map((term, i) => (
            <ScrollReveal key={term} delay={0.2 + i * 0.2} variant="rise">
              <div className="flex items-center gap-4 md:gap-8">
                <span
                  className="font-display text-[var(--text-primary)] leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
                >
                  {term}
                </span>
                {i < 2 && (
                  <span
                    className="font-display text-[var(--accent-amber-vivid)] leading-none opacity-50"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                  >
                    {'\u00D7'}
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Equals sign + result */}
          <ScrollReveal delay={0.9} variant="scale">
            <div className="mt-6 flex items-center gap-6">
              <span
                className="font-display text-[var(--text-muted)] opacity-40"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                =
              </span>
              <span
                className="font-display text-[var(--accent-amber-vivid)] leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
              >
                Experiencia
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Three pillars — horizontal with connecting line */}
        <div className="mt-24 md:mt-32 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-0 left-[10%] right-[10%] h-px bg-[var(--border-subtle)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {d.pillars.map((pillar, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.15} variant="fade">
                <div className="relative pt-8">
                  {/* Dot on the line */}
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-amber-vivid)]" />
                  <h4 className="font-display text-lg text-[var(--text-primary)] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
export { CxEquacao as ChapterCxEquacao }

/* ═══════════════════════════════════════════════════════════════
   CH5 — CX EXPERIENCIA
   Blueprint vs Reality dual tracks. 225% stat bridge.
   ═══════════════════════════════════════════════════════════════ */

const blueprintWidths = [1.2, 0.8, 1.5, 0.6, 1.0, 1.3, 0.7, 1.1]
const realityWidths = [1.8, 0.3, 0.5, 2.1, 0.4, 1.6, 0.9, 0.6]
const realitySkews = [-3, 5, -2, 4, -6, 2, -4, 3]

export function CxExperiencia() {
  const d = content.cxExperiencia
  return (
    <Section id="cx-experiencia" bg="primary" spacing="generous">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline */}
        <GsapTextReveal tag="h2" variant="words" stagger={0.05} className="text-[var(--text-primary)]">
          {d.headline}
        </GsapTextReveal>

        <ScrollReveal delay={0.2}>
          <Body className="mt-8 max-w-2xl">{d.body}</Body>
        </ScrollReveal>

        {/* Blueprint track — clean, structured */}
        <ScrollReveal delay={0.3} variant="clip-up">
          <div className="mt-20">
            <Overline className="text-[var(--text-muted)] mb-4">Blueprint</Overline>
            <div className="flex gap-1 h-3">
              {blueprintWidths.map((w, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{
                    flex: w,
                    backgroundColor: `rgba(200, 135, 58, ${0.15 + i * 0.04})`,
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 225% stat bridge */}
        <ScrollReveal delay={0.5} variant="scale">
          <div className="my-16 md:my-20 text-center">
            <CinematicCounter
              value={225}
              suffix="%"
              className="text-7xl md:text-8xl"
              glowIntensity="medium"
            />
            <p className="mt-3 text-sm text-[var(--text-muted)] max-w-sm mx-auto">
              {d.statContext}
            </p>
          </div>
        </ScrollReveal>

        {/* Reality track — messy, skewed */}
        <ScrollReveal delay={0.6} variant="clip-up">
          <div>
            <Overline className="text-[var(--text-muted)] mb-4">Realidade</Overline>
            <div className="flex gap-2 h-3">
              {realityWidths.map((w, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{
                    flex: w,
                    backgroundColor: `rgba(138, 145, 156, ${0.1 + (i % 3) * 0.08})`,
                    transform: `skewX(${realitySkews[i]}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Insight callout */}
        <ScrollReveal delay={0.7}>
          <div className="mt-20 pl-6 border-l-2 border-[var(--accent-amber-vivid)] max-w-2xl">
            <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed italic">
              {d.insight}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CxExperiencia as ChapterCxExperiencia }

/* ═══════════════════════════════════════════════════════════════
   CH6 — CX CUSTO
   4 escalating stats wall. Alternating left/right.
   ═══════════════════════════════════════════════════════════════ */

export function CxCusto() {
  const d = content.cxCusto
  return (
    <Section id="cx-custo" bg="gradient-down" spacing="generous">
      <AmbientBackground variant="bottom-fade" opacity={0.5} />
      <div className="relative z-10">
        {/* Headline */}
        <div className="max-w-4xl">
          <GsapTextReveal tag="h2" variant="words" stagger={0.04} className="text-[var(--text-primary)]">
            {d.headline}
          </GsapTextReveal>
        </div>

        {/* 4 stats — alternating alignment */}
        <div className="mt-20 md:mt-28 space-y-16 md:space-y-20">
          {d.stats.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.12}
              variant={i % 2 === 0 ? 'slide-right' : 'slide-left'}
            >
              <div
                className={cn(
                  'flex flex-col',
                  i % 2 === 0 ? 'items-start' : 'items-end text-right'
                )}
              >
                <CinematicCounter
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  className="text-6xl md:text-7xl lg:text-8xl"
                  glowIntensity="low"
                />
                <p className="mt-3 text-base md:text-lg text-[var(--text-secondary)] max-w-md">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Source */}
        <ScrollReveal delay={0.6}>
          <p className="mt-16 font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase text-center">
            {d.source}
          </p>
        </ScrollReveal>

        {/* Closing */}
        <ScrollReveal delay={0.7}>
          <blockquote className="mt-12 text-center max-w-2xl mx-auto text-lg md:text-xl italic text-[var(--text-secondary)] leading-relaxed">
            &ldquo;{d.closing}&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CxCusto as ChapterCxCusto }

/* ═══════════════════════════════════════════════════════════════
   CH7 — CX REFLEXAO
   Staircase maturity levels. Level 4 highlighted amber.
   ═══════════════════════════════════════════════════════════════ */

export function CxReflexao() {
  const d = content.cxReflexao
  return (
    <Section id="cx-reflexao" bg="vignette" spacing="generous">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <TextReveal tag="h2" className="text-[clamp(1.8rem,4vw,3rem)]" variant="slide">
          {d.headline}
        </TextReveal>

        {/* Staircase levels */}
        <div className="mt-20 md:mt-28 space-y-6">
          {d.levels.map((level, i) => {
            const isHighlighted = level.level === 4
            return (
              <ScrollReveal key={i} delay={0.1 + i * 0.15} variant="fade">
                <div
                  className="relative flex items-start gap-6 md:gap-10"
                  style={{ paddingLeft: `${i * 2}rem` }}
                >
                  {/* Vertical thread */}
                  {i < d.levels.length - 1 && (
                    <div
                      className="absolute left-0 top-full h-6 border-l border-[var(--border-subtle)]"
                      style={{ marginLeft: `${i * 2 + 0.75}rem` }}
                    />
                  )}

                  {/* Level number */}
                  <span
                    className={cn(
                      'shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm',
                      isHighlighted
                        ? 'bg-[var(--accent-amber-vivid)] text-[var(--bg-primary)] font-bold'
                        : 'border border-[var(--border-subtle)] text-[var(--text-muted)]'
                    )}
                  >
                    {level.level}
                  </span>

                  {/* Content */}
                  <div className="pt-1">
                    <h4
                      className={cn(
                        'font-display text-xl md:text-2xl',
                        isHighlighted ? 'text-[var(--accent-amber-vivid)]' : 'text-[var(--text-primary)]'
                      )}
                    >
                      {level.name}
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                      {level.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Provocation */}
        <ScrollReveal delay={0.7}>
          <p className="mt-20 md:mt-28 text-center text-lg md:text-xl text-[var(--text-primary)] italic max-w-xl mx-auto">
            {d.provocation}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CxReflexao as ChapterCxReflexao }

/* ═══════════════════════════════════════════════════════════════
   CH8 — CS PARADOXO
   Paradox reveal. 3 horizontal stats. Green accent.
   ═══════════════════════════════════════════════════════════════ */

export function CsParadoxo() {
  const d = content.csParadoxo
  return (
    <Section id="cs-paradoxo" bg="green-glow" spacing="generous">
      <AmbientBackground variant="radial-green" opacity={0.5} />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline */}
        <GsapTextReveal tag="h2" variant="words" stagger={0.05} className="text-[var(--text-primary)]">
          {d.headline}
        </GsapTextReveal>

        <ScrollReveal delay={0.2}>
          <Body className="mt-8 max-w-2xl">{d.body}</Body>
        </ScrollReveal>

        {/* 3 stats — horizontal */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {d.stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.3 + i * 0.15} variant="rise">
              <div className="text-center md:text-left">
                <CinematicCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl md:text-6xl"
                  color="var(--accent-green)"
                  glowIntensity="low"
                />
                <p className="mt-3 text-sm md:text-base text-[var(--text-secondary)]">
                  {stat.label}
                </p>
                <p className="mt-1 font-mono text-xs text-[var(--text-muted)] tracking-wider">
                  {stat.source}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Insight box — green left border */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 pl-6 border-l-2 border-[var(--accent-green)] max-w-3xl">
            <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed italic">
              {d.insight}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CsParadoxo as ChapterCsParadoxo }

/* ═══════════════════════════════════════════════════════════════
   CH9 — CS METRICAS
   Stacked metric debunking. Struck-through names.
   ═══════════════════════════════════════════════════════════════ */

export function CsMetricas() {
  const d = content.csMetricas
  return (
    <Section id="cs-metricas" bg="surface" spacing="generous">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <GsapTextReveal tag="h2" variant="words" stagger={0.04} className="text-[var(--text-primary)]">
          {d.headline}
        </GsapTextReveal>

        {/* Metrics stack */}
        <div className="mt-20 md:mt-28 space-y-16 md:space-y-20">
          {d.metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.15} variant="clip-up">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Struck-through metric name */}
                <div className="shrink-0 md:w-40">
                  <span className="font-display text-4xl md:text-5xl text-[var(--text-muted)] line-through decoration-[var(--accent-amber-vivid)] decoration-2 opacity-50">
                    {metric.name}
                  </span>
                </div>
                {/* Truth text with accent bar */}
                <div className="flex-1 pl-6 border-l-2 border-[var(--accent-amber-vivid)] border-opacity-40">
                  <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed">
                    {metric.reality}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Alternative CES box */}
        <ScrollReveal delay={0.6}>
          <BorderRevealCard className="mt-20 md:mt-28" glowColor="rgba(74, 124, 92, 0.4)">
            <Overline className="text-[var(--accent-green)] mb-3">A alternativa</Overline>
            <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed">
              {d.alternative}
            </p>
          </BorderRevealCard>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CsMetricas as ChapterCsMetricas }

/* ═══════════════════════════════════════════════════════════════
   CH10 — CS EXPANSAO
   Giant centered stat. Right-aligned headline.
   ═══════════════════════════════════════════════════════════════ */

export function CsExpansao() {
  const d = content.csExpansao
  return (
    <Section id="cs-expansao" bg="green-glow" spacing="generous">
      <AmbientBackground variant="deep-ocean" opacity={0.5} />
      <div className="relative z-10">
        {/* Headline — right aligned */}
        <div className="ml-auto max-w-3xl text-right">
          <GsapTextReveal tag="h2" variant="words" stagger={0.05} className="text-[var(--text-primary)]">
            {d.headline}
          </GsapTextReveal>
        </div>

        {/* Giant centered 250% */}
        <ScrollReveal delay={0.4} variant="scale">
          <div className="mt-20 md:mt-28 text-center">
            <CinematicCounter
              value={250}
              suffix="%"
              className="text-8xl md:text-[10rem] lg:text-[12rem]"
              color="var(--accent-green)"
              glowIntensity="medium"
            />
            <p className="mt-6 text-sm md:text-base text-[var(--text-muted)] max-w-md mx-auto">
              {d.statContext}
            </p>
          </div>
        </ScrollReveal>

        {/* Body + closing */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <Body>{d.body}</Body>
            <p className="mt-10 text-lg md:text-xl italic text-[var(--accent-green)] leading-relaxed">
              {d.closing}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
export { CsExpansao as ChapterCsExpansao }

/* ═══════════════════════════════════════════════════════════════
   CH11 — DATA VERDADE
   Cemetery vs Signals contrast. Dead data vs Living signals.
   ═══════════════════════════════════════════════════════════════ */

export function DataVerdade() {
  const d = content.dataVerdade
  const tiltAngles = [-1.5, 2, -2.5, 1]
  return (
    <Section id="data-verdade" bg="primary" spacing="generous">
      <AmbientBackground variant="radial-teal" opacity={0.4} />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline */}
        <GsapTextReveal tag="h2" variant="words" stagger={0.05} className="text-[var(--text-primary)]">
          {d.headline}
        </GsapTextReveal>

        <ScrollReveal delay={0.2}>
          <Body className="mt-8 max-w-2xl">{d.body}</Body>
        </ScrollReveal>

        {/* Dead data — muted, tilted */}
        <div className="mt-20 md:mt-24">
          <Overline className="text-[var(--text-muted)] mb-6 opacity-50">Dados mortos</Overline>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {d.contrast.bad.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08} variant="fade">
                <div
                  className="p-4 md:p-6 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--border-subtle)] opacity-40"
                  style={{ transform: `rotate(${tiltAngles[i]}deg)` }}
                >
                  <p className="font-mono text-xs md:text-sm text-[var(--text-muted)] line-through">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Living signals — bright, pulsing */}
        <div className="mt-16 md:mt-20">
          <Overline className="text-[var(--accent-green)] mb-6">Sinais vivos</Overline>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {d.contrast.good.map((item, i) => (
              <ScrollReveal key={i} delay={0.3 + i * 0.08} variant="rise">
                <div className="p-4 md:p-6 rounded-lg border border-[rgba(74,124,92,0.3)] bg-[rgba(74,124,92,0.05)]">
                  <div className="flex items-start gap-3">
                    {/* Pulsing dot */}
                    <span className="mt-1.5 shrink-0 relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]" />
                    </span>
                    <p className="text-xs md:text-sm text-[var(--text-primary)] font-medium">
                      {item}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
export { DataVerdade as ChapterDataVerdade }
