import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  plugins: [
    legacy(),
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
});
