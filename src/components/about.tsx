import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  GatsbyImage,
  getImage,
  getImageData,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useStaticQuery, graphql } from "gatsby";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import React, { ReactNode } from "react";

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children: ReactNode) => (
      <Box sx={{ fontWeight: "bold" }}>
        <Typography>{children}</Typography>
      </Box>
      //<Typography>{children}</Typography>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (node: ReactNode) => (
      <Box sx={{ fontWeight: "bold" }}>
        <Typography>{node}</Typography>
      </Box>
    ),
  },
};

const AboutSection = () => {
  const data = useStaticQuery<Queries.personQuery>(
    graphql`
      query person {
        allContentfulPerson {
          edges {
            node {
              address
              email
              about {
                raw
              }
              image {
                gatsbyImageData(
                  quality: 100
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  height: 250
                )
              }
            }
          }
        }
      }
    `
  );
  const person = data.allContentfulPerson.edges[0].node;
  const image = getImage(person.image) as IGatsbyImageData;
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      my={2}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <GatsbyImage image={image} alt="Mattia De Vivo Photo" />
        </Grid>
        <Grid
          item
          sm={8}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          zeroMinWidth
        >
          <Typography variant="h3">Hi There! 👋</Typography>
        </Grid>
      </Grid>
      {documentToReactComponents(
        JSON.parse(person.about?.raw as string),
        options
      )}
      <Box component="div" display="flex" alignItems="center">
        <Typography variant="h5" component="span">
          Follow me on:
        </Typography>
        <Link
          href="https://www.linkedin.com/in/mattia-de-vivo-281316157/"
          marginLeft={1}
          display="flex"
          alignItems="center"
          sx={{
            color: "primary",
          }}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/mattiadevivo"
          marginX={1}
          display="flex"
          alignItems="center"
          sx={{
            color: "black",
          }}
        >
          <GitHubIcon />
        </Link>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        my={2}
      >
        <img
          src="/images/aws-certified-solutions-architect-associate.png"
          alt="aws certified solutions architect associate badge"
          height="150px"
          width="150px"
        />
      </Stack>
    </Stack>
  );
};

export default AboutSection;
export { AboutSection };
