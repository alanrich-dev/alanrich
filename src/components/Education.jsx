import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Education() {
  const theme = useTheme();
  return (
    <Layout>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#2D2A82",
          paddingTop: "64px",
        }}
      >
        What I studied
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        color="primary"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        My Education
      </Typography>

      <Grid container spacing={4} alignItems="center" paddingTop="64px">
        {/* Education Item 1 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2004 - 2008
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Benedictine University
              </Typography>
              <Typography variant="subtitle1">Bachelor of Science</Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  Thesis:
                </Typography>{" "}
                “A One-Pot Asymmetric Robinson Annulation in the Organic
                Chemistry Majors Laboratory”,{" "}
                <a
                  href="https://doi.org/10.1021/ed085p1531"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2D2A82", textDecoration: "underline" }}
                >
                  Journal of Chemical Education, 85 (2008)
                  DOI:10.1021/ed085p1531
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Education Item 2 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2009 - 2010
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Cours de Civilisation Française de la Sorbonne
              </Typography>
              <Typography variant="subtitle1">
                French Language and Civilisation
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                Language and French civilisation studies through a program
                administered by La Fondation Robert de Sorbon.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Education Item 3 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2013 - 2014
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Illinois Institute of Technology
              </Typography>
              <Typography variant="subtitle1">
                Molecular Biology (PhD Program)
              </Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                I was briefly enrolled in a doctoral program but decided that
                academic research was not my calling. During my studies I
                performed genomic analysis of human colorectal cancer cells
                affected by microsatellite mutations in the BaxΔ2 gene.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Me Button */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Layout>
  );
}

export default Education;
