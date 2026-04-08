'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/design-system'
import { SubHeading, Body, Overline, StatNumber } from '@/components/design-system/typography'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { CinematicHeadline } from '@/components/cinematic/cinematic-headline'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { DiscussionPrompt } from '@/components/workshop/discussion-prompt'
import { TextReveal } from '@/components/motion/text-reveal'
import { ParallaxContainer } from '@/components/motion/parallax-container'
import { Spotlight } from '@/components/effects/spotlight'
import { BackgroundBeams } from '@/components/effects/background-beams'
import { MovingBorder } from '@/components/effects/moving-border'
import { FloatingElements } from '@/components/effects/floating-elements'
import { GsapTextReveal } from '@/components/cinematic/gsap-text-reveal'
import { CinematicCounter } from '@/components/cinematic/cinematic-counter'
import { GlitchText } from '@/components/cinematic/glitch-text'
import { HeartbeatLine } from '@/components/cinematic/heartbeat-line'
import { AnimatedEquation } from '@/components/cinematic/animated-equation'
import { InteractiveParticles } from '@/components/effects/interactive-particles'
import { LazyWaveDistortion } from '@/components/three/lazy-wave-distortion'
import { Globe, Sparkles, BarChart3, TrendingUp, DollarSign, MessageSquare, HeartHandshake, ChartNoAxesCombined, Unplug, Database } from 'lucide-react'
import { cn } from '@/lib/cn'
import { content } from './content'

/* ═══════════════════════════════════════════════════
   Chapter 1 — Abertura
   Full viewport cinematic. Giant stat, headline, body.
   ═══════════════════════════════════════════════════ */

