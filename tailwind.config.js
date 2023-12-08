/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/*.liquid",
		"./snippets/*.liquid",
		"./templates/*.liquid",
		"./sections/*.liquid",
		"./templates/customers/*.liquid",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
