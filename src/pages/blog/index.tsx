import { Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PostShowcase from "../../components/post-showcase";
import { PageLayout } from "../../layouts/page-layout";

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query mdxfiles {
      allMdx(sort: { fields: frontmatter___date }, limit: 3) {
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

  // TODO: create Post cards
  <PageLayout>
    <Container>
      <PostShowcase />
      <Typography variant="h1">Navigate through all the posts</Typography>
      <Grid container direction="row" spacing={1}></Grid>
    </Container>
  </PageLayout>;
};

export default BlogIndex;
export { BlogIndex };
