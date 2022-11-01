/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlack': '#202124',
        'lightGray': '#292A2D',
        'mediumGray': '#212224'
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
