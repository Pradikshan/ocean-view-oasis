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
      },
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms",
        "3500": "3500ms",
        "4000": "4000ms",
        "4500": "4500ms",
        "5000": "5000ms",
        "5500": "5500ms",
        "6000": "6000ms",
        "6500": "6500ms",
        "7000": "7000ms",
        "7500": "7500ms",
        "8000": "8000ms",
        "8500": "8500ms",
        "9000": "9000ms",
        "9500": "9500ms",
        "10000": "10000ms",
        "10500": "10500ms",
        "11000": "11000ms",
        "11500": "11500ms"
      }
    },
  },
  plugins: [],
}

