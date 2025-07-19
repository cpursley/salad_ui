const formsPlugin = require("@tailwindcss/forms");
const typographyPlugin = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.js",
    "../lib/salad_storybook_web.ex",
    "../lib/salad_storybook_web/**/*.*ex",
    "../**/*.story.exs",
    "../../../config/*.*exs",
    "../../lib/**/*.ex",
    "../deps/salad_ui/lib/**/*.ex",
  ],
  important: ".salad-storybook-web",
  plugins: [
    formsPlugin,
    typographyPlugin,
  ],
};
