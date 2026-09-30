export function Experiencia() {
  return (
    <section id="experiencia" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-5">Experiência profissional</h2>

      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="experience-card h-100">
            <h3 className="h4">Secretaria da Educação do Estado de São Paulo</h3>

            <p className="text-primary mb-3 experience-period">2013 - 2023</p>

            <p>
              Atuação na área administrativa da Secretaria da Educação do Estado de São Paulo, com
              experiência em processos de Recursos Humanos, gestão financeira e suporte às unidades
              escolares da região.
            </p>

            <ul>
              <li>Análise e conferência de informações administrativas e financeiras</li>
              <li>Atendimento e suporte a servidores e unidades escolares</li>
              <li>Execução e acompanhamento de processos financeiros e orçamentários</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="experience-card h-100">
            <h3 className="h4">Desenvolvedora Back-End Autônoma</h3>

            <p className="text-primary mb-3 experience-period">2026 - atual</p>

            <p>
              Desenvolvimento de soluções Back-End em Python voltadas à automação de processos
              administrativos, tratamento de dados e apoio à tomada de decisão.
            </p>

            <ul>
              <li>Automação de processos de tratamento, validação e comparação de dados</li>
              <li>
                Desenvolvimento de sistemas para identificação de inconsistências e apoio à tomada
                de decisão
              </li>
              <li>
                Implementação de regras de negócio para integração e cruzamento de dados entre
                sistemas distintos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
