/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Tblack: "#191A1B",
      black: "#000000",
      lightGrey: "#cfcfcf",
      lightergrey: "#e7e5e5",
      darkGrey: "#373131",
      DTgrey: "#8c8989",
      Border: "rgba(217, 217, 217, 0.29);",
      Darkblue: "#111316",
      mustard: "#A59999",
      LightBorder: "#f1f1f1",
      StartBg: "#1e1e1e",
      ALightgrey: "#bcbcbc",
      StartHead: "#d9d9d9",
      Copyright: "#323237",
      Output: "#9099ac",
      RunText: "#dfebff",
      Runbg: "#1f2228",
      ChatText: "#202124",
      ChatBg: "#f1f3f4",
    },
    extend: {
      spacing: {},
      fontSize: {},
      inset: {},
      width: {},
      height: {},
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Syne: ["Syne", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      // Add more custom font families as needed
    },
  },
  plugins: [],
};
