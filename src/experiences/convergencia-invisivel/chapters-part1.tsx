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
/* FloatingElements removed — not used */
import { GsapTextReveal } from '@/components/cinematic/gsap-text-reveal'
import { CinematicCounter } from '@/components/cinematic/cinematic-counter'
import { GlitchText } from '@/components/cinematic/glitch-text'
import { HeartbeatLine } from '@/components/cinematic/heartbeat-line'
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
    <Spotlight className="w-full" color="rgba(200, 135, 58, 0.2)" size={900}>
    <Section id="abertura" bg="amber-glow" fullHeight>
      <AmbientBackground variant="radial-blue" />
      <BackgroundBeams color="rgba(200, 135, 58, 0.3)" beamCount={5} />
      <InteractiveParticles preset="constellation" color="#C8873A" count={80} interactive />
      {/* Concentric pulse rings — unique to Abertura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border border-[var(--accent-amber)]"
            style={{
              width: `${ring * 220}px`,
              height: `${ring * 220}px`,
              opacity: 0.15 - ring * 0.03,
              boxShadow: `0 0 ${ring * 20}px rgba(200,135,58,0.2)`,
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
            <StatNumber className="block text-[clamp(4rem,12vw,10rem)] [text-shadow:0_0_60px_rgba(200,135,58,0.6),0_0_120px_rgba(200,135,58,0.3)]">
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
              stagger={0.02}
              delay={0.8}
              duration={1.0}
              glowColor="rgba(200, 135, 58, 0.5)"
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

export function ContextoMundoMudou() {
  return (
    <Section id="contexto-o-mundo-mudou" bg="gradient-down" spacing="generous">
      <AmbientBackground variant="deep-ocean" />
      <div className="relative z-10">
        <Overline className="block mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
          <Globe className="w-4 h-4 text-[var(--accent-amber)]" />Contexto
        </Overline>
        <GsapTextReveal
          tag="h2"
          className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-4xl"
          variant="lines"
          duration={1.2}
          glowColor="rgba(200, 135, 58, 0.25)"
        >
          {content.contextoMundoMudou.headline}
        </GsapTextReveal>

        {/* Seismograph timeline — stats integrated into wave markers */}
        <div className="mt-24 relative max-w-5xl mx-auto">
          {/* Animated wave line connecting all points */}
          <div className="absolute top-[60px] left-0 right-0 h-px hidden md:block">
            <motion.div
              className="h-full origin-left"
              style={{ background: 'linear-gradient(90deg, rgba(200,135,58,0.1), rgba(200,135,58,0.4), rgba(200,135,58,0.1))' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {content.contextoMundoMudou.points.map((point, i) => (
              <ScrollReveal key={point.stat} delay={0.3 + i * 0.3}>
                <div className={cn(
                  'relative flex flex-col items-center text-center px-6',
                  i === 1 ? 'md:border-x md:border-[rgba(200,135,58,0.1)]' : ''
                )}>
                  {/* Pulse marker on the wave line */}
                  <motion.div
                    className="relative w-4 h-4 rounded-full mb-8 hidden md:block"
                    style={{
                      background: 'var(--accent-amber)',
                      boxShadow: '0 0 20px rgba(200,135,58,0.6), 0 0 40px rgba(200,135,58,0.3)',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--accent-amber)]"
                      animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                    />
                  </motion.div>

                  {/* Stat */}
                  <CinematicCounter
                    value={parseFloat(point.stat.replace(/[^0-9.]/g, ''))}
                    suffix={point.stat.replace(/[0-9.]/g, '')}
                    className="text-[clamp(3rem,7vw,5rem)]"
                    glowIntensity={i === 0 ? 'high' : 'medium'}
                    color="var(--accent-amber-vivid)"
                  />
                  <Body className="mt-4 text-[var(--text-primary)] text-sm leading-relaxed max-w-[260px]">
                    {point.text}
                  </Body>
                  <span className="mt-3 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    {point.source}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.7} className="mt-20">
          <Body className="max-w-2xl mx-auto text-lg text-[var(--text-primary)] font-medium italic text-center opacity-80">
            &ldquo;{content.contextoMundoMudou.closing}&rdquo;
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
            className="block font-display text-[clamp(4rem,14vw,10rem)] leading-none text-center text-[var(--accent-amber)] opacity-[0.04] select-none"
            aria-hidden="true"
          >
            ILUSÃO
          </span>
          <span
            className="block font-display text-[clamp(4rem,14vw,10rem)] leading-none text-center text-[var(--accent-amber)] opacity-[0.03] select-none"
            style={{ transform: 'scaleY(-1)', maskImage: 'linear-gradient(to bottom, white 20%, transparent 80%)' }}
            aria-hidden="true"
          >
            ILUSÃO
          </span>
        </div>
      </div>
      <div className="relative z-10">
      <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[var(--accent-amber)]" />Contexto
      </Overline>
      {/* GlitchText headline — the illusion distorts */}
      <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-3xl">
        <GlitchText intensity="low" color="var(--accent-amber-vivid, #E8923A)">
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
              className="absolute inset-0 bg-gradient-to-r from-[var(--accent-amber)]/5 to-transparent"
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
            className="w-px h-4/5 bg-gradient-to-b from-transparent via-[var(--accent-amber)] to-transparent"
            style={{ boxShadow: '0 0 20px rgba(200,135,58,0.5)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <span className="absolute font-mono text-[10px] text-[var(--accent-amber)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded">vs</span>
        </div>

        {/* After panel — vivid/clear */}
        <ScrollReveal variant="slide-right" delay={0.25} className="flex-1">
          <div className="h-full p-8 md:p-10 border border-[var(--accent-amber)]/25 md:rounded-r-2xl md:rounded-l-none rounded-2xl bg-[var(--accent-amber)]/10 relative overflow-hidden">
            <Overline className="text-[var(--accent-amber)] mb-4 block">
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
          color="var(--accent-amber-vivid)"
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
   Cinematic equation-as-storytelling with horizontal
   timeline flow and massive split typography.
   ═══════════════════════════════════════════════════ */

export function CxEquacao() {
  const equationTerms = [
    { word: 'Expectativa', accent: false },
    { word: '\u00d7', accent: true },
    { word: 'Percep\u00e7\u00e3o', accent: false },
    { word: '\u00d7', accent: true },
    { word: 'Tempo', accent: false },
    { word: '=', accent: true },
    { word: 'Experi\u00eancia', accent: true, result: true },
  ]

  return (
    <Section id="cx-equacao-invisivel" bg="amber-glow" spacing="generous">
      <AmbientBackground variant="radial-amber" breathe={true} />

      {/* Diagonal amber slash — unique geometric accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          className="absolute -right-[15%] top-[10%] w-[2px] h-[120%] bg-gradient-to-b from-transparent via-[rgba(200,135,58,0.12)] to-transparent"
          style={{ rotate: '-25deg' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.div
          className="absolute -left-[10%] top-[30%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[rgba(200,135,58,0.08)] to-transparent"
          style={{ rotate: '-18deg' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </div>

      <div className="relative z-10">
        {/* --- Overline + Headline --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Overline className="mb-6 inline-flex items-center gap-2 text-[#C8873A]">
            <BarChart3 className="w-4 h-4" />
            Customer Experience
          </Overline>
        </motion.div>

        <TextReveal
          tag="h2"
          className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-4xl leading-[1.1] tracking-tight"
        >
          {content.cxEquacao.headline}
        </TextReveal>

        <ScrollReveal variant="blur" delay={0.2} className="mt-8 max-w-2xl">
          <Body className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {content.cxEquacao.body}
          </Body>
        </ScrollReveal>

        {/* ════════════════════════════════════════════════
           Cinematic Equation — massive asymmetric split
           Each term fills the viewport width, staggered reveals.
           Multiplication symbols and result in amber.
           ════════════════════════════════════════════════ */}
        <div className="mt-24 md:mt-32 space-y-0">
          {equationTerms.map((term, i) => {
            const isOperator = term.word === '\u00d7' || term.word === '='
            const isResult = term.result

            return (
              <motion.div
                key={`eq-${i}`}
                className={cn(
                  'overflow-hidden',
                  isOperator
                    ? 'flex justify-center md:justify-end md:pr-[18%] py-1 md:py-2'
                    : isResult
                      ? 'flex justify-end md:pr-[4%] pt-2'
                      : i === 0
                        ? 'flex justify-start md:pl-[2%]'
                        : i === 2
                          ? 'flex justify-center'
                          : 'flex justify-end md:pr-[8%]'
                )}
                initial={{ opacity: 0, x: isOperator ? 0 : (i % 2 === 0 ? -60 : 60), y: isOperator ? 10 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: isOperator ? 0.5 : 0.9,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {isOperator ? (
                  <span
                    className={cn(
                      'font-display font-light select-none',
                      'text-[clamp(1.8rem,5vw,4rem)]',
                      'text-[#C8873A]',
                      'drop-shadow-[0_0_20px_rgba(200,135,58,0.4)]'
                    )}
                  >
                    {term.word}
                  </span>
                ) : (
                  <span
                    className={cn(
                      'font-display font-bold leading-[0.9] tracking-[-0.04em]',
                      isResult
                        ? 'text-[clamp(2.5rem,9vw,7.5rem)] text-[#C8873A] drop-shadow-[0_0_40px_rgba(200,135,58,0.3)]'
                        : 'text-[clamp(2rem,7vw,6rem)] text-[var(--text-primary)]'
                    )}
                  >
                    {term.word}
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* ════════════════════════════════════════════════
           Pillar Flow — horizontal progressive reveal
           NOT a grid. Asymmetric sizes, connecting flow line,
           each pillar grows in scale and luminance.
           ════════════════════════════════════════════════ */}
        <div className="mt-28 md:mt-36 relative">
          {/* Animated connecting flow line */}
          <motion.div
            className="hidden md:block absolute top-[3.5rem] left-[8%] right-[8%] h-[2px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left center' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[rgba(200,135,58,0.1)] via-[rgba(200,135,58,0.45)] to-[rgba(200,135,58,0.7)]" />
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-16 md:gap-0 md:justify-between max-w-5xl mx-auto">
            {content.cxEquacao.pillars.map((pillar, i) => {
              /* Progressive scaling: each pillar is bigger and brighter */
              const sizes = ['text-base md:text-lg', 'text-lg md:text-xl', 'text-xl md:text-2xl']
              const brightness = [0.55, 0.75, 1.0]
              const nodeSize = [14, 18, 24]
              const descMaxW = ['max-w-[13rem]', 'max-w-[15rem]', 'max-w-[17rem]']
              /* Stagger horizontal offsets for asymmetry */
              const topPadding = ['pt-0', 'pt-4 md:pt-6', 'pt-0 md:pt-2']

              return (
                <motion.div
                  key={pillar.title}
                  className={cn(
                    'relative flex-1 flex flex-col',
                    i === 1 ? 'items-center text-center' : i === 2 ? 'items-end text-right' : 'items-start text-left',
                    'px-2 md:px-5',
                    topPadding[i]
                  )}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + i * 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Timeline node — grows with each pillar */}
                  <motion.div
                    className="relative z-10 mb-5 shrink-0"
                    style={{
                      width: nodeSize[i],
                      height: nodeSize[i],
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + i * 0.22,
                      type: 'spring',
                      stiffness: 280,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full border-2 border-[#C8873A] bg-[var(--bg-primary)]"
                      style={{ opacity: brightness[i] }}
                    />
                    {/* Glow ring — only on last (brightest) */}
                    {i === 2 && (
                      <motion.div
                        className="absolute inset-[-8px] rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(200,135,58,0.25) 0%, transparent 70%)',
                        }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Pillar number — subtle marker */}
                  <span
                    className="font-mono text-xs tracking-wider mb-2"
                    style={{ color: `rgba(200,135,58,${brightness[i]})` }}
                  >
                    0{i + 1}
                  </span>

                  {/* Title — progressively larger */}
                  <h3
                    className={cn(
                      'font-display font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-3 leading-tight',
                      sizes[i]
                    )}
                    style={{ opacity: brightness[i] }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Amber accent bar */}
                  <motion.div
                    className="h-[2px] mb-4"
                    style={{
                      width: `${40 + i * 20}px`,
                      background: `rgba(200,135,58,${brightness[i]})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.22 }}
                  />

                  {/* Description */}
                  <Body
                    className={cn(
                      'text-sm text-[var(--text-secondary)] leading-relaxed',
                      descMaxW[i]
                    )}
                  >
                    {pillar.desc}
                  </Body>

                  {/* Vertical connector on mobile */}
                  {i < content.cxEquacao.pillars.length - 1 && (
                    <motion.div
                      className="md:hidden w-px h-10 mt-6"
                      style={{
                        background: `linear-gradient(to bottom, rgba(200,135,58,${brightness[i]}) 0%, transparent 100%)`,
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom breathing space with a single amber accent line */}
        <motion.div
          className="mt-20 mx-auto h-px max-w-xs"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,135,58,0.3), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </Section>
  )
}

export { CxEquacao as ChapterCxEquacao }

/* ═══════════════════════════════════════════════════
   Chapter 5 — Experiencia vs Percepcao
   "Mirror" concept: two diverging horizontal tracks —
   blueprint (geometric/structured) vs. reality (distorted/organic).
   Giant 225% stat bridges the gap between them.
   ═══════════════════════════════════════════════════ */

/* Blueprint lane nodes — structured, progressive */
const blueprintNodes = [
  { label: 'Pesquisa', w: '18%' },
  { label: 'Mapa', w: '22%' },
  { label: 'Blueprint', w: '28%' },
  { label: 'Entrega', w: '32%' },
]

/* Reality lane nodes — messy, uneven, skewed */
const realityNodes = [
  { label: 'Confusao', w: '30%', skew: -3 },
  { label: 'Espera', w: '14%', skew: 5 },
  { label: 'Frustacao', w: '26%', skew: -7 },
  { label: 'Abandono', w: '30%', skew: 4 },
]

export function CxExperiencia() {
  return (
    <Section id="cx-experiencia-vs-percepcao" bg="elevated">
      <AmbientBackground variant="bottom-fade" />
      <div className="relative z-10">
        <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[var(--accent-cx)]" />Customer Experience
        </Overline>
        <GsapTextReveal
          tag="h2"
          className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
          variant="words"
          stagger={0.10}
          duration={0.6}
          glowColor="rgba(200, 135, 58, 0.3)"
        >
          {content.cxExperiencia.headline}
        </GsapTextReveal>

        <ScrollReveal className="mt-10 max-w-3xl">
          <Body className="text-lg leading-relaxed">
            {content.cxExperiencia.body}
          </Body>
        </ScrollReveal>

        {/* ─── Mirror Tracks ─── */}
        <div className="mt-20 max-w-5xl relative">

          {/* ── TRACK 1: O que voce projetou (blueprint) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C8873A] mb-4 block">
              O que voce projetou
            </span>

            {/* Blueprint lane — clean, structured, geometric */}
            <div className="flex items-stretch gap-[2px] h-20 md:h-24">
              {blueprintNodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className={cn(
                    'relative flex items-center justify-center',
                    'border border-[rgba(200,135,58,0.25)]',
                    'bg-[rgba(200,135,58,0.04)]',
                    i === 0 && 'rounded-l-lg',
                    i === blueprintNodes.length - 1 && 'rounded-r-lg',
                  )}
                  style={{ width: node.w }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Inner grid lines for "blueprint" feel */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #C8873A 1px, transparent 1px), linear-gradient(0deg, #C8873A 1px, transparent 1px)',
                      backgroundSize: '12px 12px',
                    }}
                  />
                  <span className="relative font-mono text-[10px] md:text-xs uppercase tracking-wider text-[#C8873A] opacity-70">
                    {node.label}
                  </span>

                  {/* Arrow connectors between segments */}
                  {i < blueprintNodes.length - 1 && (
                    <motion.div
                      className="absolute -right-[7px] top-1/2 -translate-y-1/2 z-10 w-3 h-3 border-t border-r border-[rgba(200,135,58,0.4)] rotate-45 bg-[var(--bg-elevated)]"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.35 + i * 0.12 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── GAP ZONE: The 225% stat bridge ── */}
          <div className="relative py-12 md:py-16 flex items-center justify-center">
            {/* Dashed diverging line — top */}
            <motion.div
              className="absolute left-0 right-0 top-0 h-px"
              style={{
                background:
                  'repeating-linear-gradient(90deg, rgba(200,135,58,0.3) 0px, rgba(200,135,58,0.3) 6px, transparent 6px, transparent 14px)',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Dashed diverging line — bottom */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-px"
              style={{
                background:
                  'repeating-linear-gradient(90deg, rgba(138,145,156,0.25) 0px, rgba(138,145,156,0.25) 4px, transparent 4px, transparent 12px)',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Vertical diverging indicators */}
            <motion.div
              className="absolute left-[8%] top-0 bottom-0 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(200,135,58,0.3), transparent 30%, transparent 70%, rgba(138,145,156,0.2))',
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            <motion.div
              className="absolute right-[8%] top-0 bottom-0 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(200,135,58,0.3), transparent 30%, transparent 70%, rgba(138,145,156,0.2))',
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            {/* The giant floating stat */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.7, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CinematicCounter
                value={225}
                suffix="%"
                className="text-[clamp(3.5rem,10vw,7rem)]"
                glowIntensity="high"
                color="#C8873A"
              />
              <motion.span
                className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] uppercase tracking-[0.15em] mt-2 text-center max-w-[20rem] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {content.cxExperiencia.statContext}
              </motion.span>
            </motion.div>
          </div>

          {/* ── TRACK 2: O que o cliente viveu (reality) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4 block">
              O que o cliente viveu
            </span>

            {/* Reality lane — messy, skewed, organic */}
            <div className="flex items-stretch gap-[6px] h-20 md:h-24">
              {realityNodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className="relative flex items-center justify-center overflow-hidden border border-[rgba(138,145,156,0.15)] bg-[rgba(138,145,156,0.06)]"
                  style={{
                    width: node.w,
                    borderRadius: `${4 + Math.abs(node.skew)}px ${8 - Math.abs(node.skew)}px ${3 + i * 2}px ${6 - i}px`,
                    transform: `skewX(${node.skew}deg)`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Static noise texture for "messy" feel */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <span
                    className="relative font-mono text-[10px] md:text-xs uppercase tracking-wider text-[var(--text-muted)] opacity-60"
                    style={{ transform: `skewX(${-node.skew}deg)` }}
                  >
                    {node.label}
                  </span>

                  {/* Jagged gap lines between nodes */}
                  {i < realityNodes.length - 1 && (
                    <motion.div
                      className="absolute -right-[4px] top-[15%] bottom-[15%] w-[2px]"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent, rgba(138,145,156,0.3), transparent, rgba(138,145,156,0.2), transparent)',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Insight Callout ─── */}
        <motion.div
          className="mt-20 max-w-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative pl-6 py-6 pr-8 rounded-r-xl border-l-[3px] border-l-[#C8873A] bg-[rgba(200,135,58,0.05)]">
            {/* Faint amber glow behind the border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(200,135,58,0.08), transparent)',
              }}
            />
            <Overline className="text-[#C8873A] mb-3 block relative">
              Insight
            </Overline>
            <Body className="text-[var(--text-primary)] font-medium leading-relaxed relative">
              {content.cxExperiencia.insight}
            </Body>
          </div>
        </motion.div>
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
        color3="#4A7C5C"
        speed={0.3}
        intensity={0.8}
      />
      <InteractiveParticles preset="fireflies" color="#4A7C5C" count={30} speed={0.5} />
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
          <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2"><DollarSign className="w-4 h-4 text-[var(--accent-cx)]" />Customer Experience</Overline>
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
                    color="var(--accent-amber-vivid)"
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
              background: `linear-gradient(to top, var(--accent-amber), transparent)`,
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
        <MessageSquare className="w-4 h-4 text-[var(--accent-cx)]" />Reflexao
      </Overline>
      <GsapTextReveal
        tag="h2"
        className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-3xl"
        variant="chars"
        stagger={0.015}
        scrub
        color="var(--accent-amber)"
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
                    ? 'border-l-[var(--accent-amber)] bg-[var(--accent-amber-soft)]'
                    : 'border-l-[var(--border-default)] hover:border-l-[var(--accent-amber)]/40 hover:bg-[var(--bg-surface)]/40'
                )}
                whileHover={{ x: 4, transition: { duration: 0.3 } }}
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
              className="w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-cs)] to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            />
            <span className="absolute font-display text-sm text-[var(--accent-cs)] bg-[var(--bg-surface)] px-2">vs</span>
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
          <div className="text-center max-w-2xl mx-auto px-6 py-5 border-t border-b border-[var(--accent-cs)]/15">
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
              <span className="line-through decoration-[3px] decoration-[var(--accent-cs)]/60">
                <GlitchText
                  className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none"
                  intensity={i === 0 ? 'high' : 'medium'}
                  color="var(--accent-amber-vivid)"
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
      <InteractiveParticles preset="rising-bubbles" color="#4A7C5C" count={40} speed={0.8} />
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
   DATA GRAVEYARD → LIVING INTELLIGENCE transformation.
   Tombstones of demographic data dissolve, behavioral
   signals emerge as pulsing, alive elements.
   ═══════════════════════════════════════════════════ */

const tombstoneRotations = [-3, 2.5, -1.8, 3.2] as const
const tombstoneDelays = [0, 0.08, 0.15, 0.22] as const

function Tombstone({ label, index }: { label: string; index: number }) {
  return (
    <motion.div
      className={cn(
        'relative px-5 py-7 rounded-t-lg rounded-b-sm border border-[var(--text-muted)]/15',
        'bg-gradient-to-b from-[#1a1d24] to-[#12151a]',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
      )}
      style={{
        rotate: tombstoneRotations[index % tombstoneRotations.length],
        transformOrigin: 'bottom center',
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 0.45, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: tombstoneDelays[index % tombstoneDelays.length],
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {/* Crack line decoration */}
      <div
        className="absolute top-3 right-3 w-px h-6 bg-[var(--text-muted)]/20"
        style={{ rotate: `${15 + index * 8}deg` }}
      />
      <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]/60 mb-2">
        RIP
      </span>
      <Body as="span" className="text-sm text-[var(--text-muted)]/70 leading-tight block">
        {label}
      </Body>
      {/* Tombstone base */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-1 rounded-b bg-[var(--text-muted)]/10" />
    </motion.div>
  )
}

function LivingSignal({ label, index }: { label: string; index: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.6 + index * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      <motion.div
        className={cn(
          'relative px-6 py-5 rounded-2xl overflow-hidden',
          'border border-[#26C6DA]/30',
          'bg-gradient-to-br from-[#26C6DA]/10 via-[#26C6DA]/5 to-transparent',
          'backdrop-blur-sm'
        )}
        animate={{
          boxShadow: [
            '0 0 0px rgba(38,198,218,0.0), 0 0 0px rgba(38,198,218,0.0)',
            '0 0 20px rgba(38,198,218,0.15), 0 0 40px rgba(38,198,218,0.05)',
            '0 0 0px rgba(38,198,218,0.0), 0 0 0px rgba(38,198,218,0.0)',
          ],
        }}
        transition={{
          duration: 2.5 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.5,
        }}
      >
        {/* Pulsing dot indicator */}
        <div className="flex items-center gap-3">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#26C6DA] shrink-0"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
            }}
          />
          <Body as="span" className="text-sm text-[var(--text-primary)] font-medium">
            {label}
          </Body>
        </div>

        {/* Simulated data activity line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#26C6DA]/60 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.7,
          }}
          style={{ width: '50%' }}
        />
      </motion.div>
    </motion.div>
  )
}

export function DataVerdade() {
  return (
    <Section id="data-verdade-sobre-cliente" bg="purple-glow" spacing="dramatic">
      <AmbientBackground variant="mesh-dark" />
      {/* Subtle cemetery fog effect — low-opacity radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 80%, rgba(38,198,218,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <Overline className="mb-6 text-[var(--text-muted)] inline-flex items-center gap-2">
          <Database className="w-4 h-4 text-[#26C6DA]" />Dados
        </Overline>

        <GsapTextReveal
          tag="h2"
          className="text-[clamp(1.75rem,4.5vw,3.5rem)] max-w-4xl"
          variant="words"
          stagger={0.06}
          scrub
          color="#26C6DA"
          glowColor="rgba(38,198,218,0.4)"
        >
          {content.dataVerdade.headline}
        </GsapTextReveal>

        <ScrollReveal className="mt-8 max-w-3xl" delay={0.1}>
          <Body className="text-lg leading-relaxed">{content.dataVerdade.body}</Body>
        </ScrollReveal>

        {/* === DATA GRAVEYARD === */}
        <div className="mt-20">
          <ScrollReveal variant="fade" delay={0.15}>
            <Overline className="text-[var(--text-muted)]/60 mb-8 block text-center font-mono tracking-[0.2em]">
              Cemiterio de Dados Demograficos
            </Overline>
          </ScrollReveal>

          {/* Tombstone grid — staggered, tilted, decayed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-3xl mx-auto">
            {content.dataVerdade.contrast.bad.map((item, i) => (
              <Tombstone key={item} label={item} index={i} />
            ))}
          </div>

          {/* Transition divider — dissolving line */}
          <div className="relative my-16 md:my-24 flex items-center justify-center">
            <motion.div
              className="absolute w-full h-px"
              style={{
                background:
                  'linear-gradient(to right, transparent 0%, rgba(138,145,156,0.3) 20%, rgba(38,198,218,0.5) 50%, rgba(138,145,156,0.3) 80%, transparent 100%)',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            />
            <motion.span
              className="relative z-10 px-4 py-1.5 rounded-full bg-[var(--bg-primary)] border border-[#26C6DA]/30 font-mono text-[10px] uppercase tracking-[0.2em] text-[#26C6DA]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Transformacao
            </motion.span>
          </div>

          {/* === LIVING BEHAVIORAL DATA === */}
          <ScrollReveal variant="fade" delay={0.1}>
            <Overline className="text-[#26C6DA] mb-10 block text-center font-mono tracking-[0.2em]">
              Inteligencia Comportamental Viva
            </Overline>
          </ScrollReveal>

          {/* Organic flowing layout — NOT a grid. Staggered widths, varied margins */}
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-[58%]">
                <LivingSignal label={content.dataVerdade.contrast.good[0]} index={0} />
              </div>
              <div className="md:w-[42%] md:mt-6">
                <LivingSignal label={content.dataVerdade.contrast.good[1]} index={1} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:pl-8">
              <div className="md:w-[46%]">
                <LivingSignal label={content.dataVerdade.contrast.good[2]} index={2} />
              </div>
              <div className="md:w-[54%] md:mt-4">
                <LivingSignal label={content.dataVerdade.contrast.good[3]} index={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { DataVerdade as ChapterDataVerdade }
