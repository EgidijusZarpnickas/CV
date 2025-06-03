import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CV/', // <- čia įrašyk tikslų repo pavadinimą
  plugins: [react()],
})