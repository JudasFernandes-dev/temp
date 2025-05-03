import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'a38eb904-2fea-4cdd-a1b7-9764637720b8-00-m4aoseeiyn8a.spock.replit.dev',
      '54da33f6-a594-478e-9180-f759a2c5219b-00-jb2igi2advdf.kirk.replit.dev'
    ]
  }
})