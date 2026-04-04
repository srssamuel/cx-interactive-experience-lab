import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/providers/smooth-scroll-provider";
import { ExperienceModeProvider } from "@/lib/hooks/use-experience-mode";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090E",
};

export const metadata: Metadata = {
  title: {
    default: "CX Experience Lab",
    template: "%s — CX Experience Lab",
  },
  description:
    "Plataforma premium de experiências digitais interativas sobre Customer Experience, Customer Success e estratégia de negócios.",
  creator: "Diretoria de Qualidade e Dados — AeC",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CX Experience Lab",
    title: "CX Experience Lab",
    description:
      "Experiências digitais de alto impacto para workshop, apresentação executiva e posicionamento estratégico.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@300..800&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <ExperienceModeProvider>{children}</ExperienceModeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
