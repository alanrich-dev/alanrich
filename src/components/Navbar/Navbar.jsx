import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
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
          ALAN RICH
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {tabs.map((tab) => (
                <MenuItem
                  key={tab.path}
                  component={tab.external ? "a" : Link}
                  href={tab.external ? tab.path : undefined}
                  to={tab.external ? undefined : tab.path}
                  target={tab.external ? "_blank" : undefined}
                  rel={tab.external ? "noopener noreferrer" : undefined}
                  onClick={handleMenuClose}
                >
                  {tab.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
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
                component={tab.external ? "a" : Link}
                to={tab.external ? undefined : tab.path}
                href={tab.external ? tab.path : undefined}
                target={tab.external ? "_blank" : undefined}
                rel={tab.external ? "noopener noreferrer" : undefined}
                sx={{
                  px: { xs: 1, sm: 2, md: 3 },
                  minWidth: "auto",
                  color: theme.palette.common.white, // TODO: try theme.palette.text.secondary
                  textTransform: "none",
                  fontWeight: "bold", // TODO: no hardcoded font weight
                  ontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.selected,
                    color: theme.palette.common.white, // TODO: try theme.palette.text.secondary
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.selected,
                  },
                }}
              />
            ))}

            {/* CV Tab (direct link to PDF outside of SPA) */}
            <Tab
              label="Resumé"
              component="a"
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: { xs: 1, sm: 2, md: 3 },
                minWidth: "auto",
                color: theme.palette.common.white, // TODO: try theme.palette.text.secondary
                textTransform: "none",
                fontWeight: "bold", // TODO: no hardcoded font weight
                ontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.selected,
                  color: theme.palette.common.white, // TODO: try theme.palette.text.secondary
                },
                "&:hover": {
                  backgroundColor: theme.palette.primary.selected,
                },
              }}
            />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
