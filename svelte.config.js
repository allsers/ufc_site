import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/ufc_site',
		},

		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
			  // Ignore 404 errors for the /events route
			  if (path === '/events' && message.includes('404')) {
				return;
			  }
			  // Otherwise, throw the error
			  throw new Error(message);
			}
		}
	}
};

export default config;