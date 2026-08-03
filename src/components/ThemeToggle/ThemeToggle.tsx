'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" className="btn btn-outline-secondary" onClick={handleToggleTheme}>
      {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
    </button>
  );
}
