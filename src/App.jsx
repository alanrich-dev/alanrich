import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
//import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
