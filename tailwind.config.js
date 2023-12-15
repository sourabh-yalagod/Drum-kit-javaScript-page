/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./*.{html,js}","./JavaScript/app.js"],
  theme: {
    extend: {
      backgroundImage:{
        'DJ_image_BG':'url(../Images/background.jpg)',
      },
      fontFamily:{
        Vast_shadow: "'Vast Shadow', serif",
      }
    },
  },
  plugins: [],
}

