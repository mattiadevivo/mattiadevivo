import { Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import PostCard from "../../components/post-card";
import PostShowcase from "../../components/post-showcase";
import { PageLayout } from "../../layouts/page-layout";

const BlogIndex = () => {
  const data = useStaticQuery<Queries.allMdxFilesQuery>(graphql`
    query allMdxFiles {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            author
            title
            date(formatString: "D MMMM YYYY")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, height: 200, formats: WEBP)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <PageLayout>
      <Container>
        <Typography variant="h4" marginY={3}>
          Blog Posts
        </Typography>
        <Grid container direction="row" spacing={1} marginTop={3}>
          {data.allMdx.nodes.map((node) => (
            <Grid key={node.id} item xs={12} sm={4}>
              <PostCard
                title={node.frontmatter?.title ?? ""}
                date={node.frontmatter?.date ?? ""}
                link={`/blog/${node.frontmatter?.slug}`}
                imageData={
                  node.frontmatter?.featuredImage?.childImageSharp
                    ?.gatsbyImageData as IGatsbyImageData
                }
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
