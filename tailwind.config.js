const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.blueGray,
      stone: colors.stone,
    },
    extend: {
      backgroundImage: {
        'svg-music': "url('/src/assets/img/music.svg')",
        'svg-home': "url('/src/assets/img/home.svg')",
        'svg-mv': "url('/src/assets/img/mv.svg')",
        'svg-mx': "url('/src/assets/img/mx.svg')",
        'svg-pm': "url('/src/assets/img/pm.svg')",
        'svg-gd': "url('/src/assets/img/gd.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
