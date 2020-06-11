/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      title: 'Golden Goat USA',
      author: 'Golden Goat USA'
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-157289554-2",
        },
      },
      'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-facebook-pixel`,
        options: {
          pixelId: 'pixel id here',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-remark',
      `gatsby-plugin-react-helmet`
    ]
}
