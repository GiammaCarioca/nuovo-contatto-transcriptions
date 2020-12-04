const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/index.html",
    "./src/_includes/layouts/*.html",
    "./src/**/*.html",
    "./src/styles/*.css",
    "./src/_includes/styles/*.css",
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
