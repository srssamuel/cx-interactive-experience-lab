import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Body, Overline, SubHeading } from '@/components/design-system/typography'

describe('Smoke Tests', () => {
  describe('Typography components', () => {
    it('renders Body text', () => {
      render(<Body>Test body text</Body>)
      expect(screen.getByText('Test body text')).toBeInTheDocument()
    })

    it('renders Overline text', () => {
      render(<Overline>Test overline</Overline>)
      expect(screen.getByText('Test overline')).toBeInTheDocument()
    })

    it('renders SubHeading text', () => {
      render(<SubHeading>Test subheading</SubHeading>)
      expect(screen.getByText('Test subheading')).toBeInTheDocument()
    })
  })

  describe('Content integrity', () => {
    it('content module exports all chapters', async () => {
      const { content } = await import('@/experiences/convergencia-invisivel/content')
      expect(content).toBeDefined()
      expect(content.abertura).toBeDefined()
      expect(content.abertura.headline).toBeTruthy()
      expect(content.abertura.stat).toBeTruthy()
    })

    it('content has all 22 chapter sections', async () => {
      const { content } = await import('@/experiences/convergencia-invisivel/content')
      const requiredKeys = [
        'abertura', 'contextoMundoMudou', 'contextoIlusao',
        'cxEquacao', 'cxExperiencia', 'cxCusto', 'cxReflexao',
        'csParadoxo', 'csMetricas', 'csExpansao',
        'dataVerdade', 'dataMaturidade', 'dataDadoVsInsight',
        'aiOQueFaz', 'aiOndeGanha', 'aiArmadilhas',
        'convergenciaSistema', 'convergenciaLidera',
        'workshopDiagnostico', 'workshopDiscussao',
        'fechamentoJanela', 'fechamentoProvocacao',
      ]
      for (const key of requiredKeys) {
        expect(content).toHaveProperty(key)
      }
    })
  })

  describe('Utility functions', () => {
    it('cn() merges classes correctly', async () => {
      const { cn } = await import('@/lib/cn')
      expect(cn('foo', 'bar')).toBe('foo bar')
      const shouldHide = false
      expect(cn('p-4', shouldHide && 'hidden')).toBe('p-4')
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    })
  })
})
