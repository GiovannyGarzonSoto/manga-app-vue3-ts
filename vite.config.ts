import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // rollupOptions: {
    //   external: ['./public/menu-dots.svg', './public/logo.png', './public/menu.svg','./public/search.svg', './public/404.svg',
    //   './public/books.svg', './public/check.svg', './public/menu.svg', './public/eye.svg', './public/comments.svg'],
    // },
  },
  resolve: {
    alias: {
    },
  },
})