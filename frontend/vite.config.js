import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"]
                }
            }
        }
    },
    plugins: [
        {
            name: 'treat-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/))  return null;

                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic'
                })
            }
        },
        react()
    ],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            }
        }
    },
    define: {
        'process.platform': null,
        'process.version': null
    }
});
