import {
  Avatar,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import { GatsbyImageProps, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  name: string;
  about: string;
};

const AboutSection = (props: Props) => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="circular">
        <Avatar />
      </Skeleton>
      <Typography>{props.name}</Typography>
      <Paper
        elevation={3}
        sx={{
          padding: "2%"
        }}
      >
        <Typography variant="h4">About me</Typography>
        <Typography>{props.about}</Typography>
      </Paper>
    </Stack>
  );
};

export default AboutSection;
export { AboutSection };
