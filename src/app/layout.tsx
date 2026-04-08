import type { Metadata } from 'next'
import { SmoothScrollProvider } from '@/lib/providers/smooth-scroll-provider'
import { fontVariables } from '@/lib/fonts'
import { CustomCursor } from '@/components/effects/custom-cursor'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CX Experience Lab — A Convergencia Invisivel',
    template: '%s | CX Experience Lab',
  },
  description: 'Keynote interativa de 90 minutos sobre a convergencia entre Customer Experience, Customer Success, Dados e Inteligencia Artificial. Experiencia digital premium com visualizacoes cinematicas.',
  metadataBase: new URL('https://cx-interactive-experience-lab.vercel.app'),
  openGraph: {
    title: 'CX Experience Lab — A Convergencia Invisivel',
    description: 'Keynote interativa: CX + CS + Dados + AI convergem em um sistema unico. 22 capitulos, visualizacoes cinematicas, workshop integrado.',
    url: 'https://cx-interactive-experience-lab.vercel.app',
    siteName: 'CX Experience Lab',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CX Experience Lab — A Convergencia Invisivel',
    description: 'Keynote interativa: CX + CS + Dados + AI convergem em um sistema unico.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cx-interactive-experience-lab.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <body className="grain-overlay">
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
