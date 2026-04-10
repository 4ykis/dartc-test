import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://4ykis.github.io/dartc-test' : '/',
})