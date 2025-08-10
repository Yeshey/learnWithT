import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Using swc is great!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/learnWithT/', // This is for GitHub Pages
  build: {
    outDir: 'dist' // Ensure output is to 'dist'
  }
})