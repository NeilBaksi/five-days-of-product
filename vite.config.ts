import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repo name for Pages deployment:
// https://<user>.github.io/five-days-of-product/
export default defineConfig({
  plugins: [react()],
  base: '/five-days-of-product/',
  server: { port: 5000, strictPort: true },
  preview: { port: 5000, strictPort: true },
})
