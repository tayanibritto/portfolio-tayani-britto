import { render, screen } from '@testing-library/react';
import { Contato } from '@/sections/Contato/Contato';

describe('Contato', () => {
  it('deve renderizar o título da seção', () => {
    render(<Contato />);

    expect(
      screen.getByRole('heading', {
        name: /contato/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar os campos do formulário', () => {
    render(<Contato />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /enviar mensagem/i,
      })
    ).toBeInTheDocument();
  });

  it('deve renderizar os links de contato', () => {
    render(<Contato />);

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
});
