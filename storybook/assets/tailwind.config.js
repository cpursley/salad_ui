/** @type {import('tailwindcss').Config} */
export default {
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
};
