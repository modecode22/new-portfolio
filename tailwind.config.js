/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        main: "#181818",
        main100:"#2C74B3",
        main200:"#E6DDC4",
        main300:"#F0E9D2",
        main400:"#EEEEEE",
      }
    },
  },
  plugins: [],
}
