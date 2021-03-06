/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
  apiUrl: process.env.API_URL,
})


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
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-M6BMKKW",
          includeInDevelopment: false,
          defaultDataLayer: { platform: "gatsby" },
          gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
          gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
          dataLayerName: "YOUR_DATA_LAYER_NAME",
          routeChangeEventName: "gatsby-route-change",
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
