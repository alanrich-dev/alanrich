import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h2: {
      fontWeight: 900,
      fontSize: "5rem",
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: 900,
      fontSize: "2rem",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.7,
    },
    button: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#100F3A",
      selected: "#8583E1",
      background: "#F3F2F1",
    },
  },
});

export default theme;
