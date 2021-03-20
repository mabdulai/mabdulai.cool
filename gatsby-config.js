module.exports = {
  siteMetadata: {
    title: "Mabdulai.cool",
    description: `
      Mabdulai.cool is Michael Abdulai his personal page. Where I explore the topics of productivity, frontend development and design.
    `,
    siteUrl: "https://mabdulai.cool",
    image: "https://i.imgur.com/2ODZxe5.jpg",
    author: "Michael Abdulai",
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "production" ? false : true,
      },
    },
  ],
};
