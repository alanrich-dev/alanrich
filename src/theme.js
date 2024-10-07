import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h2: {
      fontWeight: 900,
      fontSize: "4rem",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 900,
      fontSize: "3.2rem",
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: 900,
      fontSize: "2rem",
      textTransform: "uppercase",
    },
    h6: {
      fontWeight: 900,
      fontSize: "1.8rem",
    },
    h7: {
      fontWeight: 900,
      fontSize: "1.4rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.2,
    },
    button: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#100F3A",
      secondary: "#2D2A82",
      highlight: "#8583E1",
      background: "#F3F2F1",
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    link: {
      main: "#2D2A82",
    },
    icon: {
      main: "#A7A6C2",
    },
    grey,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#2D2A82",
          textDecoration: "underline",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "12px 24px",
          textTransform: "uppercase",
        },
      },
    },
  },
});

export default theme;
