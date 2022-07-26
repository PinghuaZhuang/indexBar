'use strict';

// vite.config.ts
import { defineConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
var isDev = process.env.NODE_ENV !== 'production';
function resolve(url) {
  return path.resolve('D:\\JiNiuGitLab\\indexBar', url);
}
var vite_config_default = defineConfig({
  envPrefix: 'APP_',
  build: {
    lib: isDev
      ? void 0
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgQW50ZFJlc29sdmUsIGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5JztcblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG5mdW5jdGlvbiByZXNvbHZlKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoXCJEOlxcXFxKaU5pdUdpdExhYlxcXFxpbmRleEJhclwiLCB1cmwpO1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW52UHJlZml4OiAnQVBQXycsXG4gIGJ1aWxkOiB7XG4gICAgbGliOiBpc0RldiA/IHVuZGVmaW5lZCA6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKCcuL3NyYycpLFxuICAgICAgbmFtZTogJ2NyZWF0ZUluZGV4QmFyJyxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZSgnLi9kZW1vJyksXG4gICAgICAnQGlzJzogcmVzb2x2ZSgnLi9kZW1vL3V0aWxzL2lzJyksXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGxlZ2FjeSgpLFxuICAgIHJlYWN0KCksXG4gICAgY3JlYXRlU3R5bGVJbXBvcnRQbHVnaW4oe1xuICAgICAgcmVzb2x2ZXM6IFtBbnRkUmVzb2x2ZSgpXSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sUUFBUSxRQUFRLElBQUksYUFBYTtBQUV2QyxpQkFBaUIsS0FBYTtBQUM1QixTQUFPLEtBQUssUUFBUSw2QkFBNkIsR0FBRztBQUN0RDtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLEtBQUssUUFBUSxTQUFZO0FBQUEsTUFDdkIsT0FBTyxRQUFRLE9BQU87QUFBQSxNQUN0QixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxRQUFRO0FBQUEsTUFDckIsT0FBTyxRQUFRLGlCQUFpQjtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sd0JBQXdCO0FBQUEsTUFDdEIsVUFBVSxDQUFDLFlBQVksQ0FBQztBQUFBLElBQzFCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
