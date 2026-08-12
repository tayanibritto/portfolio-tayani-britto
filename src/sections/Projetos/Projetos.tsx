import { projects } from '@/data/projects';

export function Projetos() {
  return (
    <section id="projetos" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-5">Projetos</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-12 col-lg-4">
            <article className="project-card h-100">
              <h3 className="h5 mb-3">{project.title}</h3>

              <p className="mb-4">{project.description}</p>

              {project.highlights && (
                <ul className="mb-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="d-flex flex-wrap gap-2 mb-4">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-badge">
                    {technology}
                  </span>
                ))}
              </div>

              <a href="{project.githubUrl}" target="_blank">
                GitHub
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
