import * as React from "react";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import PageLayout from "../../layouts/page-layout";
import { Container, Typography } from "@mui/material";

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        // TODO: add image see https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-images-in-markdown/#configuring-for-images-and-posts-in-different-directories
      };
    };
  };
  children?: React.ReactNode;
};

const BlogPost = ({ data, children }: Props) => {
  return (
    <PageLayout>
      <Container>
        <Typography variant="subtitle1">
          {data.mdx.frontmatter.title}
        </Typography>
        <Typography variant="subtitle2">{data.mdx.frontmatter.date}</Typography>
        {children}
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
      }
      excerpt
    }
  }
`;

export const Head = ({ data }: Props) => (
  <Seo title={`${data.mdx.frontmatter.title} | Mattia De Vivo`} />
);

export default BlogPost;
