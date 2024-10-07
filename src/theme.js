import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    h2: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#2D2A82", // Adjust the primary color if needed
    },
    secondary: {
      main: "#8E44AD",
    },
  },
});

export default theme;
