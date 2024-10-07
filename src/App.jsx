import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          {/* Additional routes can be added here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
