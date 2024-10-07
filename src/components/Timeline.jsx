import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Layout from "./Layout";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Timeline({ heading, subheading, items }) {
  const theme = useTheme();

  return (
    <Layout>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          //textTransform: "uppercase",
          color: theme.palette.primary.secondary,
          paddingTop: "64px",
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        {subheading}
      </Typography>

      <Grid container spacing={4} alignItems="center" paddingTop="64px">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.highlight,
                  fontWeight: "bold",
                }}
              >
                {item.date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.subtitle}</Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      {/* Contact Me Button */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
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

export default Timeline;
