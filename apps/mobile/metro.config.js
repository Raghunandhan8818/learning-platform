const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Disable source maps for node_modules to reduce warnings
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Configure source map handling
config.transformer.minifierConfig = {
  ...config.transformer.minifierConfig,
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Reduce source map warnings
config.transformer.unstable_allowRequireContext = true;

module.exports = config;
