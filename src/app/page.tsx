'use client';

import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="container py-5">
      <h1 className="text-primary">Meu Portfólio</h1>

      <p className="lead">Tema atual: {theme}</p>

      <ThemeToggle />
    </main>
  );
}
