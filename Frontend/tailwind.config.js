module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        brusher:  ['"Single Day"', 'sans-serif'], // Add this line
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
