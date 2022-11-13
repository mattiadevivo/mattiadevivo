import { Typography } from "@mui/material";
import { PageLayout } from "./page-layout";
import React from "react";
import { Container } from "@mui/system";

type Props = {
  title: string;
  body: string;
};

const PostLayout = (props: Props): JSX.Element => {
  return (
    <PageLayout>
      <Container>
        <Typography variant="subtitle1">{props.title}</Typography>
        <Typography variant="body1">{props.body}</Typography>
      </Container>
    </PageLayout>
  );
};

export default PostLayout;
export { PostLayout };
