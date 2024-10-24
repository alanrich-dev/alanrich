import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useTheme } from "@mui/material/styles";

const Layout = ({ children }) => {
  const theme = useTheme();
  const navbarHeight = 64;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        height: `calc(100vh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflowY: isMobile ? "auto" : "hidden", // Scroll entire layout only on mobile
      }}
    >
      {/* Left Column: Profile Card */}
      <Box
        sx={{
          width: { xs: "100%", md: "25%" }, // Full width on mobile, 25% on larger screens
          backgroundColor: theme.palette.primary.main,
          position: { xs: "static", md: "fixed" }, // Fixed on larger screens, static on mobile
          height: isMobile ? "auto" : `calc(100vh - ${navbarHeight}px)`,
          overflowY: isMobile ? "visible" : "visible", // Non-scrollable on all views
          order: isMobile ? 2 : 0, // Move to bottom on mobile view
          zIndex: isMobile ? "auto" : 1, // Ensure left column is below right column on desktop
        }}
      >
        <ProfileCard />
      </Box>

      {/* Right Column: Dynamic Content */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: "25%" }, // Only apply margin on larger screens when ProfileCard is on the left
          height: isMobile ? "auto" : `calc(100vh - ${navbarHeight}px)`,
          backgroundColor: theme.palette.background.default,
          paddingTop: { xs: 2, sm: 6, md: 6 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
          px: { xs: 4, sm: 4, md: 6, lg: 8 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: isMobile ? "visible" : "auto",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
