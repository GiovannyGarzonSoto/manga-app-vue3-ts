import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['menu-dots.svg', 'logo.png', 'menu.svg','search.svg', '404.svg',
      'books.svg', 'check.svg', 'menu.svg', 'eye.svg', 'comments.svg'],
    },
  },
  resolve: {
    alias: {
      'axiosInstance': resolve(__dirname, 'src/config/axiosInstance.js'),
    },
  },
})
