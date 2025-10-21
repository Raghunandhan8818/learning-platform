import React, { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import {config} from '@learning/shared';
import { useThemeStore } from '@learning/shared';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { theme, setTheme } = useThemeStore();


    useEffect(() => {
    }, []);

    return (
        <TamaguiProvider config={config} defaultTheme={theme}>
            <Theme name={theme}>
                {children}
            </Theme>
        </TamaguiProvider>
    );
};

