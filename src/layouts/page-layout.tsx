import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "grid", minHeight: "100vh" }}>
        <NavBar />
        <main>
          <Toolbar />
          {children}
        </main>
        <Footer />
      </Box>
    </>
  );
};

export default PageLayout;
export { PageLayout };
