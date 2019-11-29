module.exports = {
  siteMetadata: {
    title: `12 Bars of Christmas`,
    description: `'Tis the season for drinkin'.`,
    author: `Charlie Hay`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `12-bars-of-christmas`,
        short_name: `12bars`,
        start_url: `/`,
        background_color: `#D01C00`,
        theme_color: `#D01C00`,
        display: `minimal-ui`,
        icon: `src/assets/images/santa.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
