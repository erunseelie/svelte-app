const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
};

module.exports = {
	config,
	plugins: [
		// Keep any existing plugins present and append the following:
		require('@brainandbones/skeleton/tailwind/theme.cjs')
	],
	darkMode: 'class',
	content: [
		// Keep any existing values present and append the following:
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	]
};
