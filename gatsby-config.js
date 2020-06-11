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
          head: true,
          anonymize: true,
        },
      },
      'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-facebook-pixel`,
        options: {
          pixelId: '775109709257197',
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
