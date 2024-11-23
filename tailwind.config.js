/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tomato: '#E50914',
        marigold:'#ffbc0b',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif",...defaultTheme.fontFamily.sans]
        
      },
    },
  },
  plugins: [],
};
