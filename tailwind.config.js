/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(6rem, 18vw, 20rem)",
      },
      fontFamily: {
        display: ["var(--font-raleway)"],
        body: ["var(--font-open-sans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(48,102,190,1) 0%, rgba(0,0,0,0) 50%)",
      },
      shadow: {
        simple:
          "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
      },
      colors: {
        black: "#050505",
        white: "#fafafa",
        "ship-gray": {
          50: "#f7f7f8",
          100: "#efedf1",
          200: "#dad7e0",
          300: "#bab4c5",
          400: "#938ba5",
          500: "#776d8a",
          600: "#605871",
          700: "#4f485c",
          800: "#443e4e",
          900: "#3c3744",
          950: "#28242d",
        },
        "cod-gray": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#1a1a1a",
        },

        "cerulean-blue": {
          50: "#f2f6fd",
          100: "#e5ebf9",
          200: "#c5d5f2",
          300: "#92b2e7",
          400: "#5789d9",
          500: "#3066be",
          600: "#2251a7",
          700: "#1d4087",
          800: "#1c3970",
          900: "#1c325e",
          950: "#13203e",
        },
        "china-ivory": {
          50: "#fbfff1",
          100: "#eefec7",
          200: "#dcfd8a",
          300: "#d0fc4d",
          400: "#cffb24",
          500: "#daf50b",
          600: "#d5d906",
          700: "#b4a609",
          800: "#92800e",
          900: "#78680f",
          950: "#453a03",
        },
      },
      screens: {
        "320px": "320px",
        "540px": "540px",
      },
      text: {
        stroke: {
          light: "-webkit-text-stroke: 1px #050505",
          dark: "-webkit-text-stroke: 1px #fafafa",
        },
      },
    },
  },
  plugins: [],
};
