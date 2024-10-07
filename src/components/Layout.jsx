import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useTheme } from "@mui/material/styles";

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
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

          {/* Right Column: Dynamic Content */}
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
              {children}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Layout;
