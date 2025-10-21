import { createTamagui, createTokens } from '@tamagui/core';
import { config as defaultConfig } from '@tamagui/config/v3';

const customColors = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  primaryLight: '#8b5cf6',

  secondary: '#10B981',
  secondaryDark: '#059669',
  secondaryLight: '#34D399',

  accent: '#F59E0B',
  accentDark: '#D97706',
  accentLight: '#FBBF24',

  success: '#059669',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  light: {
    bg: '#f5f7fa',
    card: '#ffffff',
    cardHover: '#f9fafb',
    border: '#e5e7eb',
    borderHover: '#d1d5db',
    text: '#111827',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
  },

  dark: {
    bg: '#111827',
    card: '#1f2937',
    cardHover: '#374151',
    border: '#4b5563',
    borderHover: '#6b7280',
    text: '#f9fafb',
    textSecondary: '#d1d5db',
    textTertiary: '#9ca3af',
  },
};

const customTokens = createTokens({
  color: {
    primary: customColors.primary,
    primaryDark: customColors.primaryDark,
    primaryLight: customColors.primaryLight,
    secondary: customColors.secondary,
    secondaryDark: customColors.secondaryDark,
    secondaryLight: customColors.secondaryLight,
    accent: customColors.accent,
    accentDark: customColors.accentDark,
    accentLight: customColors.accentLight,

    success: customColors.success,
    warning: customColors.warning,
    error: customColors.error,
    info: customColors.info,
  },

  space: { ...defaultConfig.tokens.space },
  size: { ...defaultConfig.tokens.size },
  radius: { ...defaultConfig.tokens.radius },
  zIndex: { ...defaultConfig.tokens.zIndex },
});

const config = createTamagui({
  ...defaultConfig,
  tokens: customTokens,
  media: {
    ...defaultConfig.media,
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  themes: {
    light: {
      primary: customColors.primary,
      primaryDark: customColors.primaryDark,
      secondary: customColors.secondary,
      success: customColors.success,
      warning: customColors.warning,
      error: customColors.error,
      info: customColors.info,
      background: customColors.light.bg,
      backgroundHover: customColors.light.cardHover,
      backgroundPress: customColors.light.borderHover,
      backgroundFocus: customColors.light.cardHover,
      backgroundStrong: customColors.light.card,
      color: customColors.light.text,
      colorHover: customColors.light.text,
      colorPress: customColors.light.text,
      colorFocus: customColors.light.text,
      colorSecondary: customColors.light.textSecondary,
      colorTertiary: customColors.light.textTertiary,
      borderColor: customColors.light.border,
      borderColorHover: customColors.light.borderHover,
      borderColorFocus: customColors.primary,
      placeholderColor: customColors.light.textTertiary,
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowColorHover: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      primary: customColors.primary,
      primaryDark: customColors.primaryDark,
      secondary: customColors.secondary,
      success: customColors.success,
      warning: customColors.warning,
      error: customColors.error,
      info: customColors.info,
      background: customColors.dark.bg,
      backgroundHover: customColors.dark.cardHover,
      backgroundPress: customColors.dark.border,
      backgroundFocus: customColors.dark.cardHover,
      backgroundStrong: customColors.dark.card,
      color: customColors.dark.text,
      colorHover: customColors.dark.text,
      colorPress: customColors.dark.text,
      colorFocus: customColors.dark.text,
      colorSecondary: customColors.dark.textSecondary,
      colorTertiary: customColors.dark.textTertiary,
      borderColor: customColors.dark.border,
      borderColorHover: customColors.dark.borderHover,
      borderColorFocus: customColors.primary,
      placeholderColor: customColors.dark.textTertiary,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowColorHover: 'rgba(0, 0, 0, 0.3)',
    },
  },
});

export type Conf = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
