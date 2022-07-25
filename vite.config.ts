import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const isDev = process.env.NODE_ENV !== 'production';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  build: {
    lib: isDev
      ? undefined
      : {
          entry: resolve('./src'),
          name: 'createIndexBar',
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
  plugins: [
    legacy(),
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
});
