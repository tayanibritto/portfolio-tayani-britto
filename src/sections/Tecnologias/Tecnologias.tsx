const technologies = {
  frontend: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Bootstrap',
    'Tailwind CSS',
    'SASS',
    'CSS Modules',
    'Module Federation',
    'Progressive Web App',
    'Service Worker',
    'Styled Components',
    'Web Design Responsivo',
  ],

  backend: ['Python', 'FastAPI', 'Node.js'],

  tools: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'ESLint', 'Prettier', 'Jest'],

  skills: ['CI/CD', 'Conhecimento de hardware', 'Noções de cibersegurança'],
};

export function Tecnologias() {
  return (
    <section id="tecnologias" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-5">Tecnologias</h2>

      <div className="mb-4">
        <h3 className="h5 mb-3">Front-End</h3>

        <div className="d-flex flex-wrap gap-2">
          {technologies.frontend.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h5 mb-3">Back-End</h3>

        <div className="d-flex flex-wrap gap-2">
          {technologies.backend.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h5 mb-3">Ferramentas</h3>

        <div className="d-flex flex-wrap gap-2">
          {technologies.tools.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h5 mb-3">Qualidade, Segurança e Infraestrutura</h3>

        <div className="d-flex flex-wrap gap-2">
          {technologies.skills.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
