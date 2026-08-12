'use client';

import { Header } from '@/components/Header/Header';
import { Hero } from '@/sections/Hero/Hero';
import { Sobre } from '@/sections/Sobre/Sobre';
import { Tecnologias } from '@/sections/Tecnologias/Tecnologias';
import { Projetos } from '@/sections/Projetos/Projetos';
import { Experiencia } from '@/sections/Experiência/Experiencia';
import { Certificacoes } from '@/sections/Certificações/Certificacoes';
import { Contato } from '@/sections/Contato/Contato';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Experiencia />
        <Certificacoes />
        <Contato />
      </main>

      <Footer />
    </>
  );
}
