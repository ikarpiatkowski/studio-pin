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
        <Sun
          className="cursor-pointer w-8 h-8 hover:bg-slate-700 active:bg-slate-900 rounded-full"
          onClick={toggleTheme}
        />
      ) : (
        <Moon
          className="cursor-pointer w-8 h-8 hover:bg-slate-50 active:bg-slate-200 rounded-full"
          onClick={toggleTheme}
        />
      )}
    </>
  );
}
