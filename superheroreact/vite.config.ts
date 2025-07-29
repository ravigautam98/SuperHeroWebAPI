import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//export default defineConfig({
//    plugins: [plugin()],
//    server: {
//        port: 63728,
//    }
//})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 5173,
        proxy: {
            '/weatherforecast': {
                target: 'https://localhost:7265',
                changeOrigin: true,
                secure: false, // because you're using https with localhost
            }
        }
    }
});