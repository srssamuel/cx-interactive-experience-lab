'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AmbientBackground } from '@/components/cinematic/ambient-background'
import { ScrollReveal } from '@/components/motion/scroll-reveal'
import { AnimatedCounter } from '@/components/motion/animated-counter'

const ease = [0.16, 1, 0.3, 1] as const

const themes = [
  { label: 'Customer Experience', stat: '$3.8T', desc: 'em risco por experiencias ruins' },
  { label: 'Dados & Inteligencia', stat: '245%', desc: 'ROI com analise orientada por AI' },
  { label: 'Convergencia', stat: '22', desc: 'capitulos em 90 minutos' },
]

export default function PortalPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <AmbientBackground variant="diagonal-split" />
      <AmbientBackground variant="spotlight" opacity={0.5} />

      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          className="overline mb-8 block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          CX Experience Lab
        </motion.span>

        <motion.h1
          className="font-display text-center leading-[1.05] tracking-tight"
          style={{ fontSize: 'var(--text-hero)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          O Sistema que Nenhuma<br />
          Empresa Ainda Construiu
        </motion.h1>

        <motion.p
          className="mt-8 text-[var(--text-secondary)] max-w-[560px] text-center text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          Uma experiencia imersiva sobre a convergencia de CX, Customer Success,
          Dados e Inteligencia Artificial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
        >
          <Link
            href="/experiencias/convergencia-invisivel"
            className="mt-12 inline-block px-10 py-4 border border-[var(--border-hover)] rounded-lg text-sm tracking-wide uppercase hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] hover:shadow-[var(--shadow-glow-amber)] transition-all duration-500"
          >
            Iniciar Experiencia
          </Link>
        </motion.div>

        {/* Theme preview cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
          {themes.map((theme, i) => (
            <ScrollReveal key={theme.label} delay={1.2 + i * 0.15}>
              <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 text-center hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1">
                <span className="font-display text-3xl text-[var(--accent-amber)]">
                  {theme.stat}
                </span>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{theme.desc}</p>
                <span className="mt-3 block font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {theme.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <motion.span
          className="mt-20 font-mono text-xs text-[var(--text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          22 capitulos · 90 minutos · Fontes reais
        </motion.span>
      </div>
    </main>
  )
}
