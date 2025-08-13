import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      // The hostname MUST include your repository path for GitHub Pages
      hostname: 'https://Yeshey.github.io/learnWithT',
      // Provide the list of all your pages here
      dynamicRoutes: [
        '/',
        '/about',
        '/faq',
        '/translations',
        '/offer/group-funchal',
        '/offer/group-online',
        '/offer/private-1on1',
        '/offer/private-1on2',
        '/terms-conditions',
      ],
    }),
  ],
  base: '/learnWithT/',
  build: {
    outDir: 'dist'
  }
})