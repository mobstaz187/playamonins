import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/animon/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mp4/i.test(ext)) {
            // Keep the original folder structure for media files
            return `${assetInfo.name}`;
          }
          
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "style-src 'self' 'unsafe-inline' https://db.onlinewebfonts.com",
        "font-src 'self' https://db.onlinewebfonts.com",
        "img-src 'self' data: https: http:",
        "media-src 'self' https: http:",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      ].join('; ')
    }
  }
})