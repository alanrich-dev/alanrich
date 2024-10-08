import React from "react";
import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useTheme } from "@mui/material/styles";

const Layout = ({ children }) => {
  const theme = useTheme();
  const navbarHeight = 64; //TODO: May need adjustment

  return (
    <Box
      sx={{
        position: "relative",
        height: `calc(100vh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`,
        display: "flex",
      }}
    >
      {/* Left Column: Profile Card */}

      <Box
        sx={{
          width: { xs: "100%", md: "25%" }, // This adjusts the width nicely
          backgroundColor: theme.palette.primary.main,
          position: { xs: "static", md: "fixed" },
          height: `calc(100vh - ${navbarHeight}px)`,
          overflowY: "auto",
        }}
      >
        <ProfileCard />
      </Box>

      {/* Right Column: Dynamic Content */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: "25%" },
          height: `calc(100vh - ${navbarHeight}px)`,
          overflowY: "auto", // Ensures only the right column with text is scrollable
          backgroundColor: theme.palette.primary.background,
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          flexGrow: 1,
          display: "flex",
          justifyContent: "center", // Center the text content horizontally
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
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
