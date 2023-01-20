/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {300:'#0079fe', 500: '#1f2a48', 900: '#141c2f' }
      }
    },
  },
  plugins: [],
}
