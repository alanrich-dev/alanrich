import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function NavbarWrapper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const tabs = [
    { label: "About", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    {
      label: "Work Sample",
      path: "https://alanrich.dev/work-sample",
      external: true,
    },
    { label: "Github", path: "https://github.com/alanrich", external: true },
    { label: "Personal Interests", path: "/personal-interests" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar
      tabs={tabs}
      anchorEl={anchorEl}
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      isMobile={isMobile}
      theme={theme}
      location={location}
    />
  );
}

export default NavbarWrapper;
