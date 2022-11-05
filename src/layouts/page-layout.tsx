import { Toolbar } from "@mui/material";
import React from "react";
import SEO from "../components/seo";
import NavBar from "./navbar";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <SEO />
      <NavBar />
      <Toolbar />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
export { PageLayout };
