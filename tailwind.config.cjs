/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lgmd': '820px',

      'mdlg': '912px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1.5xl': '1350px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
