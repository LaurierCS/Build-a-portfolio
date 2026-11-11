import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // './' makes the built site work from any folder, so the same build
  // runs on Vercel, Netlify, Cloudflare Pages and GitHub Pages
  // (https://username.github.io/repo-name/) without changing anything.
  base: './',
})
