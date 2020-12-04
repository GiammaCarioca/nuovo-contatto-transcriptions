module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPassthroughCopy("./src/styles/");

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias("default", "layouts/base.html");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
