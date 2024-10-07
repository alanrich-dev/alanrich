import React from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

function Education() {
  return (
    <Box>
      <Grid container spacing={8} justifyContent="center">
        {/* Left Column: Profile Card */}
        <Grid item>
          <ProfileCard />
        </Grid>

        {/* Right Column: Education Section */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#2D2A82",
            }}
          >
            What I am good at
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#2D2A82",
            }}
          >
            My Education
          </Typography>

          <Grid container spacing={4} alignItems="center">
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
                  {/* School Logo */}
                  <Box
                    component="img"
                    src="https://via.placeholder.com/64" // Placeholder for logo
                    alt="School logo"
                    sx={{
                      width: "64px",
                      height: "64px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Benedictine University
                  </Typography>
                  <Typography variant="subtitle1">
                    Bachelor of Science (Bac + 4 )
                  </Typography>
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
                  {/* University Logo */}
                  <Box
                    component="img"
                    src="https://via.placeholder.com/64" // Placeholder for logo,
                    alt="University logo"
                    sx={{
                      width: "64px",
                      height: "64px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Cours de Civilisation Française de la Sorbonne
                  </Typography>
                  <Typography variant="subtitle1">
                    French Language and Civilisation
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Language and French civilisation studies through a program
                    administered by La Fondation Robert de Sorbon and charged
                    with enhancing the influence of French civilisation
                    throughout the world.
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
                  {/* University Logo */}
                  <Box
                    component="img"
                    src="https://via.placeholder.com/64" // Placeholder for logo,
                    alt="University logo"
                    sx={{
                      width: "64px",
                      height: "64px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Illinois Institute of Technology
                  </Typography>
                  <Typography variant="subtitle1">
                    Molecular Biology (PhD Program)
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    I was briefly enrolled in a doctoral program but decided
                    that academic research was not my calling. During my studies
                    I performed genomic analysis of human colorectal cancer
                    cells affected by microsatellite mutations in the BaxΔ2
                    gene.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Me Button */}
          <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
