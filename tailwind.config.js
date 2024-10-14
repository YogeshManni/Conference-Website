/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arizonia: ["Arizonia", "cursive"],
      },
      colors: {
        headingColor: "#f15d30",
      },
    },
  },
  plugins: [],
};
