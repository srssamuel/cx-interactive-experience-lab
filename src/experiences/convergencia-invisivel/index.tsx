'use client'

import { Abertura, ContextoMundoMudou, ContextoIlusao, CxEquacao, CxExperiencia, CxCusto, CxReflexao, CsParadoxo, CsMetricas, CsExpansao, DataVerdade } from './chapters-part1'
import { DataMaturidade, DataDadoVsInsight, AiOQueFaz, AiOndeGanha, AiArmadilhas, ConvergenciaSistema, ConvergenciaLidera, WorkshopDiagnostico, WorkshopDiscussao, FechamentoJanela, FechamentoProvocacao } from './chapters-part2'
import { SkewTransition } from '@/components/motion/skew-transition'

function GradientDivider({ variant = 'amber' }: { variant?: 'amber' | 'green' | 'blue' | 'purple' }) {
  const classMap = {
    amber: 'gradient-divider',
    green: 'gradient-divider-green',
    blue: 'gradient-divider-blue',
    purple: 'gradient-divider-purple',
  }
  return <hr className={classMap[variant]} aria-hidden="true" />
}

export function ConvergenciaInvisivel() {
  return (
    <>
      {/* ACT I — Contexto */}
      <Abertura />
      <GradientDivider />
      <ContextoMundoMudou />
      <GradientDivider />
      <ContextoIlusao />

      {/* ACT I → CX */}
      <GradientDivider />
      <CxEquacao />
      <GradientDivider />
      <CxExperiencia />
      <GradientDivider />
      <CxCusto />
      <GradientDivider />
      <CxReflexao />

      <SkewTransition color="surface" direction="down" />

      {/* ACT II — CS + Data */}
      <CsParadoxo />
      <GradientDivider variant="green" />
      <CsMetricas />
      <GradientDivider variant="green" />
      <CsExpansao />
      <GradientDivider variant="blue" />
      <DataVerdade />
      <GradientDivider variant="blue" />
      <DataMaturidade />
      <GradientDivider variant="blue" />
      <DataDadoVsInsight />

      <SkewTransition color="purple" direction="up" />

      {/* ACT III — AI */}
      <AiOQueFaz />
      <GradientDivider variant="purple" />
      <AiOndeGanha />
      <GradientDivider variant="purple" />
      <AiArmadilhas />

      <SkewTransition color="amber" direction="up" />

      {/* ACT IV — Convergencia + Fechamento */}
      <ConvergenciaSistema />
      <GradientDivider />
      <ConvergenciaLidera />
      <GradientDivider />
      <WorkshopDiagnostico />
      <GradientDivider variant="green" />
      <WorkshopDiscussao />

      <SkewTransition color="surface" direction="down" />

      <FechamentoJanela />
      <GradientDivider />
      <FechamentoProvocacao />
    </>
  )
}
