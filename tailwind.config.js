/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        bgColor : "#F6F6F6F6",
        borderColor: "#EBEBEB",
        starBorder: "#A26A3F",
        gradColorLeft: "#5b9a96",
        gradColorRight: "#82beba",
      },      
      screens: {
        'laptop': '1026px',
        'biggerlaptop': '1274px',
        '1300' : '1300px',
        '1470': '1470px',
        '1560' : '1560px'
       
      },

    },
  },
  plugins: [],
}