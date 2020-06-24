const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/michaelabdulai/projects/reactprojects/mabdulai.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/michaelabdulai/projects/reactprojects/mabdulai.io/src/pages/index.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/Users/michaelabdulai/projects/reactprojects/mabdulai.io/src/pages/posts.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/michaelabdulai/projects/reactprojects/mabdulai.io/src/templates/blog-post.js")))
}

