import adapter from '@sveltejs/adapter-auto';

import sveltePreprocess from "svelte-preprocess";
import { optimizeImports } from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		sveltePreprocess(),
		optimizeImports(),
	],
};

export default config;
