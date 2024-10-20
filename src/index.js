import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/700.css"; // Bold
import "@fontsource/inter/900.css"; // Extra Bold

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
