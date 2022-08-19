import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import typescript from '@rollup/plugin-typescript';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = process.env.VITE_ENV === 'dev';

  return {
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
            name: 'IndexBar',
          },
      rollupOptions: isDev
        ? {}
        : {
            external: ['react', 'react-dom', 'antd'],
            output: {
              globals: {
                react: 'react',
                antd: 'antd',
                'react-dom': 'react-dom',
              },
            },
            plugins: [
              typescript({
                target: 'es2015',
                rootDir: resolve('./src'),
                declaration: true,
                declarationDir: resolve('./lib'),
                exclude: resolve('node_modules/**'),
                tsconfig: resolve('./tsconfig.json'),
              }),
            ],
          },
    },
    resolve: {
      alias: {
        '@': resolve('./demo'),
        '@is': resolve('./demo/utils/is'),
      },
    },
    define: {
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
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
  };
});
