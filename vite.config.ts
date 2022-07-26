import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const isDev = process.env.VITE_ENV === 'dev';
console.log('process.env.VITE_ENV', process.env.VITE_ENV);

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: isDev ? resolve('./demo') : process.cwd(),
  envPrefix: 'APP_',
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: isDev ? resolve('./example') : 'dist',
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
