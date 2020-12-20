module.exports = {
  siteMetadata: {
    title: "mattiadevivo",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gLzYJ4jl7Y8M7Zsm3vgqeHl4sQeZ6x-_f5IFObH457Q",
        spaceId: "",
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
