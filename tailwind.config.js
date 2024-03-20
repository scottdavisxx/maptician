/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d2653',
        secondary: '#445794',
        accent: '#46bd9c',
      },
      fontSize: {
        hidden: '0px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [],
};
