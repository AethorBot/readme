import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { minifyHtml } from 'vite-plugin-html';
/** @type {import('@sveltejs/kit').PrerenderErrorHandler} */
const handleError = ({ status, path, referrer, referenceType }) => {
	console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			onError: handleError
		},
		vite: {
			plugins: [viteSingleFile(), minifyHtml()],
			build: {
				emitCss: false,
				minify: true,
				minifyHtml: true,
				target: 'esnext',
				assetsInlineLimit: 100000000,
				chunkSizeWarningLimit: 100000000,
				cssCodeSplit: false,
				brotliSize: false,
				rollupOptions: {
					inlineDynamicImports: true,
					output: {
						manualChunks: () => 'aethor'
					}
				}
			}
		}
	}
};

export default config;
