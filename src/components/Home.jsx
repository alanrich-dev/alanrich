import React from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import ProfileCard from "./ProfileCard";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "16px",
        width: "100%",
        paddingLeft: "48px",
        paddingRight: "48px",
        maxWidth: "2400px",
        margin: "0 auto",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "stretch",
          backgroundColor: theme.palette.primary.background,
          //borderRadius: "8px",
          overflow: "hidden",
          padding: "0",
        }}
      >
        <Grid container spacing={0} alignItems="stretch">
          {/* Left Column: Profile Card */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "100%",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <ProfileCard />
            </Box>
          </Grid>

          {/* Right Column Text*/}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                py: "64px",
                px: { xs: "16px", sm: "32px", md: "128px" },
                backgroundColor: theme.palette.primary.background,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
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
                organic chemist developing carbon-based organocatalytic
                reactions that helped reduce the use of toxic heavy metal
                catalysts in common industrial processes.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  textTransform: "uppercase",
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Home;
