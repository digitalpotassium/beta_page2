// import adapter from '@sveltejs/adapter-auto'; // You can remove this line
import adapter from '@sveltejs/adapter-static'; // Add this line
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Important for Single-Page Apps (SPA)
			precompress: false,
			strict: true
		})
	}
};

export default config;