const formsPlugin = require("@tailwindcss/forms");
const typographyPlugin = require("@tailwindcss/typography");
const animatePlugin = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../../config/*.*exs", 
    "../lib/**/*.ex",
    "./component-classes.html"
  ],
  plugins: [
    formsPlugin,
    typographyPlugin,
    animatePlugin,
  ],
};
