/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./assets/*/*.{js, css}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
      },
    },
  }
};
