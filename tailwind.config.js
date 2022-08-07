module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
