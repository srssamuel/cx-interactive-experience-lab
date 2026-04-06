import type { Metadata } from 'next'
import { SmoothScrollProvider } from '@/lib/providers/smooth-scroll-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'CX Experience Lab',
  description: 'Experiencias digitais interativas premium',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="grain-overlay">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
