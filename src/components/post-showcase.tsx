import { Box, Grid, Typography } from "@mui/material";
import { PostCard } from "./post-card";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";

type Props = {};

/**
 *
 * Show Latest Blog Posts
 * @param {Props} props
 * @return {*}  {JSX.Element}
 */
const PostShowcase = (props: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query mdxfiles {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
    <Box marginY={2}>
      <Typography variant="h4">Latest Posts</Typography>
      <Grid container direction="row" spacing={1}>
        {data.allMdx.nodes.map((node: any) => (
          <Grid item key={node.id} xs={12} sm={4}>
            <PostCard
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              link={`/blog/${node.frontmatter.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostShowcase;
export { PostShowcase };
