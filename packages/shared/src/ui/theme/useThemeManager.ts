import { useThemeStore } from '../../stores/themeStore';

export const useThemeManager = () => {
    const { theme, isDark, setTheme, toggleTheme } = useThemeStore();

    const getThemeColor = (lightColor: string, darkColor: string) => {
        return isDark ? darkColor : lightColor;
    };

    const getThemeVariant = () => {
        return isDark ? 'dark' : 'light';
    };

    return {
        theme,
        isDark,
        setTheme,
        toggleTheme,
        getThemeColor,
        getThemeVariant,
    };
};