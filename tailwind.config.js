// import  from 'tailwind-scrollbar-hide';
const scrollBarHide = require('tailwind-scrollbar-hide');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
			},
			fontFamily: {
				sans: ['Poppins'],
			},
		},
	},
	plugins: [scrollBarHide],
};
