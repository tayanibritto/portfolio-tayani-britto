import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    function updateLayout() {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 992) setVisibleItems(2);
      else setVisibleItems(3);
    }

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const visibleProjects = Array.from({ length: visibleItems }, (_, i) => {
    return projects[(currentIndex + i) % projects.length];
  });

  function next() {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }

  function previous() {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }

  return (
    <div className="project-carousel-wrapper">
      <button
        aria-label="Projeto anterior"
        className="carousel-arrow carousel-arrow-prev"
        onClick={previous}
      >
        <i className="bi bi-arrow-left desktop-arrow"></i>
        <i className="bi bi-arrow-up mobile-arrow"></i>
      </button>
      <div className="row g-4 flex-grow-1">
        {visibleProjects.map((project) => (
          <div
            key={project.title}
            className={`col-12 ${visibleItems >= 2 ? 'col-md-6' : ''} ${visibleItems >= 3 ? 'col-lg-4' : ''}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        aria-label="Próximo projeto"
        className="carousel-arrow carousel-arrow-next"
        onClick={next}
      >
        <i className="bi bi-arrow-right desktop-arrow"></i>
        <i className="bi bi-arrow-down mobile-arrow"></i>
      </button>
    </div>
  );
}
