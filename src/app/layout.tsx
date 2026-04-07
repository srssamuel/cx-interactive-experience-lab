import type { Metadata } from 'next'
import { SmoothScrollProvider } from '@/lib/providers/smooth-scroll-provider'
import { fontVariables } from '@/lib/fonts'
import { CustomCursor } from '@/components/effects/custom-cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'CX Experience Lab',
  description: 'Experiencias digitais interativas premium',
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
