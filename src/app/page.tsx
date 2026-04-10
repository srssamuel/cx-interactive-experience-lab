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
  },
  {
    label: 'CS',
    prefix: '',
    value: 120,
    suffix: '%',
    decimals: 0,
    desc: 'NRR quando expansao supera aquisicao',
    color: '#4A7C5C',
  },
  {
    label: 'Data',
    prefix: '',
    value: 245,
    suffix: '%',
    decimals: 0,
    desc: 'mais decisoes acertadas com dados integrados',
    color: '#26C6DA',
  },
  {
    label: 'AI',
    prefix: '',
    value: 82,
    suffix: '%',
    decimals: 0,
    desc: 'de processos repetitivos eliminados',
    color: '#7C4DFF',
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
          ========================================= */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(200,135,58,0.04) 0%, transparent 60%)',
          }}
        />

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
              <span className="block text-gradient-amber">
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

            {/* Metadata */}
            <div className="mt-12 flex items-center gap-6 text-sm font-mono">
              {[
                { text: '22 capitulos', color: 'var(--accent-amber-vivid)' },
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
                  {i > 0 && <span className="inline-block w-px h-4 bg-[var(--accent-amber)] opacity-30 mr-6 align-middle" />}
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
                    boxShadow: '0 0 30px rgba(200,135,58,0.25)',
                  }}
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          {...(motionProps ?? {
            initial: { opacity: 0 },
            animate: { opacity: 0.5 },
            transition: { duration: 1, delay: 2.5 },
          })}
        >
          <motion.span
            className="block font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)]"
            {...(reducedMotion ? {} : {
              animate: { opacity: [0.3, 0.6, 0.3] },
              transition: { duration: 2.5, repeat: Infinity },
            })}
          >
            scroll
          </motion.span>
          <span className="block w-px h-10 bg-gradient-to-b from-transparent to-[var(--accent-amber)] opacity-40" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2 — FOUR DIMENSIONS
          ========================================= */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.15) 90%, transparent 100%)',
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

          {/* Dimension reveals */}
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
                  {/* Stat block */}
                  <div className="flex-shrink-0 relative">
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
                        background: `linear-gradient(${i % 2 !== 0 ? '270deg' : '90deg'}, ${dim.color}50, transparent)`,
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
                elas <span className="text-gradient-amber">eliminam as fronteiras</span> entre elas.&rdquo;
              </p>

              <div className="mt-16">
                <MagneticButton strength={0.25} radius={100}>
                  <Link
                    href="/experiencias/convergencia-invisivel"
                    className="group inline-flex items-center gap-4 px-12 py-5 text-base font-mono uppercase tracking-[0.12em] text-white rounded-sm transition-all duration-500 hover:brightness-110"
                    style={{
                      background: '#C8873A',
                      boxShadow: '0 0 30px rgba(200,135,58,0.25)',
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
          SECTION 3 — FOOTER
          ========================================= */}
      <footer className="relative py-28 md:py-40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.3))' }}
        />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(200,135,58,0.2) 50%, transparent 90%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 lg:px-24 2xl:px-32 text-center">
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

          <ScrollReveal delay={0.2}>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              {dimensions.map((dim) => (
                <span
                  key={dim.label}
                  className="font-mono text-xs px-5 py-2.5 rounded transition-colors duration-300"
                  style={{
                    color: dim.color,
                    border: `1px solid ${dim.color}20`,
                    background: `${dim.color}06`,
                  }}
                >
                  {dim.label}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div
              className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
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
                <span className="w-px h-3 bg-[var(--accent-amber)] opacity-15" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">Next.js + Three.js + GSAP</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  )
}
