import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Home from "./components/WebPages/Home";
import Education from "./components/WebPages/Education";
import Experience from "./components/WebPages/Experience";
import Portfolio from "./components/WebPages/Portfolio";
import PersonalInterestsWrapper from "./components/WebPages/PersonalInterests/PersonalInterestsWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/personal-interests"
            element={<PersonalInterestsWrapper />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
