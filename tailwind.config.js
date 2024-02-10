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
        "main-img": "url(../public/images/main_img2-min.jpg)",
        "about-img": "url(../public/images/background-img-about2.svg)",
        "faq-img": "url(../public/images/background-img-faq.svg)",
        "contact-img": "url(../public/images/background-img-contact.svg)",
      },
      backgroundColor: {
        "trans": "#000000e1",
        "secondary-color": "#f5f5de",
        "cta-color": "#474838",
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
        "11500": "11500ms",
        "12000": "12000ms",
        "13000": "13000ms",
        "13500": "13500ms",
        "14000": "14000ms",
        "14500": "14500ms",
        "15000": "15000ms",
        "15500": "15500ms",
        "16000": "16000ms",
        "16500": "16500ms",
        "17000": "17000ms",
        "17500": "17500ms",
        "18000": "18000ms",
        "18500": "18500ms",
        "19000": "19000ms",
        "19500": "19500ms",
        "20000": "20000ms",
        "20500": "20500ms",
      },
      transitionDelay: {
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
        "11500": "11500ms",
        "12000": "12000ms",
        "12500": "12500ms",
        "13000": "13000ms",
        "13500": "13500ms",
        "14000": "14000ms",
        "14500": "14500ms",
        "15000": "15000ms",
        "15500": "15500ms",
        "16000": "16000ms",
        "16500": "16500ms",
        "17000": "17000ms",
        "17500": "17500ms",
        "18000": "18000ms",
        "18500": "18500ms",
        "19000": "19000ms",
        "19500": "19500ms",
        "20000": "20000ms",
        "20500": "20500ms",
      },
      translate: {
        "200": "200%",
        "300": "300%",
        "400": "400%"
      },
    },
  },
  plugins: [],
}

