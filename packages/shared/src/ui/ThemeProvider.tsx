import React from 'react';
import { TamaguiProvider } from '@tamagui/core';
import { useThemeStore } from '../stores/themeStore';
import config from './tamagui.config';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { theme } = useThemeStore();

    console.log('ThemeProvider: Current theme is:', theme);

    return (
        <TamaguiProvider
            config={config}
            defaultTheme={theme}
            key={theme}
        >
            {children}
        </TamaguiProvider>
    );
};