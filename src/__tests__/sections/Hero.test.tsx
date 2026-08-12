import { render, screen } from '@testing-library/react';
import { Hero } from '@/sections/Hero/Hero';

describe('Hero', () => {
  it('deve renderizar o nome', () => {
    render(<Hero />);

    expect(screen.getByText(/Tayani Mayara Britto/i)).toBeInTheDocument();
  });
});
