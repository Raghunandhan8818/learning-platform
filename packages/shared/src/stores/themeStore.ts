import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createStorage } from '../storage';

type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'light',
            isDark: false,

            setTheme: (theme: Theme) => {
                set({ theme, isDark: theme === 'dark' });
            },

            toggleTheme: () => {
                const currentTheme = get().theme;
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                set({ theme: newTheme, isDark: newTheme === 'dark' });
            },
        }),
        {
            name: 'theme-storage',
            storage: createStorage(),
        }
    )
);