export function Abertura() {
  return (
    <Spotlight className="w-full" color="rgba(52, 152, 219, 0.35)" size={900}>
    <Section id="abertura" bg="blue-glow" fullHeight>
      <AmbientBackground variant="radial-blue" />
      <BackgroundBeams color="rgba(52, 152, 219, 0.4)" beamCount={5} />
      <InteractiveParticles preset="constellation" color="#3498DB" count={80} interactive />
      {/* Concentric pulse rings — unique to Abertura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border border-[var(--accent-blue)]"
            style={{
              width: `${ring * 220}px`,
              height: `${ring * 220}px`,
              opacity: 0.15 - ring * 0.03,
              boxShadow: `0 0 ${ring * 20}px rgba(52,152,219,0.2)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15 - ring * 0.03, 0.08, 0.15 - ring * 0.03],
            }}
            transition={{
              duration: 4 + ring,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring * 0.5,
            }}
          />
        ))}
      </div>
      <ParallaxContainer speed={0.15} className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <StatNumber className="block text-[clamp(4rem,12vw,10rem)] [text-shadow:0_0_60px_rgba(52,152,219,0.6),0_0_120px_rgba(52,152,219,0.3)]">
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
            <GsapTextReveal
              tag="h1"
              className="text-[clamp(1.5rem,4vw,3rem)]"
              variant="chars"
              stagger={0.025}
              delay={0.8}
              glowColor="rgba(52, 152, 219, 0.5)"
            >
              {content.abertura.headline}
            </GsapTextReveal>
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
            className="mt-12 font-display text-lg italic text-[var(--accent-blue)] max-w-lg"
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

export function ContextoMundoMudou() {
  return (
    <Section id="contexto-o-mundo-mudou" bg="gradient-down" spacing="generous">
      <AmbientBackground variant="deep-ocean" />
      {/* Seismograph-style grid — unique to this chapter */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.08 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i + 1) * 8.33}%`} x2="100%" y2={`${(i + 1) * 8.33}%`} stroke="#3498DB" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 16 }, (_, i) => (
            <line key={`v${i}`} x1={`${(i + 1) * 6.25}%`} y1="0" x2={`${(i + 1) * 6.25}%`} y2="100%" stroke="#3498DB" strokeWidth="0.5" />
          ))}
          {/* Seismograph wave crossing the grid */}
          <path
            d="M0,50% Q10%,45% 15%,50% T30%,50% Q35%,30% 38%,50% T50%,50% Q55%,20% 60%,50% T75%,50% Q80%,40% 85%,50% T100%,50%"
            stroke="#3498DB" strokeWidth="2" fill="none" opacity="0.4"
            strokeDasharray="1200" strokeDashoffset="1200"
          >
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="3s" fill="freeze" begin="0.5s" />
          </path>
        </svg>
      </div>
      <div className="relative z-10">
      <Overline className="block mb-6 text-[var(--text-muted)] inline-flex items-center gap-2"><Globe className="w-4 h-4 text-[var(--accent-blue)]" />Contexto</Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-4xl"
        variant="words"
        stagger={0.08}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.contextoMundoMudou.headline}
      </GsapTextReveal>

      {/* Horizontal scroll-like stat parade — unique layout */}
      <div className="mt-20 flex flex-col md:flex-row items-stretch gap-6 max-w-5xl mx-auto">
        {content.contextoMundoMudou.points.map((point, i) => (
          <ScrollReveal
            key={point.stat}
            variant="scale"
            delay={i * 0.2}
            className="flex-1"
          >
            <motion.div
              className={cn(
                'relative h-full p-8 md:p-10 rounded-2xl border overflow-hidden',
                'hover:border-[var(--accent-blue)]/40 transition-all duration-700',
                i === 2
                  ? 'border-[var(--accent-blue)]/30 bg-[var(--accent-blue-soft)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]'
              )}
              whileHover={{ y: -4, transition: { duration: 0.4 } }}
            >
              {/* Giant faded index number */}
              <span className="absolute -top-6 -right-2 font-display text-[8rem] leading-none text-[var(--accent-blue)] opacity-[0.06] select-none pointer-events-none">
                0{i + 1}
              </span>
              <CinematicCounter
                value={parseFloat(point.stat.replace(/[^0-9.]/g, ''))}
                suffix={point.stat.replace(/[0-9.]/g, '')}
                className="text-[clamp(2.5rem,6vw,4rem)]"
                glowIntensity={i === 2 ? 'high' : 'medium'}
                color="var(--accent-blue-vivid)"
              />
              <Body className="mt-4 text-[var(--text-primary)] font-medium text-base">
                {point.text}
              </Body>
              <span className="mt-3 block font-mono text-xs text-[var(--text-muted)]">
                {point.source}
              </span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.7} className="mt-16">
        <Body className="max-w-2xl text-lg text-[var(--text-primary)] font-medium italic border-l-2 border-[var(--accent-blue)]/30 pl-6">
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
    <Section id="contexto-ilusao-digital" bg="surface" spacing="compact">
      <AmbientBackground variant="top-light" />
      {/* Mirrored/reflected text background — unique "illusion" visual */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-4xl px-8">
          <span
            className="block font-display text-[clamp(4rem,14vw,10rem)] leading-none text-center text-[var(--accent-blue)] opacity-[0.04] select-none"
            aria-hidden="true"
          >
            ILUSÃO
          </span>
          <span
            className="block font-display text-[clamp(4rem,14vw,10rem)] leading-none text-center text-[var(--accent-blue)] opacity-[0.03] select-none"
            style={{ transform: 'scaleY(-1)', maskImage: 'linear-gradient(to bottom, white 20%, transparent 80%)' }}
            aria-hidden="true"
          >
            ILUSÃO
          </span>
        </div>
      </div>
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />Contexto
      </Overline>
      {/* GlitchText headline — the illusion distorts */}
      <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-3xl">
        <GlitchText intensity="low" color="var(--accent-blue-vivid, #5DADE2)">
          {content.contextoIlusao.headline}
        </GlitchText>
      </h2>

      <ScrollReveal variant="slide-right" className="mt-8 max-w-3xl">
        <Body className="text-lg">{content.contextoIlusao.body}</Body>
      </ScrollReveal>

      {/* Full-width before/after split — not grid cards */}
      <div className="mt-16 flex flex-col md:flex-row gap-0 items-stretch min-h-[240px] max-w-4xl">
        {/* Before panel — faded/muted */}
        <ScrollReveal variant="slide-left" delay={0.1} className="flex-1">
          <div className="h-full p-8 md:p-10 border border-[var(--border-subtle)] md:rounded-l-2xl md:rounded-r-none rounded-2xl bg-[var(--bg-surface)]/60 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)]/5 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <Overline className="text-[var(--text-muted)] mb-4 block relative z-10">
              O que as empresas mediram
            </Overline>
            <Body className="text-[var(--text-secondary)] relative z-10 opacity-70">
              {content.contextoIlusao.contrast.before}
            </Body>
          </div>
        </ScrollReveal>

        {/* Center glowing divider */}
        <div className="hidden md:flex items-center justify-center w-12 relative">
          <motion.div
            className="w-px h-4/5 bg-gradient-to-b from-transparent via-[var(--accent-blue)] to-transparent"
            style={{ boxShadow: '0 0 20px rgba(52,152,219,0.5)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <span className="absolute font-mono text-[10px] text-[var(--accent-blue)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded">vs</span>
        </div>

        {/* After panel — vivid/clear */}
        <ScrollReveal variant="slide-right" delay={0.25} className="flex-1">
          <div className="h-full p-8 md:p-10 border border-[var(--accent-blue)]/25 md:rounded-r-2xl md:rounded-l-none rounded-2xl bg-[var(--accent-blue-soft)] relative overflow-hidden">
            <Overline className="text-[var(--accent-blue)] mb-4 block">
              O que deveriam ter medido
            </Overline>
            <Body className="text-[var(--text-primary)] font-medium">
              {content.contextoIlusao.contrast.after}
            </Body>
          </div>
        </ScrollReveal>
      </div>

      {/* Centered stat with CinematicCounter */}
      <ScrollReveal variant="scale" delay={0.5} className="mt-16 text-center">
        <CinematicCounter
          value={40}
          suffix="%"
          className="text-[clamp(3.5rem,10vw,6rem)]"
          glowIntensity="high"
          color="var(--accent-blue-vivid)"
        />
        <Body className="mt-4 text-sm text-[var(--text-secondary)] max-w-md mx-auto">
          {content.contextoIlusao.statContext}
        </Body>
      </ScrollReveal>
      </div>
    </Section>
  )
}

export { ContextoIlusao as ChapterContextoIlusao }

/* ═══════════════════════════════════════════════════
   Chapter 4 — CX: A Equacao Invisivel
   AmbientBackground breathe + scale reveals for cards.
   ═══════════════════════════════════════════════════ */

export function CxEquacao() {
  return (
    <Section id="cx-equacao-invisivel" bg="blue-glow">
      <AmbientBackground variant="radial-blue" breathe={true} />
      <FloatingElements count={6} color="var(--accent-blue)" />
      <div className="relative z-10">
        <Overline className="text-center mb-6 inline-flex items-center gap-2 w-full justify-center"><BarChart3 className="w-4 h-4 text-[var(--accent-blue)]" />Customer Experience</Overline>
        <TextReveal
          tag="h2"
          className="text-center text-[clamp(1.75rem,4vw,3.5rem)]"
        >
          {content.cxEquacao.headline}
        </TextReveal>

        <ScrollReveal variant="scale" className="mt-6 max-w-3xl mx-auto text-center">
          <Body className="text-lg">{content.cxEquacao.body}</Body>
        </ScrollReveal>

        {/* Animated triangle equation — rotating nodes with particle flow */}
        <div className="mt-16 relative">
          <ScrollReveal variant="scale" delay={0.3}>
            <AnimatedEquation
              nodes={[
                {
                  label: content.cxEquacao.pillars[0].title,
                  icon: <BarChart3 className="w-5 h-5" />,
                },
                {
                  label: content.cxEquacao.pillars[1].title,
                  icon: <TrendingUp className="w-5 h-5" />,
                },
                {
                  label: content.cxEquacao.pillars[2].title,
                  icon: <Globe className="w-5 h-5" />,
                },
              ]}
              className="my-4"
            />
          </ScrollReveal>

          {/* Pillar descriptions below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {content.cxEquacao.pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} variant="rise" delay={0.5 + i * 0.15}>
                <div className="text-center p-4">
                  <SubHeading className="text-[var(--accent-blue)] text-lg">{pillar.title}</SubHeading>
                  <Body className="mt-2 text-sm">{pillar.desc}</Body>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Equation result */}
          <ScrollReveal delay={0.9} className="mt-8 text-center">
            <span className="font-display text-lg md:text-xl text-[var(--accent-blue)] opacity-60 tracking-wide">
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
    <Section id="cx-experiencia-vs-percepcao" bg="elevated">
      <AmbientBackground variant="bottom-fade" />
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-[var(--accent-blue)]" />Customer Experience
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="words"
        stagger={0.06}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.cxExperiencia.headline}
      </GsapTextReveal>

      {/* Full-width perception gap — hero visual */}
      <div className="mt-16 max-w-4xl">
        <ScrollReveal>
          <Body className="text-lg leading-relaxed max-w-3xl">
            {content.cxExperiencia.body}
          </Body>
        </ScrollReveal>

        {/* Perception Gap Bars — wider, more dramatic */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="space-y-6 p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-wider">Experiencia Projetada</span>
                <span className="font-mono text-sm text-[var(--accent-teal)] font-bold">85%</span>
              </div>
              <div className="h-4 rounded-full bg-[var(--bg-hover)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--accent-teal), #26C6DA)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-[var(--accent-red)] uppercase tracking-wider">Percepcao do Cliente</span>
                <span className="font-mono text-sm text-[var(--accent-red)] font-bold">42%</span>
              </div>
              <div className="h-4 rounded-full bg-[var(--bg-hover)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #E74C3C, #C0392B)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '42%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                />
              </div>
            </div>
            {/* Gap indicator */}
            <motion.div
              className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="font-display text-3xl text-[var(--accent-blue)] font-bold">43%</span>
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider leading-tight">
                perception<br />gap
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom row: stat + insight side by side */}
      <div className="mt-16 flex flex-col md:flex-row gap-8 items-center max-w-4xl">
        <ScrollReveal variant="rise" delay={0.4} className="md:w-1/3 text-center">
          <CinematicCounter
            value={parseFloat(content.cxExperiencia.stat.replace(/[^0-9.]/g, ''))}
            suffix={content.cxExperiencia.stat.replace(/[0-9.]/g, '')}
            className="text-[clamp(3rem,8vw,5rem)]"
            glowIntensity="high"
            color="var(--accent-blue-vivid)"
          />
          <Body className="mt-3 text-sm max-w-xs mx-auto text-[var(--text-secondary)]">
            {content.cxExperiencia.statContext}
          </Body>
        </ScrollReveal>

        <ScrollReveal delay={0.5} className="md:w-2/3">
          <div className="p-6 rounded-xl border-l-2 border-[var(--accent-teal)]/40 bg-[var(--accent-teal-soft)]">
            <Overline className="text-[var(--accent-teal)] mb-2 block">
              Insight
            </Overline>
            <Body className="text-[var(--text-primary)] font-medium">
              {content.cxExperiencia.insight}
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
   FULL-BLEED STAT WALL — giant watermark numbers
   behind asymmetric content. No grid.
   ═══════════════════════════════════════════════════ */

export function CxCusto() {
  return (
    <Section id="cx-custo-do-atrito" bg="gradient-up" spacing="dramatic">
      {/* WebGL liquid distortion — unique to this chapter */}
      <LazyWaveDistortion
        color1="#0A1628"
        color2="#1A6BA8"
        color3="#3498DB"
        speed={0.3}
        intensity={0.8}
      />
      <InteractiveParticles preset="fireflies" color="#5DADE2" count={30} speed={0.5} />
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
          <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2"><DollarSign className="w-4 h-4 text-[var(--accent-blue)]" />Customer Experience</Overline>
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
                  <CinematicCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    className="text-[clamp(3rem,7vw,5rem)]"
                    glowIntensity="high"
                    color="var(--accent-blue-vivid)"
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
    <Section id="cx-momento-reflexao" bg="vignette" spacing="compact">
      <AmbientBackground variant="mesh-dark" />
      {/* Rising gradient columns — unique maturity bar visual */}
      <div className="absolute inset-0 pointer-events-none z-[1] flex items-end justify-center gap-[6vw] pb-0 overflow-hidden opacity-[0.06]">
        {[0.25, 0.45, 0.65, 0.9].map((h, i) => (
          <motion.div
            key={i}
            className="w-[8vw] max-w-[80px] rounded-t-lg"
            style={{
              background: `linear-gradient(to top, var(--accent-blue), transparent)`,
            }}
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-[var(--accent-blue)]" />Reflexao
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="words"
        stagger={0.06}
        glowColor="rgba(52, 152, 219, 0.3)"
      >
        {content.cxReflexao.headline}
      </GsapTextReveal>

      <div className="mt-16 space-y-4">
        {content.cxReflexao.levels.map((lvl, i) => (
          <ScrollReveal key={lvl.level} delay={i * 0.12}>
            <div className={cn(marginSteps[i], 'max-w-2xl')}>
              <motion.div
                className={cn(
                  'flex items-start gap-6 border-l-2 pl-6 py-5 pr-6 rounded-r-xl transition-colors',
                  i === 3
                    ? 'border-l-[var(--accent-blue)] bg-[var(--accent-blue-soft)]'
                    : 'border-l-[var(--border-default)] hover:border-l-[var(--accent-blue)]/40 hover:bg-[var(--bg-surface)]/40'
                )}
                whileHover={{ x: 4, transition: { duration: 0.3 } }}
              >
                <span
                  className={cn(
                    'shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold',
                    i === 3
                      ? 'bg-[var(--accent-blue)] text-[var(--bg-primary)]'
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
                      i === 3 && 'text-[var(--accent-blue)]'
                    )}
                  >
                    {lvl.name}
                  </SubHeading>
                  <Body className="mt-1 text-sm">{lvl.desc}</Body>
                </div>
              </motion.div>
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
      <BackgroundBeams color="rgba(0, 188, 212, 0.35)" beamCount={3} />
      <div className="relative z-10">
        <CinematicHeadline
          overline="Customer Success"
          headline={content.csParadoxo.headline}
          align="left"
          size="display"
          icon={<HeartHandshake className="w-4 h-4 text-[var(--accent-teal)]" />}
        />

        <ScrollReveal delay={0.1} className="mt-8 max-w-3xl">
          <Body className="text-lg leading-relaxed">{content.csParadoxo.body}</Body>
        </ScrollReveal>

        {/* Dual-panel paradox tension — opposing panels with gap reveal */}
        <div className="mt-16 flex flex-col md:flex-row gap-4 md:gap-0 items-stretch min-h-[280px]">
          {/* Left panel — "healthy" metrics */}
          <ScrollReveal variant="slide-left" delay={0.2} className="flex-1">
            <div className="h-full p-8 rounded-l-xl md:rounded-r-none rounded-xl border border-[var(--accent-teal)]/20 bg-[var(--accent-teal-soft)]">
              <Overline className="text-[var(--accent-teal)] mb-6 block">O que o numero diz</Overline>
              <div className="space-y-4">
                {content.csParadoxo.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="block text-[var(--accent-teal)] text-[clamp(1.5rem,4vw,2.5rem)] leading-none font-display"
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
              className="w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-blue)] to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            />
            <span className="absolute font-display text-sm text-[var(--accent-blue)] bg-[var(--bg-surface)] px-2">vs</span>
          </div>

          {/* Right panel — "reality" */}
          <ScrollReveal variant="slide-right" delay={0.3} className="flex-1">
            <div className="h-full p-8 rounded-r-xl md:rounded-l-none rounded-xl border border-[var(--accent-red)]/20 bg-[rgba(231,76,60,0.15)]">
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

        {/* Heartbeat monitor — showing the paradox visually */}
        <ScrollReveal delay={0.5} className="mt-12">
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-[var(--accent-teal)]/20 bg-[var(--bg-primary)]/80">
            <HeartbeatLine state="danger" className="h-[160px]" />
          </div>
        </ScrollReveal>

        {/* Paradox insight — revealed below the tension */}
        <ScrollReveal delay={0.7} className="mt-8">
          <div className="text-center max-w-2xl mx-auto px-6 py-5 border-t border-b border-[var(--accent-blue)]/15">
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
    <Spotlight className="w-full" color="rgba(0, 188, 212, 0.15)" size={700}>
    <Section id="cs-metricas-que-mentem" bg="primary" spacing="dramatic">
      <Overline className="mb-6 text-[var(--text-muted)] text-center flex items-center justify-center gap-2">
        <ChartNoAxesCombined className="w-4 h-4 text-[var(--accent-teal)]" />Customer Success
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
            {/* The struck metric name with glitch distortion */}
            <ScrollReveal variant="fade" delay={i * 0.1}>
              <span className="line-through decoration-[3px] decoration-[var(--accent-blue)]/60">
                <GlitchText
                  className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
                  intensity={i === 0 ? 'high' : 'medium'}
                  color="var(--accent-blue-vivid)"
                >
                  {metric.name}
                </GlitchText>
              </span>
            </ScrollReveal>

            {/* The truth underneath */}
            <ScrollReveal variant="clip-up" delay={i * 0.1 + 0.2} className="mt-6">
              <div className="pl-1 border-l-2 border-[var(--accent-teal)]/40 ml-1">
                <Overline className="text-[var(--accent-teal)] mb-2 block pl-4">
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
        <div className="p-8 rounded-2xl border border-[var(--accent-teal)]/20 bg-[var(--accent-teal-soft)]">
          <Overline className="text-[var(--accent-teal)] mb-3 block">
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
      <InteractiveParticles preset="rising-bubbles" color="#00BCD4" count={40} speed={0.8} />
      <div className="relative z-10">
        <Overline className="text-center mb-6 flex items-center justify-center gap-2">
          <Unplug className="w-4 h-4 text-[var(--accent-teal)]" />Customer Success
        </Overline>

        {/* Giant centered stat — hero-scale, unique to this chapter */}
        <ScrollReveal variant="scale">
          <div className="text-center">
            <MovingBorder borderColor="var(--accent-teal)" duration={6} borderWidth={1} className="inline-block rounded-2xl">
              <div className="px-16 py-12 md:px-24 md:py-16 bg-[var(--bg-surface)] rounded-2xl">
                <CinematicCounter
                  value={parseFloat(content.csExpansao.stat.replace(/[^0-9.]/g, ''))}
                  suffix={content.csExpansao.stat.replace(/[0-9.]/g, '')}
                  className="text-[clamp(5rem,16vw,12rem)]"
                  glowIntensity="high"
                  color="var(--accent-teal)"
                  duration={3}
                />
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
          <div className="relative max-w-3xl mx-auto px-8 py-6 rounded-xl border border-[var(--accent-teal)]/20 bg-[var(--accent-teal-soft)]">
            <span className="absolute -top-3 left-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-teal)] bg-[var(--bg-primary)] px-3">
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
      <BackgroundBeams color="rgba(38, 198, 218, 0.35)" beamCount={2} />
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
            background: 'linear-gradient(to bottom, transparent, var(--accent-blue), transparent)',
            boxShadow: '0 0 12px var(--accent-blue), 0 0 4px var(--accent-blue)',
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
            background: 'linear-gradient(to right, transparent, var(--accent-blue), transparent)',
            boxShadow: '0 0 12px var(--accent-blue)',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '80%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        />

        {/* Right side — clear / primary */}
        <div className="flex-1 md:pl-12">
          <ScrollReveal variant="slide-right" delay={0.2}>
            <Overline className="text-[var(--accent-teal)] mb-6 block">
              O que deveria saber
            </Overline>
            <div className="space-y-4">
              {content.dataVerdade.contrast.good.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--accent-teal-soft)] border border-[var(--accent-teal)]/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] shrink-0" />
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
