/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' :['Poppins', 'sans-serif']
      },
      screens:{
        'sm' : '670px',
      },
      transitionProperty: {
        'visibility': 'visibility'
      },
      height: {
        '110' : '27.5rem'
      },
      brightness: {
        25 : '.25'
      },
      inset: {
        '110': '27.5rem',
      },
      width: {
        '30%': '30%',
        '100%': '100%',
      }
    },
  },
  plugins: [],
}
