const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles/')

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/styles/')
  eleventyConfig.addPassthroughCopy('./src/assets/images/')

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'layouts/base.html')

  // Returns track items, sorted by display order
  eleventyConfig.addCollection('A2', (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/transcriptions/contattoA2/*.md')
    )
  })

  eleventyConfig.addCollection('B1', (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/transcriptions/contattoB1/*.md')
    )
  })

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
