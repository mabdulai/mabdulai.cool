module.exports = {
  siteMetadata: {
    title: 'Mabdulai.cool'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mabdulai.cool',
        short_name: 'mabdulai.cool',
        start_url: '/'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    'gatsby-plugin-offline'
  ]
};
