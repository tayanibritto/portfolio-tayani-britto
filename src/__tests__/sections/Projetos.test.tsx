import { render, screen } from '@testing-library/react';
import { Projetos } from '@/sections/Projetos/Projetos';

describe('Projetos', () => {
  it('deve renderizar o título da seção', () => {
    render(<Projetos />);

    expect(
      screen.getByRole('heading', {
        name: /projetos/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar os três projetos iniciais do carrossel', () => {
    render(<Projetos />);

    expect(screen.getByText('SisPlanBlueMonitor')).toBeInTheDocument();

    expect(screen.getByText('Diário de Bordo')).toBeInTheDocument();

    expect(screen.getByText('SisPlanDataMob')).toBeInTheDocument();
  });

  it('deve renderizar os controles do carrossel', () => {
    render(<Projetos />);

    expect(
      screen.getByRole('button', {
        name: /projeto anterior/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /próximo projeto/i,
      })
    ).toBeInTheDocument();
  });
});
