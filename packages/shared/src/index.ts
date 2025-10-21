// Shared utilities and types for the learning platform
import config from './ui/tamagui.config';

export const PLATFORM_NAME = 'Learning Platform';
export const WELCOME_MESSAGE = `Welcome to ${PLATFORM_NAME}!`;

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString();
};

export { config };
export { useThemeStore } from './stores/themeStore';
export { ThemeProvider } from './ui/ThemeProvider';
export { useThemeManager } from './ui/theme/useThemeManager';
export * from './types/activity';
export * from './data/mockActivities';
export { GradientNavBar } from './ui/components/GradientNavbar';
export { SearchAndFilters } from './ui/components/SearchAndFilters';
export { ActivityCard } from './ui/components/ActivityCard';
export { ActivityList } from './ui/components/ActivityList';
export { ActivityListingPage } from './ui/components/ActivityListingPage';
