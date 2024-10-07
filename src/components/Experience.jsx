import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Experience() {
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
        Where I've worked
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
        My Experience
      </Typography>

      <Grid container spacing={4} alignItems="center" paddingTop="64px">
        {/* Experience Item 1 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2024 - 2022
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Research Innovations Inc.
              </Typography>
              <Typography variant="subtitle1">Frontend Developer II</Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                Language and French civilisation studies through a program
                administered by La Fondation Robert de Sorbon.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Experience Item 2 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2022 - 2021
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                OC Tanner
              </Typography>
              <Typography variant="subtitle1">Frontend Developer I</Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                Language and French civilisation studies through a program
                administered by La Fondation Robert de Sorbon.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Experience Item 3 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2021 - 2019
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Upwork
              </Typography>
              <Typography variant="subtitle1">Frontend Developer I</Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                I was briefly enrolled in a doctoral program but decided that
                academic research was not my calling. During my studies I
                performed genomic analysis of human colorectal cancer cells
                affected by microsatellite mutations in the BaxΔ2 gene.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Experience Item 4 */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{ color: "#8E44AD", fontWeight: "bold" }}
          >
            2019 - 2014
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Upwork
              </Typography>
              <Typography variant="subtitle1">Technical Writer</Typography>
              <Typography variant="body1" sx={{ color: "#666" }}>
                Language and French civilisation studies through a program
                administered by La Fondation Robert de Sorbon.
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

export default Experience;
