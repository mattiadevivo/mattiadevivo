import * as React from "react";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import PageLayout from "../../layouts/page-layout";
import { Container, Typography } from "@mui/material";

const BlogPost = ({
  data,
  children,
}: {
  data: Queries.getBlogPostByIdQuery;
  children?: React.ReactNode;
}) => {
  return (
    <PageLayout>
      <Container>
        <Typography variant="subtitle1">
          {data.mdx?.frontmatter?.title}
        </Typography>
        <Typography variant="subtitle2">
          {data.mdx?.frontmatter?.date}
        </Typography>
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
        keywords
        slug
        date(formatString: "D MMMM YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
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
