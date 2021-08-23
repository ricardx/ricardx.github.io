const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        darkest: '#1c1c1e',
        dark: '#2c2c2e',
        DEFAULT: '#3a3a3c',
        light: '#48484a',
        lightest: '#636366',
      },
      black: colors.black,
      white: colors.white,
      purple: colors.purple,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}