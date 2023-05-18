/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-cyan-purple":
          "linear-gradient(90deg, #02FEF1 0%, #AA01FC 100%)",
      }),
    },
    fontFamily: {
      mono: ["var(--font-inconsolata)", ...fontFamily.mono],
    },
    keyframes: {
      "gradient-y": {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "center top",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "center center",
        },
      },
      "gradient-x": {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
      "gradient-xy": {
        "0%, 100%": {
          "background-size": "400% 400%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
    animation: {
      "spin-slow": "spin 10s linear infinite",
      "gradient-x": "gradient-x 5s ease infinite",
      "gradient-y": "gradient-y 5s ease infinite",
      "gradient-xy": "gradient-xy 5s ease infinite",
    },
  },
  plugins: [],
};
