import { Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PostShowcase from "../../components/post-showcase";
import { PageLayout } from "../../layouts/page-layout";

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query mdxfiles {
      allMdx(sort: { frontmatter: { date: ASC } }, limit: 3) {
        nodes {
          id
          frontmatter {
            author
            title
            date
          }
          excerpt
        }
      }
    }
  `);

  return (
    <PageLayout>
      <Container>
        <PostShowcase />
        <Typography variant="h4">Navigate through all the posts</Typography>
        <Grid container direction="row" spacing={1}></Grid>
      </Container>
    </PageLayout>
  );
};

export default BlogIndex;
export { BlogIndex };
