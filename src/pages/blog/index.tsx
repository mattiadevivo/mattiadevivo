import { Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PostCard from "../../components/post-card";
import PostShowcase from "../../components/post-showcase";
import { PageLayout } from "../../layouts/page-layout";

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query AllMdxFiles {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            author
            title
            date(formatString: "D MMMM YYYY")
            slug
          }
        }
      }
    }
  `);

  return (
    <PageLayout>
      <Container>
        <PostShowcase />
        <Typography variant="h4">Navigate through all the posts</Typography>
        <Grid container direction="row" spacing={1}>
          {data.allMdx.nodes.map((node: any) => (
            <Grid key={node.frontmatter.id} item xs={12} sm={4}>
              <PostCard
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                link={`/blog/${node.frontmatter.slug}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default BlogIndex;
export { BlogIndex };
