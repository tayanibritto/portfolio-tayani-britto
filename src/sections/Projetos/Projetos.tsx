import { ProjectCarousel } from './ProjectCarousel';

export function Projetos() {
  return (
    <section id="projetos" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-5">Projetos</h2>

      <div>
        <ProjectCarousel />
      </div>
    </section>
  );
}
