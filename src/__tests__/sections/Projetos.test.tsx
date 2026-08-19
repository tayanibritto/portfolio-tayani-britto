import { render, screen } from '@testing-library/react';
import { Projetos } from '@/sections/Projetos/Projetos';
import { projects } from '@/data/projects';

describe('Projetos', () => {
  it('deve renderizar o título da seção', () => {
    render(<Projetos />);

    expect(
      screen.getByRole('heading', {
        name: /projetos/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar todos os projetos', () => {
    render(<Projetos />);

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('deve renderizar o link do GitHub para cada projeto', () => {
    render(<Projetos />);

    projects.forEach((project) => {
      expect(
        screen.getByRole('link', {
          name: new RegExp(project.title, 'i'),
        })
      ).toHaveAttribute('href', project.githubUrl);
    });
  });
});
