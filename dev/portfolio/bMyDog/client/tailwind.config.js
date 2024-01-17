/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-bg': "url('./images/imgNotFound.png')"
      },
    },
  },
  plugins: [],
  // darkMode: 'class', 
  // or
  // darkMode: ['class', '[data-mode="dark"]'],

}
