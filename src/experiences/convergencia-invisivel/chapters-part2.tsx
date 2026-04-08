'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { SubHeading, Body, Overline } from '@/components/design-system/typography'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { StaggerGroup, StaggerItem } from '@/components/motion/stagger-group'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { PausePoint } from '@/components/workshop/pause-point'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { BorderRevealCard } from '@/components/effects/border-reveal-card'
import { Spotlight } from '@/components/effects/spotlight'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { FloatingElements } from '@/components/effects/floating-elements'
import { MovingBorder } from '@/components/effects/moving-border'
import { GsapTextReveal } from '@/components/cinematic/gsap-text-reveal'
import { CinematicCounter } from '@/components/cinematic/cinematic-counter'
import { GlitchText } from '@/components/cinematic/glitch-text'
import { DataPipeline } from '@/components/cinematic/data-pipeline'
import { HeartbeatLine } from '@/components/cinematic/heartbeat-line'
import { InteractiveParticles } from '@/components/effects/interactive-particles'
import { LazyCinematicParticleField } from '@/components/three/lazy-cinematic-particle-field'
import { LazyWaveDistortion } from '@/components/three/lazy-wave-distortion'
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
      <BackgroundBeams color="rgba(38, 198, 218, 0.35)" beamCount={3} />
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
                  ? 'border-[var(--accent-blue)]/30 bg-[var(--accent-blue-soft)] hover:border-[var(--accent-blue)]/50'
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
                style={{ color: 'var(--accent-blue, #26C6DA)' }}
              >
                L{i + 1}
              </span>
              <SubHeading
                as="h3"
                className={cn(
                  'text-base font-semibold shrink-0 min-w-[140px] text-[var(--accent-blue)]',
                  i === content.dataMaturidade.levels.length - 1 && 'text-[var(--accent-blue)]'
                )}
              >
                {level.name}
              </SubHeading>
              <Body as="span" className="text-sm">
                {level.desc}
              </Body>
              {i === content.dataMaturidade.levels.length - 1 && (
                <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-blue)] opacity-70">
                  target
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} className="mt-12">
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-[var(--accent-blue)]/15 bg-[var(--bg-primary)]/60">
          <HeartbeatLine state="healthy" className="h-[130px]" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.6} variant="rise" className="mt-10 flex items-baseline gap-4">
        <CinematicCounter
          value={245}
          suffix="%"
          className="text-5xl md:text-6xl"
          glowIntensity="high"
          color="var(--accent-blue-vivid)"
        />
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
    <Spotlight className="w-full" color="rgba(38, 198, 218, 0.15)" size={700}>
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

        {/* Animated data pipeline visualization */}
        <ScrollReveal delay={0.3} className="mt-16">
          <DataPipeline
            stages={content.dataDadoVsInsight.pipeline.map((step) => ({
              label: step.stage,
              description: step.example,
            }))}
            className="mb-8"
          />
        </ScrollReveal>
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
      <LazyWaveDistortion
        color1="#0a1a10"
        color2="#7C4DFF"
        color3="#00BCD4"
        speed={0.25}
        intensity={0.6}
      />
      <div className="relative z-10">
        <Overline className="mb-4 text-[var(--accent-purple)] flex items-center gap-2">
          <BrainCircuit className="w-4 h-4" />Inteligencia Artificial
        </Overline>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
          <GlitchText intensity="low" color="var(--accent-purple, #7C4DFF)">
            {content.aiOQueFaz.headline}
          </GlitchText>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.aiOQueFaz.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12} variant="clip-up">
              <div className="terminal-card rounded-lg border border-[#00BCD4]/30 p-6 bg-[#0a1a10]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00BCD4]/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E74C3C]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-blue)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00BCD4]" />
                  <span className="font-mono text-[10px] text-[#00BCD4]/60 ml-2">terminal</span>
                </div>
                <p className="font-mono text-xs text-[#00BCD4]/70 mb-3">
                  {commands[i] || '$ ai --run'}
                </p>
                <span className="font-mono text-4xl font-bold block" style={{ color: '#00BCD4' }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-mono text-sm mt-3" style={{ color: '#00BCD4' }}>
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
          <div className="terminal-card rounded-lg border border-[#00BCD4]/30 p-5 bg-[#0a1a10]">
            <p className="font-mono text-xs text-[#E74C3C] mb-2">$ WARNING: ROI_CHECK_FAILED</p>
            <p className="font-mono text-sm" style={{ color: '#00BCD4' }}>
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
  const podiumDelays = [0.4, 0.2, 0.6]
  return (
    <Section id="ai-onde-ganha" bg="primary">
      <AmbientBackground variant="diagonal-split" />
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--accent-purple)] inline-flex items-center gap-2">
        <Trophy className="w-4 h-4" />Inteligencia Artificial
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="words"
        stagger={0.06}
        glowColor="rgba(124, 77, 255, 0.4)"
      >
        {content.aiOndeGanha.headline}
      </GsapTextReveal>

      {/* Podium-style case cards — varying heights like a winners' podium */}
      <div className="mt-16 flex flex-col md:flex-row items-end gap-6 max-w-5xl mx-auto">
        {content.aiOndeGanha.cases.map((c, i) => (
          <ScrollReveal key={c.company} delay={podiumDelays[i]} variant="rise" className="flex-1 w-full">
            <motion.div
              className={cn(
                'relative rounded-2xl border overflow-hidden p-8 flex flex-col justify-end',
                'md:min-h-[200px]',
                i === 1
                  ? 'border-[var(--accent-purple)]/40 bg-[var(--accent-purple)]/10 md:min-h-[280px]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]'
              )}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              {/* Trophy icon for winner */}
              {i === 1 && (
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
                >
                  <Trophy className="w-8 h-8 text-[var(--accent-purple)] opacity-40" />
                </motion.div>
              )}

              {/* Watermark rank */}
              <span
                className="absolute -bottom-4 -right-2 font-display text-[7rem] leading-none font-bold opacity-[0.05] select-none pointer-events-none"
                style={{ color: i === 1 ? 'var(--accent-purple)' : 'var(--text-primary)' }}
                aria-hidden="true"
              >
                #{i + 1}
              </span>

              <Overline className="block text-[var(--accent-purple)] mb-3 relative z-10">
                {c.area}
              </Overline>
              <h3 className={cn(
                'font-display text-2xl tracking-tight relative z-10',
                i === 1 ? 'text-[var(--accent-purple)]' : 'text-[var(--text-primary)]'
              )}>
                {c.company}
              </h3>
              <Body className="mt-4 text-base text-[var(--text-primary)] font-medium leading-snug relative z-10">
                {c.result}
              </Body>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Insight — horizontal accent bar */}
      <ScrollReveal delay={0.7} className="mt-16">
        <div className="max-w-3xl mx-auto px-8 py-6 rounded-xl border-l-2 border-[var(--accent-purple)]/40 bg-[var(--accent-purple)]/8">
          <Body className="text-lg text-[var(--text-primary)] font-medium italic">
            {content.aiOndeGanha.insight}
          </Body>
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

      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-center leading-[0.95] tracking-[-0.02em]">
        <GlitchText intensity="high" color="var(--accent-red, #E74C3C)">
          {content.aiArmadilhas.headline}
        </GlitchText>
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
              style={{ borderColor: 'rgba(231, 76, 60, 0.3)' }}
            >
              <span
                className="absolute top-3 left-4 font-display text-[5rem] leading-none font-bold opacity-15 select-none"
                style={{
                  color: 'var(--accent-red, #E74C3C)',
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
        <CinematicCounter
          value={72}
          suffix="%"
          className="text-5xl md:text-6xl"
          color="#E74C3C"
          glowIntensity="high"
        />
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
  const quadrantColors = ['#42A5F5', '#00BCD4', '#26C6DA', '#7C4DFF']

  return (
    <Spotlight className="w-full" color="rgba(52, 152, 219, 0.25)" size={900}>
    <Section id="convergencia-sistema-unico" bg="vignette" spacing="dramatic">
      <LazyCinematicParticleField
        color="#3498DB"
        count={2500}
        interactive
        bloomIntensity={1.5}
        chromaticAberration
        vignette
      />
      <InteractiveParticles preset="neural-network" color="#5DADE2" count={50} interactive />
      {/* Convergence center orb — unique to climax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <motion.div
          className="w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(52,152,219,0.6) 0%, rgba(52,152,219,0.2) 40%, transparent 70%)',
            boxShadow: '0 0 80px rgba(52,152,219,0.4), 0 0 160px rgba(52,152,219,0.2)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative z-10">
        <Overline className="text-center mb-6 flex items-center justify-center gap-2"><Merge className="w-4 h-4 text-[var(--accent-blue)]" />A Convergencia</Overline>
        <GsapTextReveal
          tag="h1"
          className="text-center text-[var(--text-hero)]"
          variant="chars"
          delay={0.2}
          stagger={0.025}
          color="var(--accent-blue)"
          glowColor="rgba(52, 152, 219, 0.6)"
        >
          {content.convergenciaSistema.headline}
        </GsapTextReveal>

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
  const roleAccents = ['#42A5F5', '#00BCD4', '#26C6DA']
  const roleIcons = ['CXO', 'CSO', 'CDO']

  return (
    <Section id="convergencia-quem-lidera" bg="gradient-up">
      <AmbientBackground variant="bottom-fade" />
      <InteractiveParticles preset="neural-network" color="#3498DB" count={45} interactive />
      {/* Animated hexagonal network — unique to leadership chapter */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="opacity-[0.06]" preserveAspectRatio="xMidYMid slice">
          {[
            { cx: 200, cy: 150 }, { cx: 400, cy: 100 }, { cx: 600, cy: 150 },
            { cx: 300, cy: 300 }, { cx: 500, cy: 300 },
            { cx: 200, cy: 450 }, { cx: 400, cy: 500 }, { cx: 600, cy: 450 },
          ].map((pos, i) => (
            <g key={i}>
              <polygon
                points={`${pos.cx},${pos.cy - 30} ${pos.cx + 26},${pos.cy - 15} ${pos.cx + 26},${pos.cy + 15} ${pos.cx},${pos.cy + 30} ${pos.cx - 26},${pos.cy + 15} ${pos.cx - 26},${pos.cy - 15}`}
                fill="none" stroke="#3498DB" strokeWidth="1.5"
              >
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
              </polygon>
              {/* Pulsing dot at center */}
              <circle cx={pos.cx} cy={pos.cy} r="3" fill="#3498DB">
                <animate attributeName="r" values="2;5;2" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          {/* Animated data flow along connections */}
          {[
            { x1: 200, y1: 150, x2: 400, y2: 100 },
            { x1: 400, y1: 100, x2: 600, y2: 150 },
            { x1: 200, y1: 150, x2: 300, y2: 300 },
            { x1: 600, y1: 150, x2: 500, y2: 300 },
            { x1: 300, y1: 300, x2: 500, y2: 300 },
          ].map((line, i) => (
            <g key={`line-${i}`}>
              <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#3498DB" strokeWidth="0.8" opacity="0.4" />
              {/* Traveling dot */}
              <circle r="2.5" fill="#5DADE2">
                <animateMotion dur={`${3 + i * 0.7}s`} repeatCount="indefinite">
                  <mpath href={`#path-${i}`} />
                </animateMotion>
              </circle>
              <path id={`path-${i}`} d={`M${line.x1},${line.y1} L${line.x2},${line.y2}`} fill="none" />
            </g>
          ))}
        </svg>
      </div>
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <Users className="w-4 h-4 text-[var(--accent-blue)]" />Lideranca
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="words"
        stagger={0.06}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.convergenciaLidera.headline}
      </GsapTextReveal>

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.convergenciaLidera.body}</Body>
      </ScrollReveal>

      {/* Horizontal role cards with unique "badge" identifiers */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {content.convergenciaLidera.roles.map((role, i) => (
          <ScrollReveal key={role.title} delay={i * 0.2} variant="rise">
            <motion.div
              className="relative rounded-2xl border p-8 pt-14 overflow-hidden transition-colors h-full"
              style={{ borderColor: `${roleAccents[i]}30` }}
              whileHover={{
                borderColor: `${roleAccents[i]}60`,
                y: -4,
                transition: { duration: 0.4 },
              }}
            >
              {/* Role badge */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: `linear-gradient(90deg, transparent, ${roleAccents[i]}, transparent)` }}
              />
              <span
                className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] opacity-40"
                style={{ color: roleAccents[i] }}
              >
                {roleIcons[i]}
              </span>

              <h3
                className="font-display text-2xl tracking-tight mb-4"
                style={{ color: roleAccents[i] }}
              >
                {role.title}
              </h3>
              <Body className="text-base">{role.desc}</Body>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Provocation — dramatic centered */}
      <ScrollReveal delay={0.7} className="mt-20">
        <GsapTextReveal
          tag="p"
          className="text-center text-[clamp(1.25rem,3vw,2rem)] max-w-2xl mx-auto text-[var(--text-primary)]"
          variant="words"
          stagger={0.04}
          delay={0.2}
        >
          {content.convergenciaLidera.provocation}
        </GsapTextReveal>
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
    CX: '#42A5F5',
    CS: '#00BCD4',
    Dados: '#7C4DFF',
    AI: '#E74C3C',
    Integracao: '#3498DB',
  }

  return (
    <Section id="workshop-diagnostico" bg="surface" className="dot-grid" spacing="generous">
      <InteractiveParticles preset="constellation" color="#3498DB" count={35} interactive speed={0.6} />
      {/* Animated radar chart background — unique diagnostic visual */}
      <div className="absolute inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-[500px] h-[500px] opacity-[0.08]">
          {/* Concentric pentagons with pulse animation */}
          {[0.3, 0.5, 0.7, 0.9].map((scale, ri) => {
            const points = Array.from({ length: 5 }, (_, i) => {
              const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
              return `${200 + 150 * scale * Math.cos(angle)},${200 + 150 * scale * Math.sin(angle)}`
            }).join(' ')
            return (
              <polygon key={ri} points={points} fill="none" stroke="#3498DB" strokeWidth="1">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${3 + ri}s`} repeatCount="indefinite" />
              </polygon>
            )
          })}
          {/* Radial lines */}
          {Array.from({ length: 5 }, (_, i) => {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
            return (
              <line key={i}
                x1="200" y1="200"
                x2={200 + 150 * Math.cos(angle)} y2={200 + 150 * Math.sin(angle)}
                stroke="#3498DB" strokeWidth="0.5"
              />
            )
          })}
          {/* Data shape that animates — diagnostic score visualization */}
          {(() => {
            const scores = [0.7, 0.5, 0.8, 0.4, 0.6]
            const dataPoints = scores.map((s, i) => {
              const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
              return `${200 + 150 * s * Math.cos(angle)},${200 + 150 * s * Math.sin(angle)}`
            }).join(' ')
            return (
              <polygon points={dataPoints} fill="#3498DB" fillOpacity="0.08" stroke="#5DADE2" strokeWidth="2">
                <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
              </polygon>
            )
          })()}
          {/* Pulsing dots at data points */}
          {[0.7, 0.5, 0.8, 0.4, 0.6].map((s, i) => {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
            return (
              <circle key={`dot-${i}`} cx={200 + 150 * s * Math.cos(angle)} cy={200 + 150 * s * Math.sin(angle)} r="4" fill="#5DADE2">
                <animate attributeName="r" values="3;6;3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            )
          })}
        </svg>
      </div>
      <div className="relative z-10">
      <PausePoint label="Workshop" />

      <Overline className="text-center mb-6 flex items-center justify-center gap-2">
        <ClipboardCheck className="w-4 h-4 text-[var(--accent-blue)]" />Diagnostico
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-center text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl mx-auto"
        variant="words"
        stagger={0.06}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.workshopDiagnostico.headline}
      </GsapTextReveal>

      <StaggerGroup className="mt-12 space-y-5 max-w-3xl mx-auto">
        {content.workshopDiagnostico.dimensions.map((dim, i) => {
          const color = dimColors[dim.dim] || 'var(--text-secondary)'
          return (
          <StaggerItem key={dim.dim}>
            <motion.div
              className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors"
              style={{ paddingLeft: `${20 + i * 8}px` }}
              whileHover={{ x: 4, transition: { duration: 0.3 } }}
            >
              {/* Colored left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: color }}
              />
              <div className="flex items-start gap-5 p-6 pl-4">
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase opacity-50">
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
            </motion.div>
          </StaggerItem>
          )
        })}
      </StaggerGroup>
      </div>
    </Section>
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
          className="absolute inset-0 flex items-center justify-center p-8 rounded-xl border border-[var(--accent-teal)]/30 bg-[var(--accent-teal-soft,_#0d1f14)]"
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
      <FloatingElements count={6} color="var(--accent-teal)" />
      <div className="relative z-10">
      <PausePoint label="Discussao em grupo" />

      <CinematicHeadline
        overline="Workshop"
        headline={content.workshopDiscussao.headline}
        align="center"
        size="display"
        icon={<MessagesSquare className="w-4 h-4 text-[var(--accent-teal)]" />}
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
      <InteractiveParticles preset="snow" color="#3498DB" count={20} speed={0.4} />
      {/* Animated countdown clock — unique urgency visual */}
      <div className="absolute inset-0 pointer-events-none z-[1] flex items-center justify-end pr-[10%] overflow-hidden">
        <svg viewBox="0 0 300 300" className="w-[400px] h-[400px] opacity-[0.08]">
          {/* Outer ring with sweep animation */}
          <circle cx="150" cy="150" r="140" fill="none" stroke="#3498DB" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          {/* Dashed ring — rotates slowly */}
          <circle cx="150" cy="150" r="110" fill="none" stroke="#3498DB" strokeWidth="0.8" strokeDasharray="4 8">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="30s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="150" r="80" fill="none" stroke="#3498DB" strokeWidth="0.5" />
          {/* Hour marks */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x1 = 150 + 130 * Math.cos(angle)
            const y1 = 150 + 130 * Math.sin(angle)
            const x2 = 150 + 140 * Math.cos(angle)
            const y2 = 150 + 140 * Math.sin(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3498DB" strokeWidth={i % 3 === 0 ? 2.5 : 1} />
          })}
          {/* Minute hand — rotates */}
          <line x1="150" y1="150" x2="150" y2="50" stroke="#3498DB" strokeWidth="2" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="60s" repeatCount="indefinite" />
          </line>
          {/* Hour hand — rotates slowly */}
          <line x1="150" y1="150" x2="150" y2="80" stroke="#5DADE2" strokeWidth="2.5" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="120 150 150" to="480 150 150" dur="720s" repeatCount="indefinite" />
          </line>
          {/* Center dot pulsing */}
          <circle cx="150" cy="150" r="4" fill="#5DADE2">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Urgency sweep — countdown arc */}
          <circle cx="150" cy="150" r="145" fill="none" stroke="#E74C3C" strokeWidth="3" strokeDasharray="910" strokeDashoffset="910" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="910" to="0" dur="120s" fill="freeze" />
          </circle>
        </svg>
      </div>
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <Clock className="w-4 h-4 text-[var(--accent-blue)]" />Fechamento
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="words"
        stagger={0.06}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.fechamentoJanela.headline}
      </GsapTextReveal>

      <ScrollReveal className="mt-6 max-w-3xl">
        <Body className="text-lg">{content.fechamentoJanela.body}</Body>
      </ScrollReveal>

      {/* Stat as hero element — full width, dramatic */}
      <ScrollReveal delay={0.3} variant="scale" className="mt-16 text-center">
        <MovingBorder borderColor="var(--accent-blue)" duration={8} borderWidth={1} className="inline-block rounded-2xl">
          <div className="px-12 py-8 md:px-20 md:py-10 bg-[var(--bg-surface)] rounded-2xl">
            <CinematicCounter
              value={48}
              prefix="$"
              suffix="B"
              className="text-[clamp(3rem,10vw,7rem)]"
              glowIntensity="high"
              color="var(--accent-blue-vivid)"
            />
            <Body className="mt-3 text-sm text-[var(--text-muted)] max-w-sm mx-auto">
              {content.fechamentoJanela.statContext}
            </Body>
          </div>
        </MovingBorder>
      </ScrollReveal>

      {/* Timeline — horizontal on desktop, vertical on mobile */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-0">
          {content.fechamentoJanela.timeline.map((t, i) => (
            <ScrollReveal key={t.period} delay={0.4 + i * 0.15} variant="rise" className="flex-1">
              <div className="relative pb-8 md:pb-0 md:px-4">
                {/* Connector line */}
                {i < content.fechamentoJanela.timeline.length - 1 && (
                  <>
                    <div className="hidden md:block absolute top-2 left-[calc(50%+8px)] right-0 h-px bg-gradient-to-r from-[var(--accent-blue)]/30 to-[var(--border-subtle)]" />
                    <div className="md:hidden absolute left-2 top-4 bottom-0 w-px bg-[var(--border-subtle)]" />
                  </>
                )}
                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center">
                  <span
                    className={cn(
                      'w-4 h-4 rounded-full border-2 shrink-0',
                      i === 0
                        ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)]'
                        : 'bg-transparent border-[var(--text-muted)]'
                    )}
                  />
                  <div>
                    <span className={cn(
                      'font-display text-xl md:text-lg block',
                      i === 0 ? 'text-[var(--accent-blue)]' : 'text-[var(--text-tertiary)]'
                    )}>
                      {t.period}
                    </span>
                    <Body className="mt-1 text-sm">{t.status}</Body>
                  </div>
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

export { FechamentoJanela as ChapterFechamentoJanela }

/* ═══════════════════════════════════════════════════
   Chapter 22 — Provocacao Final
   Full viewport + ParallaxContainer + LazyParticleField background.
   ═══════════════════════════════════════════════════ */

export function FechamentoProvocacao() {
  return (
    <Spotlight className="w-full" color="rgba(52, 152, 219, 0.15)" size={800}>
    <Section id="fechamento-provocacao" bg="primary" fullHeight spacing="dramatic">
      <LazyCinematicParticleField
        color="#3498DB"
        count={3000}
        interactive
        bloomIntensity={1.8}
        chromaticAberration
        vignette
      />
      <InteractiveParticles preset="fireflies" color="#AED6F1" count={25} speed={0.3} />
      <ParallaxContainer speed={0.12} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Overline className="mb-8 flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-[var(--accent-blue)]" />Provocacao Final
            </Overline>
          </motion.div>

          <GsapTextReveal
            tag="h2"
            className="text-[var(--text-hero)]"
            variant="chars"
            delay={0.3}
            stagger={0.03}
            glowColor="rgba(52, 152, 219, 0.4)"
          >
            {content.fechamentoProvocacao.headline}
          </GsapTextReveal>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <MovingBorder borderColor="var(--accent-blue)" duration={5} borderWidth={1} className="inline-block rounded-lg">
              <div className="px-10 py-5 md:px-16 md:py-7 bg-[var(--bg-primary)]/80 rounded-lg">
                <p className="font-display text-2xl md:text-4xl text-gradient-blue">
                  {content.fechamentoProvocacao.subline}
                </p>
              </div>
            </MovingBorder>
          </motion.div>

          <motion.p
            className="mt-12 text-[var(--text-secondary)] text-lg leading-relaxed max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {content.fechamentoProvocacao.body}
          </motion.p>

          {/* Breathing separator line */}
          <motion.div
            className="mt-16 w-32 h-px mx-auto ambient-breathe"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--accent-blue), transparent)',
              boxShadow: '0 0 12px rgba(52, 152, 219, 0.3)',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
          />

          <motion.div
            className="mt-16"
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
