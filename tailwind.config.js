/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          200: '#3b99ff',
          300: '#0079fe',
          500: '#1f2a48',
          900: '#141c2f',
        },
        lightBlue: { 100: '#fefefe', 200: '#f5f8ff' },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
