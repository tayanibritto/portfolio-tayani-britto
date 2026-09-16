import Image from 'next/image';
import { Project } from '@/types/Project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card h-100">
      <h3 className="h5 mb-3">{project.title}</h3>

      <p className="project-description">{project.description}</p>

      <Image
        src={project.imageUrl}
        alt={`Imagem do projeto ${project.title}`}
        className="project-image"
        width={300}
        height={200}
      />

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

      <div className="project-link project-footer">
        <a
          href={project.githubUrl}
          target="_blank"
          aria-label={`Abrir repositório GitHub do projeto ${project.title}`}
        >
          🐙 GitHub
        </a>
      </div>
    </article>
  );
}
