import React from "react";
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const location = useLocation();
  const theme = useTheme(); // Access the theme

  const tabs = [
    { label: "About", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Work Sample", path: "/worksample" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main, boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Name Section */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
            fontFamily: "Inter, Arial, sans-serif",
            color: "#FFFFFF",
          }}
        >
          AlanRich.CV
        </Typography>

        {/* Navigation */}
        <Tabs
          value={location.pathname !== "/" ? location.pathname : false}
          textColor="inherit"
          indicatorColor="none"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.path}
              label={tab.label}
              value={tab.path}
              component={Link}
              to={tab.path}
              sx={{
                paddingX: 3,
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: "bold",
                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.selected,
                  color: "#FFFFFF",
                },
                "&:hover": {
                  backgroundColor: theme.palette.primary.selected,
                },
              }}
            />
          ))}

          {/* CV Tab (direct link to PDF outside of SPA) */}
          <Tab
            label="CV"
            component="a"
            href="/alanRICHCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              paddingX: 3,
              color: "#FFFFFF",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: theme.palette.primary.selected,
              },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
