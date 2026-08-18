import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <h1 className="display-4 fw-bold">Tayani Mayara Britto</h1>

          <p className="h4 text-primary mt-3">
            Analista e Desenvolvedora de Sistemas | Front-End | React | TypeScript | Next.js |
            Back-End Python | FastAPI
          </p>

          <p className="lead mt-4">
            Sou uma profissional formada em análise e desenvolvimento de sistemas, com experiência
            na área da educação, recursos humanos e finanças. Como programadora, tenho uma excelente
            capacidade de decompor grandes problemas em problemas menores, para que sejam resolvidos
            por etapas. Minha meta é desenvolver um trabalho ético e honesto, que cause um impacto
            positivo na vida das pessoas.
          </p>

          <div className="d-flex gap-3 mt-4 flex-wrap">
            <a href="#projetos" className="btn btn-outline-primary">
              Ver Projetos
            </a>

            <a href="#contato" className="btn btn-outline-primary">
              Contato
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <Image
            src="/hero2.webp"
            alt="Foto de perfil"
            className="img-fluid rounded-circle hero-image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
