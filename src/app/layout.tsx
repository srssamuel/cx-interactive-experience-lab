import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/providers/smooth-scroll-provider";
import { ExperienceModeProvider } from "@/lib/hooks/use-experience-mode";

export const metadata: Metadata = {
  title: "CX Experience Lab",
  description:
    "Plataforma premium de experiências digitais interativas sobre Customer Experience, Customer Success e estratégia de negócios.",
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
