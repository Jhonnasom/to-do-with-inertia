import laravel from "laravel-vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
        // El entrypoint de la aplicación
        input:'src/main.jsx',
        publicDirectory:'../../public',
        // Para que automaticamente recargue el navegador cuando se hagan cambios
        refresh:['resources/react/**']
    }),
      react()],
})
