import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const getStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return createJSONStorage(() => localStorage);
    } else {
        const memoryStorage: Record<string, string> = {};
        return createJSONStorage(() => ({
            getItem: (key: string) => memoryStorage[key] || null,
            setItem: (key: string, value: string) => {
                memoryStorage[key] = value;
            },
            removeItem: (key: string) => {
                delete memoryStorage[key];
            },
        }));
    }
};

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'light',
            isDark: false,

            setTheme: (theme: Theme) => {
                console.log('ThemeStore: Setting theme to:', theme);
                set({ theme, isDark: theme === 'dark' });
            },

            toggleTheme: () => {
                const currentTheme = get().theme;
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                console.log('ThemeStore: Toggling theme from', currentTheme, 'to', newTheme);
                set({ theme: newTheme, isDark: newTheme === 'dark' });
            },
        }),
        {
            name: 'theme-storage',
            storage: getStorage(),
        }
    )
);