import { Box, Grid, Typography } from "@mui/material";
import { PostCard } from "./post-card";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

/**
 *
 * Show Latest Blog Posts
 * @return {*}  {JSX.Element}
 */
const PostShowcase = (): JSX.Element => {
  const data = useStaticQuery<Queries.latestMdxFilesQuery>(graphql`
    query latestMdxFiles {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
    <Box marginY={2}>
      <Typography variant="h4" marginY={3}>
        Latest Posts
      </Typography>
      <Grid container direction="row" spacing={1}>
        {data.allMdx.nodes.map((node) => (
          <Grid item key={node.id} xs={12} sm={4}>
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
    </Box>
  );
};

export default PostShowcase;
export { PostShowcase };
