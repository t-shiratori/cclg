import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/cclg/index.ts'),
      name: 'index',
      fileName: 'index',
    },
  },
})
