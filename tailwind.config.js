/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      padding: '16px',
      center: 'true',
    },
    extend: {
      colors: {
        main: '#3182ce',
        latar: '#ebf8ff',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
