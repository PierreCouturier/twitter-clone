/* let theme = document.documentElement.getAttribute('data-theme')

console.log(theme); */

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			mono: ['Fira Code', 'Courier', 'monospace'],
		},
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)'
			}
		},
	},
	plugins: [],
}
