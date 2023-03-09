/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./js/*.js", "./index.html"],

  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant", "serif"],
        mono: ["Fira Code", "mono"],
        cursive: ["Itim", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
