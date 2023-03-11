/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['active'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}