const { default: theme } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: {
					50: "theme('colors.blue.50')",
					100: "theme('colors.blue.100')",
					200: "theme('colors.blue.200')",
					300: "theme('colors.blue.300')",
					400: "theme('colors.blue.400')",
					500: "theme('colors.blue.500')",
					600: "theme('colors.blue.600')",
					700: "theme('colors.blue.700')",
					800: "theme('colors.blue.800')",
					900: "theme('colors.blue.900')",
				}
			},
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
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
