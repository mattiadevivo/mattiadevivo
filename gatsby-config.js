require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "mattiadevivo",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.GATSBY_ACCESS_TOKEN}`,
        spaceId: `${process.env.GATSBY_SPACE_ID}`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
