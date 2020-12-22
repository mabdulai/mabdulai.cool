module.exports = {
  siteMetadata: {
    title: "Mabdulai",
    description: `
      This is a blog theme. The description will be showed in SEO results on pages
      without their own descriptions.
    `,
    siteUrl: "https://mabdulai.cool",
    image: "https://lengstorf.com/images/jason-lengstorf.jpg",
    author: "Your Name",
    categories: [{ slug: "test", name: "Test Category" }],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/posts`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins: [require("remark-slug"), require("remark-emoji")],
        defaultLayouts: {
          default: "./src/templates/blog-post.js",
        },
        gatsbyRemarkPlugins: [`gatsby-remark-prismjs`].filter(Boolean),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
};
