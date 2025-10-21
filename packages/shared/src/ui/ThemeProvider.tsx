import React, { useLayoutEffect, useState, useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import config from './tamagui.config';
import { useThemeStore } from '../stores/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {isMounted ? <Theme name={theme}>{children}</Theme> : null}
    </TamaguiProvider>
  );
};
