'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { AnimatedCounter } from '@/components/motion/animated-counter'
import { MagneticButton } from '@/components/effects/magnetic-button'

const ease = [0.16, 1, 0.3, 1] as const

const dimensions = [
  {
    label: 'CX',
    prefix: '$',
    value: 3.8,
    suffix: 'T',
    decimals: 1,
    desc: 'em risco global por experiencias que falham',
    color: '#C8873A',
    accent: 'pulse-ring',
  },
  {
    label: 'CS',
    prefix: '',
    value: 120,
    suffix: '%',
    decimals: 0,
    desc: 'NRR quando expansao supera aquisicao',
    color: '#4A7C5C',
    accent: 'rising-bar',
  },
  {
    label: 'Data',
    prefix: '',
    value: 245,
    suffix: '%',
    decimals: 0,
    desc: 'mais decisoes acertadas com dados integrados',
    color: '#26C6DA',
    accent: 'scan-line',
  },
  {
    label: 'AI',
    prefix: '',
    value: 82,
    suffix: '%',
    decimals: 0,
    desc: 'de processos repetitivos eliminados',
    color: '#7C4DFF',
    accent: 'glitch',
  },
]

export default function PortalPage() {
  const reducedMotion = useReducedMotion()
  const motionProps = reducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : undefined

  return (
    <main className="relative w-full">

      {/* =========================================
          SECTION 1 — HERO
          Transparent over global 3D. Convergence orb
          as visual anchor. Staggered reveals.
          ========================================= */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Vignette for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(200,135,58,0.06) 0%, transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.4) 0%, transparent 50%)',
          }}
        />

        {/* Convergence orb — visual focal point */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <motion.div
            className="relative -mr-[10vw] md:mr-[8vw]"
            {...(reducedMotion ? {} : {
              animate: { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] },
              transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            })}
          >
            <div
              className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(200,135,58,0.12) 0%, rgba(200,135,58,0.04) 40%, transparent 70%)',
                boxShadow: '0 0 120px rgba(200,135,58,0.12), 0 0 240px rgba(200,135,58,0.04)',
              }}
            />
            {/* Inner convergence rings */}
            {[0.6, 0.4, 0.2].map((scale, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: `rgba(200,135,58,${0.06 + i * 0.03})`,
                  transform: `scale(${scale})`,
                }}
                {...(reducedMotion ? {} : {
                  animate: { rotate: i % 2 === 0 ? 360 : -360 },
                  transition: { duration: 30 + i * 10, repeat: Infinity, ease: 'linear' },
                })}
              />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 2xl:px-32">
          <div className="max-w-3xl">
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-amber-vivid)] mb-10"
              {...(motionProps ?? {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6, delay: 0.3, ease },
              })}
            >
              CX Experience Lab
            </motion.span>

            <motion.h1
              className="font-display leading-[0.92]"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
              {...(motionProps ?? {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1.2, delay: 0.6, ease },
              })}
            >
              <span className="block text-shimmer">
                A Convergencia
              </span>
              <span className="block text-gradient-blue">
                Invisivel
              </span>
            </motion.h1>

            <motion.p
              className="mt-10 max-w-lg text-lg md:text-xl leading-relaxed text-[var(--text-secondary)]"
              {...(motionProps ?? {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, delay: 1.0, ease },
              })}
            >
              CX, CS, Dados e IA operam como silos. Mas as empresas que vencem
              ja os fundiram num unico sistema nervoso. Esta experiencia revela
              o modelo que ninguem esta documentando.
            </motion.p>

            {/* Metadata — staggered individually */}
            <div className="mt-12 flex items-center gap-6 text-sm font-mono">
              {[
                { text: '22 capitulos', color: 'var(--accent-blue-vivid)' },
                { text: '90 min', color: 'var(--text-secondary)' },
                { text: '4 dimensoes', color: 'var(--text-secondary)' },
              ].map((item, i) => (
                <motion.span
                  key={item.text}
                  style={{ color: item.color }}
                  {...(motionProps ?? {
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 1.2 + i * 0.15, ease },
                  })}
                >
                  {i > 0 && <span className="inline-block w-px h-4 bg-[var(--accent-amber)] opacity-40 mr-6 align-middle" />}
                  {item.text}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-14"
              {...(motionProps ?? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 1.6, ease },
              })}
            >
              <MagneticButton strength={0.3} radius={120}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 text-base font-mono uppercase tracking-[0.12em] text-white rounded-sm transition-all duration-500 hover:brightness-110"
                  style={{
                    background: '#C8873A',
                    boxShadow: '0 0 40px rgba(200,135,58,0.4), 0 0 80px rgba(200,135,58,0.15)',
                  }}
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator — animated pulse */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          {...(motionProps ?? {
            initial: { opacity: 0 },
            animate: { opacity: 0.6 },
            transition: { duration: 1, delay: 2.5 },
          })}
        >
          <motion.span
            className="block font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)]"
            {...(reducedMotion ? {} : {
              animate: { opacity: [0.4, 0.8, 0.4] },
              transition: { duration: 2, repeat: Infinity },
            })}
          >
            scroll
          </motion.span>
          <span className="block w-px h-12 bg-gradient-to-b from-transparent to-[var(--accent-amber)]" />
        </motion.div>
      </section>

      {/* =========================================
          CONVERGING LINES DIVIDER
          SVG transition between hero and dimensions
          ========================================= */}
      <div className="relative h-32 md:h-48 overflow-hidden">
        <svg
          viewBox="0 0 1200 200"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Four converging lines — one per dimension */}
          {dimensions.map((dim, i) => {
            const startX = 50 + i * 300
            return (
              <motion.line
                key={dim.label}
                x1={startX}
                y1="0"
                x2="600"
                y2="200"
                stroke={dim.color}
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            )
          })}
          {/* Convergence point glow */}
          <circle cx="600" cy="200" r="4" fill="#C8873A" opacity="0.6">
            <animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* =========================================
          SECTION 2 — FOUR DIMENSIONS
          Each dimension has unique visual treatment.
          Stats animate counting up on scroll.
          ========================================= */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Soft darkening — 3D still visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.35) 90%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24 2xl:px-32">
          <div className="mb-28 md:mb-36">
            <TextReveal
              tag="h2"
              className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-[var(--text-primary)]"
            >
              Quatro forcas. Um sistema.
            </TextReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-md text-[var(--text-secondary)] text-base leading-relaxed">
                Separadas, sao departamentos. Conectadas, sao vantagem competitiva irreplicavel.
              </p>
            </ScrollReveal>
          </div>

          {/* Dimension reveals — each visually differentiated */}
          <div className="space-y-28 md:space-y-36">
            {dimensions.map((dim, i) => (
              <ScrollReveal
                key={dim.label}
                variant={i % 2 === 0 ? 'slide-right' : 'slide-left'}
                delay={0.1}
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                    i % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                  style={{ maxWidth: '900px', marginLeft: i % 2 !== 0 ? 'auto' : '0' }}
                >
                  {/* Stat block with unique accent per dimension */}
                  <div className="flex-shrink-0 relative">
                    {/* Unique visual accent per dimension */}
                    {dim.accent === 'pulse-ring' && (
                      <motion.div
                        className="absolute -inset-6 rounded-full border"
                        style={{ borderColor: `${dim.color}20` }}
                        {...(reducedMotion ? {} : {
                          animate: { scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] },
                          transition: { duration: 3, repeat: Infinity },
                        })}
                      />
                    )}
                    {dim.accent === 'rising-bar' && (
                      <motion.div
                        className="absolute -left-4 bottom-0 w-1 rounded-full"
                        style={{ background: `linear-gradient(to top, transparent, ${dim.color})` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    {dim.accent === 'scan-line' && (
                      <motion.div
                        className="absolute inset-x-0 h-px"
                        style={{ background: dim.color, opacity: 0.4 }}
                        {...(reducedMotion ? {} : {
                          animate: { top: ['0%', '100%', '0%'] },
                          transition: { duration: 4, repeat: Infinity, ease: 'linear' },
                        })}
                      />
                    )}
                    {dim.accent === 'glitch' && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{ mixBlendMode: 'screen' }}
                        {...(reducedMotion ? {} : {
                          animate: { x: [0, -2, 2, 0], opacity: [0, 0.15, 0.15, 0] },
                          transition: { duration: 0.3, repeat: Infinity, repeatDelay: 4 },
                        })}
                      >
                        <div className="w-full h-full" style={{ background: dim.color, opacity: 0.1 }} />
                      </motion.div>
                    )}

                    <span
                      className="font-mono text-xs uppercase tracking-[0.3em] block mb-3 relative"
                      style={{ color: dim.color }}
                    >
                      {dim.label}
                    </span>
                    <span
                      className="font-display leading-none block relative"
                      style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        color: dim.color,
                        textShadow: `0 0 60px ${dim.color}60, 0 0 120px ${dim.color}20`,
                      }}
                    >
                      <AnimatedCounter
                        value={dim.value}
                        prefix={dim.prefix}
                        suffix={dim.suffix}
                        decimals={dim.decimals}
                        duration={2.5}
                      />
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex-1 pt-2 md:pt-6">
                    <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] font-light">
                      {dim.desc}
                    </p>
                    <div
                      className="mt-6 h-px"
                      style={{
                        width: `${60 + i * 10}%`,
                        background: `linear-gradient(${i % 2 !== 0 ? '270deg' : '90deg'}, ${dim.color}, transparent)`,
                        boxShadow: `0 0 20px ${dim.color}40`,
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing provocation */}
          <ScrollReveal delay={0.3}>
            <div className="mt-36 md:mt-44 text-center">
              <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] text-[var(--text-primary)]">
                &ldquo;As empresas mais valiosas nao otimizam funcoes —
                <br className="hidden md:block" />
                elas <span className="text-gradient-blue">eliminam as fronteiras</span> entre elas.&rdquo;
              </p>

              <div className="mt-16">
                <MagneticButton strength={0.25} radius={100}>
                  <Link
                    href="/experiencias/convergencia-invisivel"
                    className="group inline-flex items-center gap-4 px-12 py-5 text-base font-mono uppercase tracking-[0.12em] text-white rounded-sm transition-all duration-500 hover:brightness-110"
                    style={{
                      background: '#C8873A',
                      boxShadow: '0 0 50px rgba(200,135,58,0.4), 0 0 100px rgba(200,135,58,0.15)',
                    }}
                  >
                    Explorar os 22 capitulos
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — FOOTER AS CLOSING STATEMENT
          Not a sitemap. A keynote-ending provocation.
          ========================================= */}
      <footer className="relative py-28 md:py-40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }}
        />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(200,135,58,0.3) 50%, transparent 90%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 lg:px-24 2xl:px-32 text-center">
          {/* Closing statement — keynote style */}
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-amber-vivid)] block mb-8">
              CX Experience Lab
            </span>
            <p className="font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] text-[var(--text-primary)] max-w-3xl mx-auto">
              A janela para construir esse sistema esta aberta.
              <br />
              <span className="text-[var(--text-secondary)]">Mas fechando.</span>
            </p>
          </ScrollReveal>

          {/* Dimension badges — horizontal */}
          <ScrollReveal delay={0.2}>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              {dimensions.map((dim) => (
                <span
                  key={dim.label}
                  className="font-mono text-xs px-5 py-2.5 rounded transition-colors duration-300"
                  style={{
                    color: dim.color,
                    border: `1px solid ${dim.color}30`,
                    background: `${dim.color}08`,
                  }}
                >
                  {dim.label}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Bottom line */}
          <ScrollReveal delay={0.3}>
            <div
              className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="font-mono text-xs text-[var(--text-muted)]">
                2025 &mdash; Designed for stage presence
              </span>
              <div className="flex items-center gap-4">
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent-amber-vivid)] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  Entrar
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <span className="w-px h-3 bg-[var(--accent-amber)] opacity-20" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">Next.js + Three.js + GSAP</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  )
}
