import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 5173, // Ensure correct port
    strictPort: true, // Prevent port switching
    hmr: {
      clientPort: 5173, // Hot Module Replacement on the correct port
    },
  },
});
