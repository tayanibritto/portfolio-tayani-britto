'use client';

import { useState } from 'react';

export function Sobre() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="sobre" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-4">Sobre Mim</h2>

      <p className="lead text-primary">
        Sou Desenvolvedora Full Stack Python em formação pela EBAC e graduada em Tecnologia em
        Análise e Desenvolvimento de Sistemas pela UNILINS, em transição de carreira para o
        desenvolvimento de software após mais de uma década de experiência na área administrativa e
        educacional do setor público.
      </p>

      {expanded && (
        <>
          <p>
            Minha conexão com a tecnologia não é recente. Desde a adolescência, explorava
            tecnologias como HTML, CSS, JavaScript e PHP por interesse próprio, mantendo a
            programação como um objetivo constante ao longo da minha trajetória. Em 2012, concluí
            minha graduação em Análise e Desenvolvimento de Sistemas e, em 2025, decidi retomar
            ativamente minha área de formação, direcionando minha carreira para o desenvolvimento de
            software.
          </p>

          <p>
            Atualmente, desenvolvo projetos com foco em Python, automação de processos, tratamento e
            validação de dados e aplicações web. Entre os projetos realizados, destaco soluções
            desenvolvidas para automatizar a comparação e validação de inventários escolares,
            reduzindo atividades manuais, identificando inconsistências e aumentando a
            confiabilidade dos dados por meio de Python, Pandas e OpenPyXL.
          </p>

          <p>
            Minha experiência no setor público contribuiu para o desenvolvimento de competências
            como organização, comunicação, visão sistêmica, resolução de problemas, análise de
            processos e trabalho em equipe. Também adquiri familiaridade com legislações e
            conformidade de dados, incluindo conhecimentos relacionados à LGPD, além de experiência
            com ambientes colaborativos e trabalho remoto.
          </p>

          <p>
            No desenvolvimento de software, venho consolidando conhecimentos em HTML, CSS,
            JavaScript, TypeScript, React, Next.js, Python, Node.js, FastAPI, PostgreSQL, Git,
            GitHub, CI/CD e integração de APIs. Também estou ampliando minha formação em
            cibersegurança por meio do programa Hackers do Bem, buscando aplicar boas práticas de
            segurança ao desenvolvimento de aplicações.
          </p>

          <p>
            Acredito que a combinação entre formação técnica, experiência profissional e aprendizado
            contínuo me permite contribuir com soluções eficientes, organização de processos e foco
            na qualidade das entregas. Estou em busca de oportunidades como Desenvolvedora Full
            Stack Python, Desenvolvedora Back-End Python ou Desenvolvedora Front-End, onde eu possa
            continuar aprendendo, evoluindo tecnicamente e gerar impacto por meio da tecnologia.
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
