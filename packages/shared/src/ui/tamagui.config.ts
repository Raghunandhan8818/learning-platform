import { createTamagui } from '@tamagui/core';
import { config as defaultConfig } from '@tamagui/config/v3';

// Universal Tamagui configuration that works for both web and React Native
const config = createTamagui({
  ...defaultConfig,
  // Shared configuration for both platforms
  media: {
    ...defaultConfig.media,
  },
  themes: {
    ...defaultConfig.themes,
    // Add custom themes if needed
    light: {
      ...defaultConfig.themes.light,
    },
    dark: {
      ...defaultConfig.themes.dark,
    },
  },
  tokens: {
    ...defaultConfig.tokens,
  },
  // Add custom fonts, animations, etc. here
});

export type Conf = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
