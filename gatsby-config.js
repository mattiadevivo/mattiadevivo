require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Options for contentful CMS
options = {
  accessToken: process.env.GATSBY_ACCESS_TOKEN,
  spaceId: process.env.GATSBY_SPACE_ID,
}
if(process.env.NODE_ENV === "development"){
  options.host = "preview.contentful.com";
}

module.exports = {
  siteMetadata: {
    title: "Mattia De Vivo - Developer",
    siteUrl: "https://mattiadevivo.netlify.app", 
    description: "Mattia De Vivo, software developer and computer science engineer based in Treviso (Italy). I am actually focusing on cybersecurity.",
    keywords: ["mattia de vivo", "mattiadevivo", "developer", "software developer", "sviluppatore software", "cybersecurity", "treviso"],
    author: "Mattia De Vivo",
    image: "/images/icon.png",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: { accessToken: process.env.GATSBY_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_SPACE_ID,},
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          process.env.GATSBY_GTAG, // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",  // PWA manifest
      options: {
        icon: "src/images/icon.png",
        start_url: '/',
        name: "mattiadevivo",
        short_name: "MDV",
        description: "Application showing Mattia De Vivo website",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
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
