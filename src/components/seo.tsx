import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import type { PageProps } from "gatsby";

type DataProps = {
    site: {
        siteMetadata: {
            description: string,
        }
    }
};

const SEO = (props: PageProps) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              description
              keywords
              title
              image
              siteUrl
              author
            }
          }
        }
      `}
      render={(data) => {
        const metaDescription =
          props.description || data.site.siteMetadata.description;
        const metaKeywords = props.keywords || data.site.siteMetadata.keywords;
        const metaTitle = props.title || data.site.siteMetadata.title;
        const metaImage = props.image || data.site.siteMetadata.image;
        const metaUrl = props.url || data.site.siteMetadata.siteUrl;
        return (
          <Helmet
          htmlAttributes={{
            lang: "en"
          }}
            title={metaTitle}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "keywords",
                content: metaKeywords.join(", "),
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author,
              },
              {
                name: "twitter:title",
                content: metaTitle,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: metaTitle,
              },
              {
                property: "og:url",
                content: metaUrl,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:image",
                content: metaImage
              },
              {
                property: "og:image:width",
                content: metaImage.width
              },
              {
                property: "og:image:height",
                content: metaImage.height
              },
              {
                name: "twitter:card",
                content: "summary_large_image"
              }
            ]}
          >
            {props.children}
          </Helmet>
        );
      }}
    />
  );
};

export default SEO;