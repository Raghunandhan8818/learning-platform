import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
  },
  resolve: {
    alias: {
      process: 'process/browser',
      'react-native': 'react-native-web',
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
    ],
  },
  optimizeDeps: {
    include: [
      'process',
      'react',
      'react-dom',
      'react-dom/client',
      'react-native-web',
      'tamagui',
      '@tamagui/core',
      '@tamagui/config',
      '@tamagui/linear-gradient',
    ],
    force: true,
    esbuildOptions: {
      resolveExtensions: [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
      ],
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  esbuild: {
    target: 'es2020',
  },
});
