const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],

	theme: {
		// set font
		extends: {
			fontFamily: {
				sans: ['Umpush', ...defaultTheme.fontFamily.sans],
			}
		},
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
};

module.exports = config;
