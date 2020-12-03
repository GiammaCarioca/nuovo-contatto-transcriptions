module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPassthroughCopy("./src/styles/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
