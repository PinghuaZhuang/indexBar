import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const isDev = process.env.VITE_ENV === 'dev';
// const isProduction = process.env.NODE_ENV === 'production';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: isDev ? resolve('./demo') : process.cwd(),
  base: './',
  envPrefix: 'APP_',
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: isDev ? resolve('./example') : 'lib',
    lib: isDev
      ? undefined
      : {
          entry: resolve('./src'),
          name: 'createIndexBar',
        },
    rollupOptions: isDev
      ? {}
      : {
          output: {
            exports: 'named',
          },
        },
  },
  resolve: {
    alias: {
      '@': resolve('./demo'),
      '@is': resolve('./demo/utils/is'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: isDev
    ? [
        legacy(),
        react(),
        createStyleImportPlugin({
          resolves: [AntdResolve()],
        }),
      ]
    : [],
});
