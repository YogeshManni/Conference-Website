/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arizonia: ["Arizonia", "cursive"],
      },
      colors: {
        headingColor: "#f15d30",
        secondary: colors.slate[400],
      },
      boxShadow: {
        spread:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
  },
  plugins: [],
};
