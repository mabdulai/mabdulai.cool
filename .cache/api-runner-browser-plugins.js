module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"remarkPlugins":[null,null],"defaultLayouts":{"default":"./src/templates/blog-post.js"},"gatsbyRemarkPlugins":["gatsby-remark-prismjs"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
