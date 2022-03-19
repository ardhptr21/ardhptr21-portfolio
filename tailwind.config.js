const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        pastel: {
          green: colors.green['400'],
          pink: colors.pink['500'],
          blue: colors.blue['500'],
          indigo: colors.indigo['400'],
          purple: colors.purple['500'],
          yellow: colors.yellow['300'],
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
