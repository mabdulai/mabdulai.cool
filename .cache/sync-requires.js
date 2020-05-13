const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\web\\mabdulai.cool\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\web\\mabdulai.cool\\src\\pages\\index.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("D:\\web\\mabdulai.cool\\src\\pages\\posts.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\web\\mabdulai.cool\\src\\templates\\blog-post.js")))
}

