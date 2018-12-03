const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  pathPrefix: `/conflux-tech.github.io`,
  siteMetadata: {
    title: `Web and Mobile App Development in Thailand for Startups and Enterprises | Conflux`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `svgo`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        precision: 8
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-36469018-9",
        head: false
      }
    },
    `gatsby-transformer-json`
  ],
}
