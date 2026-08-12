export function Contato() {
  return (
    <section id="contato" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-4">Contato</h2>

      <p className="lead mb-4">Vamos conversar?</p>

      <p>Estou sempre aberta a novas oportunidades, projetos e conexões profissionais.</p>

      <div className="d-flex gap-4 flex-wrap mb-4">
        <a href="mailto:mad.britto@gmail.com" target="_blank">
          Enviar e-mail
        </a>
        <a href="https://github.com/tayanibritto" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tayani-britto/" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
