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
        main: "#020608",
        main100:"#012340",
        main200:"#3F618C",
        main300:"#f58ca8",
        main400:"#8C2656",
        main500:"#F20544",
        main600:"#fffafc"
      }
    },
  },
  plugins: [],
}
