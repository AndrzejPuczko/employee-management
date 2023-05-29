import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '',
	build: {
		outDir: './dist',
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]_[local]__[hash:base64:5]',
		},
	},
})
