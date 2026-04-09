'use client'

import { motion } from 'framer-motion'
import { Abertura, ContextoMundoMudou, ContextoIlusao, CxEquacao, CxExperiencia, CxCusto, CxReflexao, CsParadoxo, CsMetricas, CsExpansao, DataVerdade } from './chapters-part1'
import { DataMaturidade, DataDadoVsInsight, AiOQueFaz, AiOndeGanha, AiArmadilhas, ConvergenciaSistema, ConvergenciaLidera, WorkshopDiagnostico, WorkshopDiscussao, FechamentoJanela, FechamentoProvocacao } from './chapters-part2'

function ActDivider({ act, title, color }: { act: string; title: string; color: string }) {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Horizontal rule with glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 30px ${color}40`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Act label */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.4em] px-4 py-2"
          style={{
            color,
            background: 'var(--bg-primary)',
            border: `1px solid ${color}20`,
          }}
        >
          {act}
        </span>
      </motion.div>
      <motion.p
        className="text-center mt-4 font-display text-sm tracking-wide text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {title}
      </motion.p>
    </div>
  )
}

export function ConvergenciaInvisivel() {
  return (
    <>
      {/* ACT I — Abertura + Contexto */}
      <Abertura />
      <ContextoMundoMudou />
      <ContextoIlusao />

      <ActDivider act="Ato I" title="Customer Experience" color="#C8873A" />

      {/* ACT I — CX */}
      <CxEquacao />
      <CxExperiencia />
      <CxCusto />
      <CxReflexao />

      <ActDivider act="Ato II" title="Customer Success" color="#4A7C5C" />

      {/* ACT II — CS */}
      <CsParadoxo />
      <CsMetricas />
      <CsExpansao />

      <ActDivider act="Ato II" title="Dados" color="#26C6DA" />

      {/* ACT II — Data */}
      <DataVerdade />
      <DataMaturidade />
      <DataDadoVsInsight />

      <ActDivider act="Ato III" title="Inteligencia Artificial" color="#7C4DFF" />

      {/* ACT III — AI */}
      <AiOQueFaz />
      <AiOndeGanha />
      <AiArmadilhas />

      <ActDivider act="Ato IV" title="A Convergencia" color="#C8873A" />

      {/* ACT IV — Convergencia */}
      <ConvergenciaSistema />
      <ConvergenciaLidera />

      {/* Workshop */}
      <WorkshopDiagnostico />
      <WorkshopDiscussao />

      {/* Fechamento */}
      <FechamentoJanela />
      <FechamentoProvocacao />
    </>
  )
}
