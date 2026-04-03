import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Equação Invisível — Experiência do Cliente Repensada",
  description: "Sucesso do cliente = Resultado Esperado + Experiência Apropriada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
