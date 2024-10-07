import React from "react";
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const tabs = [
    { label: "About", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Work Sample", path: "/worksample" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2D2A82", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Name Section */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
            fontFamily: "Roboto, sans-serif",
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
                  backgroundColor: "#8E44AD",
                  color: "#FFFFFF",
                },
                "&:hover": {
                  backgroundColor: "#4A406E",
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
                backgroundColor: "#4A406E",
              },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
