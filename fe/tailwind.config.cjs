/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      translate: {
        'minus1/2': '-50%'
      },
      padding: {
        '56per' : '56%',
      },
      colors: {
        'main-profile-bg': 'rgba(255, 255, 255, .7)',
      }
    }
  },
  plugins: [],
}
