import * as React from "react";
import type { HeadFC } from "gatsby";
import SEO from "../components/seo";
import About from "../components/about";
import { PageLayout } from "../layouts/page-layout";
import { Container } from "@mui/material";
import PostShowcase from "../components/post-showcase";

const IndexPage = (): JSX.Element => {
  return (
    <PageLayout>
      <Container>
        <About />
        <PostShowcase />
      </Container>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
