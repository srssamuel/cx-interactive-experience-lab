'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { MagneticButton } from '@/components/effects/magnetic-button'

const ease = [0.16, 1, 0.3, 1] as const

const dimensions = [
  { label: 'CX', stat: '$3.8T', desc: 'em risco global por experiencias que falham', color: '#42A5F5' },
  { label: 'CS', stat: '120%', desc: 'NRR quando expansao supera aquisicao', color: '#00BCD4' },
  { label: 'Data', stat: '245%', desc: 'mais decisoes acertadas com dados integrados', color: '#26C6DA' },
  { label: 'AI', stat: '82%', desc: 'de processos repetitivos eliminados', color: '#7C4DFF' },
]

export default function PortalPage() {
  return (
    <main className="relative w-full">

      {/* =========================================
          SECTION 1 — HERO
          Fundo 100% transparente — só o 3D global
          ========================================= */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Subtle vignette overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(52,152,219,0.08) 0%, transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.4) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-blue-vivid)] mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              CX Experience Lab
            </motion.span>

            <motion.h1
              className="font-display leading-[0.92]"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
            >
              <span className="block text-shimmer">
                A Convergencia
              </span>
              <span className="block text-gradient-blue">
                Invisivel
              </span>
            </motion.h1>

            <motion.p
              className="mt-10 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease }}
            >
              CX, CS, Dados e IA operam como silos. Mas as empresas que vencem
              ja os fundiram num unico sistema nervoso. Esta experiencia revela
              o modelo que ninguem esta documentando.
            </motion.p>

            <motion.div
              className="mt-12 flex items-center gap-6 text-sm font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
            >
              <span className="text-[var(--accent-blue-vivid)]">22 capitulos</span>
              <span className="w-px h-4 bg-[var(--accent-blue)] opacity-40" />
              <span className="text-[var(--text-secondary)]">90 min</span>
              <span className="w-px h-4 bg-[var(--accent-blue)] opacity-40" />
              <span className="text-[var(--text-secondary)]">4 dimensoes</span>
            </motion.div>

            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease }}
            >
              <MagneticButton strength={0.3} radius={120}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 text-base font-mono uppercase tracking-[0.12em] text-white rounded-sm transition-all duration-500"
                  style={{
                    background: 'rgba(52,152,219,0.9)',
                    boxShadow: '0 0 40px rgba(52,152,219,0.5), 0 0 80px rgba(52,152,219,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <span className="block w-px h-16 bg-gradient-to-b from-transparent to-[var(--accent-blue)]" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2 — FOUR DIMENSIONS
          Narrativa espacial — sem cards, cada dimensão
          emerge do 3D com tipografia dramatica
          ========================================= */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        {/* Soft darkening for legibility, 3D still visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.35) 85%, transparent 100%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(52,152,219,0.5), transparent)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-32">
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

          {/* Spatial dimension reveals — each offset differently */}
          <div className="space-y-32 md:space-y-40">
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
                  {/* Giant stat */}
                  <div className="flex-shrink-0">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.3em] block mb-3"
                      style={{ color: dim.color }}
                    >
                      {dim.label}
                    </span>
                    <span
                      className="font-display leading-none block"
                      style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        color: dim.color,
                        textShadow: `0 0 60px ${dim.color}60, 0 0 120px ${dim.color}20`,
                      }}
                    >
                      {dim.stat}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex-1 pt-2 md:pt-6">
                    <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-primary)] font-light">
                      {dim.desc}
                    </p>
                    <div
                      className="mt-6 h-px w-24"
                      style={{
                        background: `linear-gradient(90deg, ${dim.color}, transparent)`,
                        boxShadow: `0 0 20px ${dim.color}40`,
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Convergence reveal */}
          <ScrollReveal delay={0.3}>
            <div className="mt-40 text-center">
              <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] text-[var(--text-primary)]">
                &ldquo;As empresas mais valiosas nao otimizam funcoes —
                <br className="hidden md:block" />
                elas <span className="text-gradient-blue">eliminam as fronteiras</span> entre elas.&rdquo;
              </p>

              <div className="mt-16">
                <MagneticButton strength={0.25} radius={100}>
                  <Link
                    href="/experiencias/convergencia-invisivel"
                    className="group inline-flex items-center gap-4 px-12 py-5 text-base font-mono uppercase tracking-[0.12em] text-white rounded-sm transition-all duration-500"
                    style={{
                      background: 'rgba(52,152,219,0.85)',
                      boxShadow: '0 0 50px rgba(52,152,219,0.5), 0 0 100px rgba(52,152,219,0.2)',
                      backdropFilter: 'blur(8px)',
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
      <footer className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }}
        />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(0,188,212,0.4) 50%, transparent 90%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal>
            <div className="mb-16">
              <span className="font-display text-3xl md:text-4xl text-gradient-blue tracking-tight block">
                CX Experience Lab
              </span>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] max-w-lg">
                Experiencias digitais interativas para keynotes, workshops e apresentacoes executivas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <ScrollReveal delay={0.1}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Dimensoes
                </span>
                <div className="flex flex-wrap gap-3">
                  {dimensions.map((dim) => (
                    <span
                      key={dim.label}
                      className="font-mono text-xs px-4 py-2 rounded"
                      style={{
                        color: dim.color,
                        border: `1px solid ${dim.color}40`,
                        background: `${dim.color}10`,
                      }}
                    >
                      {dim.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Navegacao
                </span>
                <nav className="flex flex-col gap-3">
                  <Link href="/experiencias/convergencia-invisivel" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-blue-vivid)] transition-colors duration-300 font-mono group flex items-center gap-2">
                    A Convergencia Invisivel
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                </nav>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-5 block">
                  Sobre
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Projetado para presenca de palco. Cada pixel comunica antes do texto.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: '1px solid rgba(52,152,219,0.15)' }}
            >
              <span className="font-mono text-xs text-[var(--text-muted)]">
                2025 &mdash; Designed for stage presence
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-[var(--accent-blue-vivid)]">22 capitulos</span>
                <span className="w-px h-3 bg-[var(--accent-blue)] opacity-30" />
                <span className="font-mono text-[10px] text-[var(--accent-teal)]">4 dimensoes</span>
                <span className="w-px h-3 bg-[var(--accent-teal)] opacity-30" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">Next.js + Three.js + GSAP</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  )
}
