import React from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import ProfileCard from "./ProfileCard";

function Home() {
  return (
    <Box>
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        {/* Left Column: Profile Card */}
        <Grid item>
          <ProfileCard />
        </Grid>

        {/* Right Column: Text */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Frontend Developer
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              gutterBottom
            >
              Alan Rich
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a software engineer with over five years of experience
              developing React applications. In my previous life, I was an
              organic chemist developing carbon-based organocatalytic reactions
              that helped reduce the use of toxic heavy metal catalysts in
              common industrial processes.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
            >
              Contact Me
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
