/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      dark: "#293241",
      light: "#e0fbfc",
      blue: { light: "#6899d9", DEFAULT: "#3d5a80", dark: "#25364d" },
      lightBlue: { light: "#b3e3ff", DEFAULT: "#98c1d9", dark: "#647d8c" },
      orange: { light: "#ff7a5c", DEFAULT: "#ee6c4d", dark: "#a84d38" },
      green: { light: "#0dfcce", DEFAULT: "#09d3ac", dark: "#08997d" },
    },
    extend: {
      fontFamily: {
        header: ['"Oswald"', "sans-serif"],
        body: ['"Lato"', "sans-serif"],
      },
      backgroundImage: {
        "logo-bg": "url('./assets/images/krol_logo.png')",
        "shadows-bg": "url('./assets/images/shadows.png')",
        "text-bg": "url('./assets/images/text.png')",
        "animation-bg": "url('./assets/images/animation.png')",
        "articles-bg": "url('./assets/images/articles.png')",
      },
      dropShadow: {
        white: "0 7px 7px rgba(255, 255, 255, 0.25)",
      },
      keyframes: {
        appearance: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        appearance: "appearance 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
