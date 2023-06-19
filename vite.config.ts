import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['lodash', 'axios', 'menu.svg','search.svg'],
    },
  },
  resolve: {
    alias: {
      'axiosInstance': resolve(__dirname, 'src/config/axiosInstance.js'),
    },
  },
})
