export function Contato() {
  return (
    <section id="contato" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-4">Contato</h2>

      <p className="lead mb-4">Vamos conversar?</p>

      <p>Estou sempre aberta a novas oportunidades, projetos e conexões profissionais.</p>

      <div className="row g-4 mt-4">
        <div className="col-12 col-md-4">
          <a href="mailto:mad.britto@gmail.com" target="_blank" className="contact-card">
            📧 Enviar e-mail
            <p>Entre em contato diretamente.</p>
          </a>
        </div>

        <div className="col-12 col-md-4">
          <a href="https://github.com/tayanibritto" target="_blank" className="contact-card">
            🐙 GitHub
            <p>Veja projetos e código-fonte</p>
          </a>
        </div>

        <div className="col-12 col-md-4">
          <a
            href="https://www.linkedin.com/in/tayani-britto/"
            target="_blank"
            className="contact-card"
          >
            💼 LinkedIn
            <p>Vamos nos conectar.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
