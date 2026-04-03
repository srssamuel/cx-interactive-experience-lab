"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Equation } from "@/components/sections/Equation";
import { Myths } from "@/components/sections/Myths";
import { Resultado } from "@/components/sections/Resultado";
import { Experiencia } from "@/components/sections/Experiencia";
import { PullQuote } from "@/components/sections/PullQuote";
import { Uber } from "@/components/sections/Uber";
import { Sistema } from "@/components/sections/Sistema";
import { Mudou } from "@/components/sections/Mudou";
import { Futuro } from "@/components/sections/Futuro";
import { IA } from "@/components/sections/IA";
import { Workshop } from "@/components/sections/Workshop";
import { Fechamento } from "@/components/sections/Fechamento";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="snap-container">
        <Hero />
        <Equation />
        <Myths />
        <Resultado />
        <Experiencia />
        <PullQuote>O cliente não cancela porque o produto parou de funcionar. Cancela porque a experiência ao redor parou de fazer sentido.</PullQuote>
        <Uber />
        <Sistema />
        <Mudou />
        <PullQuote>O cliente não sai porque está insatisfeito. Sai porque alguém fez a mesma coisa — pedindo menos dele.</PullQuote>
        <Futuro />
        <IA />
        <Workshop />
        <Fechamento />
      </div>
    </>
  );
}
