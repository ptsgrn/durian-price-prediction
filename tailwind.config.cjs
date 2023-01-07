const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		// set font
		extends: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontFamily: {
			sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
			loop: ['IBM Plex Sans Thai Looped', ...defaultTheme.fontFamily.sans]
		}
	},

	plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
	darkMode: 'class'
};

module.exports = config;
