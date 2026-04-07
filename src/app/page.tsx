'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LazyParticleField } from '@/components/three/lazy-particle-field'

import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { TextReveal } from '@/components/motion/text-reveal'
import { Spotlight } from '@/components/effects/spotlight'
import { MagneticButton } from '@/components/effects/magnetic-button'
import { MovingBorder } from '@/components/effects/moving-border'
import { GradientMesh } from '@/components/effects/gradient-mesh'
import { FloatingElements } from '@/components/effects/floating-elements'

const ease = [0.16, 1, 0.3, 1] as const

const dimensions = [
  {
    tag: 'CX',
    label: 'Customer Experience',
    stat: '$3.8T at risk',
    body: 'O custo global de experiencias que falham. Cada ponto de friccao e receita evaporando.',
    accent: 'var(--accent-amber)',
    variant: 'scale' as const,
  },
  {
    tag: 'CS',
    label: 'Customer Success',
    stat: 'NRR 106\u2192120%',
    body: 'Net Revenue Retention como motor de crescimento. Expansao supera aquisicao quando o sistema funciona.',
    accent: 'var(--accent-green)',
    variant: 'blur' as const,
  },
  {
    tag: 'Data',
    label: 'Dados & Insights',
    stat: '245% mais decisoes',
    body: 'Organizacoes data-driven decidem com velocidade e precisao que intuicao nao alcanca.',
    accent: 'var(--accent-blue)',
    variant: 'slide-left' as const,
  },
  {
    tag: 'AI',
    label: 'Inteligencia Artificial',
    stat: '82% automacao',
    body: 'Nao e sobre substituir. E sobre liberar capacidade humana para o que maquinas nao fazem.',
    accent: 'var(--accent-purple)',
    variant: 'slide-right' as const,
  },
]

export default function PortalPage() {
  return (
    <main className="relative overflow-hidden">
      {/* =========================================
          SECTION 1 — FULL VIEWPORT HERO
          ========================================= */}
      <Spotlight className="relative min-h-screen flex items-center" color="rgba(200, 135, 58, 0.08)" size={700}>
        {/* Backgrounds — layered */}
        <GradientMesh opacity={0.15} />
        <div className="absolute inset-0 z-0">
          <LazyParticleField color="#C8873A" count={120} bloom interactive />
        </div>
        <FloatingElements count={6} color="var(--accent-amber)" />

        {/* Content — LEFT-aligned, asymmetric */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            {/* Overline */}
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              CX Experience Lab
            </motion.span>

            {/* Headline — two lines, different treatments */}
            <motion.h1
              className="font-display leading-[0.95]"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
            >
              <span className="block text-shimmer">
                A Convergencia
              </span>
              <span className="block text-gradient-amber">
                Invisivel
              </span>
            </motion.h1>

            {/* Thesis */}
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

            {/* Stat strip */}
            <motion.div
              className="mt-12 flex items-center gap-6 text-sm font-mono text-[var(--text-muted)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease }}
            >
              <span>22 capitulos</span>
              <span className="w-px h-4 bg-[var(--text-muted)] opacity-30" />
              <span>90 min</span>
              <span className="w-px h-4 bg-[var(--text-muted)] opacity-30" />
              <span>4 dimensoes</span>
            </motion.div>

            {/* CTA — Magnetic */}
            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease }}
            >
              <MagneticButton strength={0.3} radius={120}>
                <Link
                  href="/experiencias/convergencia-invisivel"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 text-sm font-mono uppercase tracking-[0.15em] text-[var(--text-primary)] border border-transparent hover:border-[var(--accent-amber)] transition-all duration-700"
                >
                  <span className="relative z-10">Iniciar Experiencia</span>
                  <span className="relative z-10 inline-block w-6 h-px bg-[var(--accent-amber)] transition-all duration-500 group-hover:w-10" />
                  {/* Border reveal effect */}
                  <span className="absolute inset-0 border border-[rgba(255,255,255,0.06)] group-hover:border-[var(--accent-amber)] transition-colors duration-700" />
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-amber)] group-hover:w-full transition-all duration-700" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <span className="block w-px h-12 bg-gradient-to-b from-transparent to-[var(--text-muted)]" />
        </motion.div>
      </Spotlight>

      {/* =========================================
          SECTION 2 — FOUR DIMENSION CARDS
          ========================================= */}
      <section className="relative py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section heading — left-aligned */}
          <div className="mb-20 max-w-xl">
            <TextReveal
              tag="h2"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-[var(--text-primary)]"
            >
              Quatro forcas. Um sistema.
            </TextReveal>
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {dimensions.map((dim, i) => (
              <ScrollReveal
                key={dim.tag}
                variant={dim.variant}
                delay={0.1 * i}
              >
                <MovingBorder borderColor={dim.accent} duration={5 + i} borderWidth={1} className="rounded-sm">
                <div
                  className="glass relative p-8 md:p-10 rounded-sm border-l-[3px] min-h-[220px] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500"
                  style={{ borderLeftColor: dim.accent }}
                >
                  {/* Top row: tag + stat */}
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.25em] opacity-60"
                      style={{ color: dim.accent }}
                    >
                      {dim.tag}
                    </span>
                    <span
                      className="font-display text-2xl md:text-3xl"
                      style={{ color: dim.accent }}
                    >
                      {dim.stat}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3">
                    {dim.label}
                  </h3>

                  {/* Body */}
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-md">
                    {dim.body}
                  </p>

                  {/* Subtle hover glow */}
                  <div
                    className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 20% 50%, color-mix(in srgb, ${dim.accent} 6%, transparent), transparent 70%)`,
                    }}
                  />
                </div>
                </MovingBorder>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — FOOTER
          ========================================= */}
      <footer className="relative py-20 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] opacity-50">
            2025 &mdash; Designed for stage presence
          </span>
        </div>
      </footer>
    </main>
  )
}
