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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `12-bars-of-christmas`,
        short_name: `12bars`,
        start_url: `/`,
        background_color: `#ff2353`,
        theme_color: `#ff2353`,
        display: `minimal-ui`,
        icon: `src/assets/images/santa.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
