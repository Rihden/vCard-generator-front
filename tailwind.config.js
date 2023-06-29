/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("preline/plugin")],
};
