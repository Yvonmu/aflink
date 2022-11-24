/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '280px', 'max': '826px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '827px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

    },
  },
  plugins: [],
}
