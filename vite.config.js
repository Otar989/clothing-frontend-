import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgLoader from 'vite-svg-loader';

// Минимальный прод-конфиг без mkcert
export default defineConfig({
  plugins: [
    react(),
    svgLoader()
  ],
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist'
  },
  // Пробрасываем URL бэкенда и как Vite-env, и как константу
  define: {
    __BACKEND_URL__: JSON.stringify(process.env.VITE_BACKEND_URL || '')
  }
});
