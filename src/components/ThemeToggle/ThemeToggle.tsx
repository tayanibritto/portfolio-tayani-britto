'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="theme-switch-container">
      <span className="theme-icon">☀️</span>

      <div className="form-check form-switch">
        <input
          id="themeSwitch"
          className="form-check-input theme-switch"
          type="checkbox"
          role="switch"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />

        <label htmlFor="themeSwitch" className="form-check-label visually-hidden">
          Alternar tema
        </label>
      </div>

      <span className="theme-icon">🌙</span>
    </div>
  );
}
