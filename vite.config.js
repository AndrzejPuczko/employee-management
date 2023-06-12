import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'



dotenv.config()

export default defineConfig({
	plugins: [react(), svgr()],
	base: '',
	build: {
		outDir: './dist',
	},
	resolve: {
		alias: {
			'/@': path.resolve(__dirname, 'src'),
		},
	},
	define: {
		'process.env': process.env,
	},
	optimizeDeps: {
		include: ['downshift'],
	},
})
