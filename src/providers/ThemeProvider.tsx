'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '@/context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === 'light' || savedTheme === 'dark') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
