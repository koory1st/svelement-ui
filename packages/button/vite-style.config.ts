import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/style.ts'),
      name: 'index',
      fileName: 'index',
		},
		outDir: 'dist/style'
	},

});
