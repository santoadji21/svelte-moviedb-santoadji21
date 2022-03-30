import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build' }),
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
