import {
  Card,
  CardContent,
  Button,
  CardActions,
  Stack,
  Typography
} from "@mui/material";
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
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      margin={1}
    >
      <Typography variant="h3">Latest Posts</Typography>
      {data.allMdx.nodes.map((node: any) => (
        <Card key={node.id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {node.frontmatter.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Posted {node.frontmatter.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default PostShowcase;
export { PostShowcase };
