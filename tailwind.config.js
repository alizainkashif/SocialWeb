/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens : {
      'xs': {'max': '639px'},   // Custom extra-small breakpoint from 0px to 639px
      'sm': {'min': '640px', 'max': '767px'}, // Small breakpoint from 640px to 767px
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1379px'},
      'xl': {'min': '1380px', 'max': '1535px'},
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}