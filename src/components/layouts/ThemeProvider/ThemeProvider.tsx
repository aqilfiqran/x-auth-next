'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { setCookie } from 'cookies-next';

// Application theme provider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider enableColorScheme {...props}>
      <ThemeProviderHelper />
      {children}
    </NextThemesProvider>
  );
}

// Helper component to set theme in cookie
function ThemeProviderHelper() {
  const { theme } = useTheme();

  React.useEffect(() => {
    setCookie('theme', theme);
  }, [theme]);

  return null;
}
