import { config as dotenvConfig } from "dotenv";
import type { GatsbyConfig } from "gatsby";

const env = dotenvConfig({
  path: `${process.env.NODE_ENV}.env`,
});
if (env.error != null) {
  console.error("Error while loading env variables from file");
  process.exit(1);
}

declare module "dotenv" {
  interface DotenvParseOutput {
    GATSBY_CONTENTFUL_ACCESS_TOKEN?: string;
    GATSBY_CONTENTFUL_SPACE_ID?: string;
    GATSBY_GOOGLE_TRACKING_ID?: string;
  }
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Mattia De Vivo",
    siteUrl: "https://mattiadevivo.dev",
    description:
      "Mattia De Vivo is software engineer skilled in cloud, microservices and DevOps.",
    keywords: [
      "mattia de vivo",
      "mattia",
      "de vivo",
      "mattiadevivo",
      "developer",
      "software developer",
      "sviluppatore software",
      "cloud developer",
      "software engineer",
      "devops engineer",
      "backend engineer",
      "cloud",
      "devops",
      "microservices",
      "aws",
      "azure",
      "gcp",
      "cybersecurity",
      "treviso",
    ],
    author: "Mattia De Vivo",
    image: "/images/icon.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: env.parsed?.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: env.parsed?.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
        start_url: "/",
        name: "mattiadevivo",
        short_name: "mdevivo",
        description: "Application showing Mattia De Vivo website",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/pages/blog/`,
      },
      __key: "pages",
    },
  ],
};

export default config;
