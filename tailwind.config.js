/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					
					
					primary: '#570DF8',

					secondary: '#F000B8',

					accent: '#37CDBE',

					neutral: '#0e7490',

					'base-100': '#FFFFFF',

					info: '#3ABFF8',

					success: '#433ead',

					warning: '#FBBD23',

					error: '#F87272',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};

