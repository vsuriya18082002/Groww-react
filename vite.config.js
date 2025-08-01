import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Groww-react/', // 👈 This is required
  plugins: [react()],
})
