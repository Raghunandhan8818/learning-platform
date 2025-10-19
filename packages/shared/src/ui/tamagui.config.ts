import { createTamagui } from '@tamagui/core';
import { config as defaultConfig } from '@tamagui/config/v3';

const customColors = {
  primary: '#3B82F6',
  primaryDark: '#1E40AF',
  secondary: '#10B981',
  accent: '#F59E0B',

  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
};

const config = createTamagui({
  ...defaultConfig,

  themes: {
    light: {
      ...defaultConfig.themes.light,
      primary: customColors.primary,
      primaryDark: customColors.primaryDark,
      secondary: customColors.secondary,
      accent: customColors.accent,
      success: customColors.success,
      warning: customColors.warning,
      error: customColors.error,
      info: customColors.info,
      background: '#FFFFFF',
      backgroundHover: customColors.gray50,
      backgroundPress: customColors.gray100,
      backgroundFocus: customColors.gray100,
      borderColor: customColors.gray200,
      borderColorHover: customColors.gray300,
      color: customColors.gray900,
      colorHover: customColors.gray800,
      colorPress: customColors.gray700,
      colorFocus: customColors.gray800,
      placeholderColor: customColors.gray400,
    },

    dark: {
      ...defaultConfig.themes.dark,
      primary: customColors.primary,
      primaryDark: customColors.primaryDark,
      secondary: customColors.secondary,
      accent: customColors.accent,
      success: customColors.success,
      warning: customColors.warning,
      error: customColors.error,
      info: customColors.info,
      background: customColors.gray900,
      backgroundHover: customColors.gray800,
      backgroundPress: customColors.gray700,
      backgroundFocus: customColors.gray700,
      borderColor: customColors.gray700,
      borderColorHover: customColors.gray600,
      color: customColors.gray100,
      colorHover: customColors.gray200,
      colorPress: customColors.gray300,
      colorFocus: customColors.gray200,
      placeholderColor: customColors.gray500,
    },
  },

  tokens: {
    ...defaultConfig.tokens,
    color: {
      ...defaultConfig.tokens.color,
      primary: customColors.primary,
      primaryDark: customColors.primaryDark,
      secondary: customColors.secondary,
      accent: customColors.accent,
      success: customColors.success,
      warning: customColors.warning,
      error: customColors.error,
      info: customColors.info,
    },
  },
});

export type Conf = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;