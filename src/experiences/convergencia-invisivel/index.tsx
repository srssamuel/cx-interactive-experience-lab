'use client'

import { Abertura, ContextoMundoMudou, ContextoIlusao, CxEquacao, CxExperiencia, CxCusto, CxReflexao, CsParadoxo, CsMetricas, CsExpansao, DataVerdade } from './chapters-part1'
import { DataMaturidade, DataDadoVsInsight, AiOQueFaz, AiOndeGanha, AiArmadilhas, ConvergenciaSistema, ConvergenciaLidera, WorkshopDiagnostico, WorkshopDiscussao, FechamentoJanela, FechamentoProvocacao } from './chapters-part2'
import { SkewTransition } from '@/components/motion/skew-transition'

export function ConvergenciaInvisivel() {
  return (
    <>
      <Abertura />
      <ContextoMundoMudou />
      <ContextoIlusao />
      <CxEquacao />
      <CxExperiencia />
      <CxCusto />
      <CxReflexao />
      <SkewTransition color="surface" direction="down" />
      <CsParadoxo />
      <CsMetricas />
      <CsExpansao />
      <DataVerdade />
      <DataMaturidade />
      <DataDadoVsInsight />
      <SkewTransition color="surface" direction="up" />
      <AiOQueFaz />
      <AiOndeGanha />
      <AiArmadilhas />
      <SkewTransition color="amber" direction="up" />
      <ConvergenciaSistema />
      <ConvergenciaLidera />
      <WorkshopDiagnostico />
      <WorkshopDiscussao />
      <SkewTransition color="surface" direction="down" />
      <FechamentoJanela />
      <FechamentoProvocacao />
    </>
  )
}
