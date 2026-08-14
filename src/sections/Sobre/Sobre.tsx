'use client';

import { useState } from 'react';

export function Sobre() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="sobre" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-4">Sobre Mim</h2>

      <p className="lead text-primary">
        Sou desenvolvedora em formação, com foco em Desenvolvimento Full Stack Python e Front-End,
        em transição de carreira após mais de uma década de experiência na área administrativa e
        educacional do setor público.
      </p>

      {expanded && (
        <>
          <p>
            Minha relação com a tecnologia não é recente. Sou graduada em Tecnologia em Análise e
            Desenvolvimento de Sistemas desde 2012 e, desde minha adolescência, já explorava HTML,
            CSS, JavaScript e PHP por interesse próprio. Embora minha trajetória profissional tenha
            seguido inicialmente pela área da educação e administração pública, a programação sempre
            esteve presente como uma paixão e um objetivo de longo prazo.
          </p>

          <p>
            Atuei desde 2013 na Secretaria da Educação do Estado de São Paulo, na Diretoria de
            Ensino - Região de Lins, onde trabalhei nas áreas de recursos humanos, finanças e
            liderança, chegando a ocupar o cargo de Diretora do Núcleo de Finanças. Essa vivência me
            permitiu desenvolver competências essenciais como comunicação, organização, visão
            sistêmica, tomada de decisão, gestão de processos e trabalho em equipe.
          </p>

          <p>
            Durante esse período, também adquiri sólida familiaridade com legislações, com destaque
            para a Lei Geral de Proteção de Dados (LGPD), tema extremamente relevante para a área de
            tecnologia da informação. Além disso, tive experiência com trabalho remoto, utilizando
            ferramentas colaborativas como o Microsoft Teams, o que exigiu rápida adaptação,
            autonomia e disciplina.
          </p>

          <p>
            Em 2025, decidi retomar ativamente minha área de formação e direcionar minha carreira
            para o desenvolvimento de software. Atualmente, curso Desenvolvimento Full Stack Python
            pela EBAC - Escola Britânica de Artes Criativas e Tecnologia, com foco também em
            Desenvolvimento Front-End, consolidando fundamentos técnicos e construindo projetos
            práticos. Recentemente, iniciei os estudos na área de Cibersegurança através do Programa
            Hackers do Bem, parceria entre o SENAI e o RNP, para agregar ainda mais conhecimento
            para tornar meus projetos seguros e confiáveis.
          </p>

          <p>
            Acredito que minha bagagem profissional, aliada à minha formação técnica e ao
            aprendizado contínuo, possibilita que eu ofereça não apenas código, mas também
            maturidade profissional, responsabilidade e visão de negócio. Estou motivada e
            comprometida com essa nova etapa, buscando oportunidades para crescer, aprender e
            contribuir como desenvolvedora.
          </p>
        </>
      )}

      <button
        type="button"
        className="btn btn-outline-primary mt-3"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Recolher texto' : 'Ler trajetória completa'}
      </button>
    </section>
  );
}
