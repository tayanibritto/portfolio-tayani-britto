import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header/Header';

jest.mock('@/components/ThemeToggle/ThemeToggle', () => ({
  ThemeToggle: () => <div>Theme Toggle</div>,
}));

describe('Header', () => {
  it('deve renderizar o nome Tayani Britto', () => {
    render(<Header />);

    expect(
      screen.getByRole('link', {
        name: /tayani britto/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar os links de navegação', () => {
    render(<Header />);

    expect(screen.getByText(/sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/tecnologias/i)).toBeInTheDocument();
    expect(screen.getByText(/projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/experiência/i)).toBeInTheDocument();
    expect(screen.getByText(/certificações/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });

  it('deve renderizar o ThemeToggle', () => {
    render(<Header />);

    expect(screen.getByText(/theme toggle/i)).toBeInTheDocument();
  });
});
