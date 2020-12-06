module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles/')
  eleventyConfig.addPassthroughCopy('./src/styles/')

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'layouts/base.html')

  // sort transcripts collection by track in ascending order
  eleventyConfig.addCollection('transcripts', (collection) =>
    collection
      .getFilteredByTag('transcripts')
      .sort((a, b) => {
        return b.data.order - a.data.order
      })
      .reverse()
  )

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
