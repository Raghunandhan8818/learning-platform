// Shared utilities and types for the learning platform
export const PLATFORM_NAME = 'Learning Platform';

export const WELCOME_MESSAGE = `Welcome to ${PLATFORM_NAME}!`;

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString();
};
