import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike
} from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";

type Props = {
  about: string;
};

type PersonData = {
  image: ImageDataLike;
  about: { about: string };
  address: string;
  email: string;
};

const AboutSection = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query person {
        allContentfulPerson {
          edges {
            node {
              address
              email
              about {
                about
              }
              image {
                gatsbyImageData(
                  quality: 100
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `
  );
  const person: PersonData = data.allContentfulPerson.edges[0].node;
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
      <Typography>{person.about.about}</Typography>
    </Stack>
  );
};

export default AboutSection;
export { AboutSection };
