// apps/site/tailwind.config.js
const { join } = require("path");

module.exports = {
  purge: [
    join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"),
  ],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
