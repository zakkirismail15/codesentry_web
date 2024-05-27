module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        'dark-gray': '#202329',
        secondary: '#C4C4C4',
      },
      height: {
        header: '3.5rem',
        dualnav: '2.5rem',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
