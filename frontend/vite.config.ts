import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Адрес backend
const target = process.env.API_URL || 'http://localhost:8091';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "app.test.me",
    port: 5173,
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        secure: false
      }
    }
  }
});
