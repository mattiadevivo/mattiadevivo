import * as React from "react";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import PageLayout from "../../layouts/page-layout";
import { Box, Chip, Container, Typography } from "@mui/material";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const BlogPost = ({
  data,
  children,
}: {
  data: Queries.getBlogPostByIdQuery;
  children?: React.ReactNode;
}) => {
  return (
    <PageLayout>
      <Container sx={{ marginY: 2 }}>
        <Typography variant="h4" fontWeight="bold" marginBottom={2}>
          {data.mdx?.frontmatter?.title}
        </Typography>
        <Typography>
          {data.mdx?.frontmatter?.author} - {data.mdx?.frontmatter?.date}
        </Typography>
        {data.mdx?.frontmatter?.keywords?.map((keyword, index) => (
          <Chip
            key={keyword}
            variant="outlined"
            color="secondary"
            size="small"
            label={`#${keyword}`}
            sx={{ marginInlineStart: index == 0 ? 0 : 1 }}
          />
        ))}
        <br />
        <Box marginY={2}>
          <GatsbyImage
            image={
              data.mdx?.frontmatter?.featuredImage?.childImageSharp
                ?.gatsbyImageData as IGatsbyImageData
            }
            alt={`${data.mdx?.frontmatter?.title} photo`}
          />
        </Box>
        {children}
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query getBlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        author
        keywords
        slug
        date(formatString: "DD/MM/YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(formats: WEBP)
          }
          absolutePath
        }
      }
      excerpt
    }
  }
`;

export const Head = ({ data }: { data: Queries.getBlogPostByIdQuery }) => (
  <Seo
    title={`${data.mdx?.frontmatter?.title} | Mattia De Vivo`}
    description={data.mdx?.frontmatter?.description ?? ""}
    url={`blog/${data.mdx?.frontmatter?.slug}`}
    keywords={data.mdx?.frontmatter?.keywords as string[]}
    image={data.mdx?.frontmatter?.featuredImage?.absolutePath}
  />
);

export default BlogPost;
