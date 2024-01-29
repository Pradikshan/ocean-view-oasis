/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans']
      },
      backgroundImage: {
        "main-img": "url(../public/images/main_img2.jpg)"
      }
    },
  },
  plugins: [],
}

