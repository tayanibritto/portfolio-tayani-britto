import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer/Footer';

describe('Footer', () => {
  it('deve renderizar o nome', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', {
        name: /tayani britto/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar os links profissionais', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', {
        name: /github/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /linkedin/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar a descrição profissional', () => {
    render(<Footer />);

    expect(screen.getByText(/desenvolvedora front-end e back-end python/i)).toBeInTheDocument();
  });

  it('deve renderizar o copyright', () => {
    render(<Footer />);

    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });
});
