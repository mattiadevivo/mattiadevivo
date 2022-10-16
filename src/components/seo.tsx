import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      keywords: string[];
      author: string;
      image: any;
    };
  };
}

interface Props {
  description?: string;
  keywords?: string[];
  title?: string;
  image?: any;
  url?: string;
  children?: JSX.Element[];
}

const SEO = (props: Props) => {
  const { site }: DataProps = useStaticQuery(
    graphql`
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
    `
  );
  const metaDescription = props.description || site.siteMetadata.description;
  const metaKeywords = props.keywords || site.siteMetadata.keywords;
  const metaTitle = props.title || site.siteMetadata.title;
  const metaImage = props.image || site.siteMetadata.image;
  const metaUrl = props.url || site.siteMetadata.siteUrl;
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(", ")} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:url" content={metaUrl} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:image:width" content={metaImage.width} />
      <meta name="og:image:width" content={metaImage.height} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.children}
    </>
  );
};

export default SEO;
