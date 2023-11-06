import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react-swc'
import linaria from '@linaria/rollup'
import {dirname, resolve} from 'path'

const DIR_PATH = '.'
const BASE_PATH = './src/'

const resolvePath = (path: string) => resolve(dirname(DIR_PATH), path)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), linaria(), splitVendorChunkPlugin()],
    resolve: {
        alias: {
            '@': resolvePath(`${BASE_PATH}`)
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    console.log(id)
                    // creating a chunk to react routes deps. Reducing the vendor chunk size
                    if (id.includes('chakra-ui')) {
                        return '@chakra'
                    }
                    if (id.includes('react-router-dom') || id.includes('react-router')) {
                        return '@react-router'
                    }
                }
            }
        }
    }
})
