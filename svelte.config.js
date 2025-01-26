import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter:
			process.env.ADAPTER === 'VERCEL'
				? adapterVercel()
				: adapterStatic({
						pages: 'build',
						assets: 'build',
						fallback: '404.html',
						precompress: false,
						strict: true
					}),
		paths: {
			base: process.env.ADAPTER === "GITHUB_PAGES" ? '/ufc_site' : ''
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

