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
          className="form-check-input theme-switch"
          type="checkbox"
          role="switch"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
      </div>

      <span className="theme-icon">🌙</span>
    </div>
  );
}
