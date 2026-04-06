export interface Chapter {
  id: string
  title: string
  subtitle?: string
  duration: number // minutes
  block: 'abertura' | 'contexto' | 'cx' | 'cs' | 'data' | 'ai' | 'convergencia' | 'workshop' | 'fechamento'
  icon?: string
}

export interface Experience {
  slug: string
  title: string
  subtitle: string
  thesis: string
  duration: number
  chapters: Chapter[]
}

export type ViewMode = 'reading' | 'presentation' | 'workshop'

export interface ContentBlock {
  headline: string
  body: string
  source?: string
  stat?: string
  statLabel?: string
}
