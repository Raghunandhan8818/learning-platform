import { useThemeStore } from '../../stores/themeStore';

export const useThemeManager = () => {
  const { theme, isDark, setTheme, toggleTheme } = useThemeStore();

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
  };
};
