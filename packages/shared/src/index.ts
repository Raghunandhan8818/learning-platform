// Shared utilities and types for the learning platform
import config from './ui/tamagui.config.ts';

export const PLATFORM_NAME = 'Learning Platform';
export const WELCOME_MESSAGE = `Welcome to ${PLATFORM_NAME}!`;

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString();
};

// Export Tamagui configuration and components
export { config };
export * from './ui/components';
export { useCounterStore } from './stores/counterStore';
export { useThemeStore } from './stores/themeStore';
export {ThemeProvider} from './ui/ThemeProvider';
export { useThemeManager } from './ui/theme/useThemeManager';