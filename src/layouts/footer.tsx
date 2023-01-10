import { Typography, Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <Grid
      container
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <Link
          href="https://www.linkedin.com/in/mattia-de-vivo-281316157/"
          color="inherit"
          sx={{ marginX: 1 }}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/mattiadevivo"
          color="inherit"
          sx={{ marginX: 1 }}
        >
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <Typography variant="body1">
          &#169; Mattia De Vivo {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
