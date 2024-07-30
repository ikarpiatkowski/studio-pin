'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {theme === 'dark' ? (
        <Sun className="cursor-pointer" onClick={toggleTheme} />
      ) : (
        <Moon className="cursor-pointer" onClick={toggleTheme} />
      )}
    </>
  );
}
