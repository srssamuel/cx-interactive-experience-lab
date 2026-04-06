'use client'

import { PresentationShell } from '@/components/navigation/presentation-shell'
import { chapters } from '@/experiences/convergencia-invisivel/chapters'
import { ConvergenciaInvisivel } from '@/experiences/convergencia-invisivel'

export default function ConvergenciaInvisivelPage() {
  return (
    <PresentationShell chapters={chapters} title="A Convergencia Invisivel">
      <ConvergenciaInvisivel />
    </PresentationShell>
  )
}
