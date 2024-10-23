import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Layout from "./Layout";
import { englishText, frenchText } from "../assets/content/homePage";
import Microlink from "@microlink/react";

function Home() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const content = language === "en" ? englishText : frenchText;

  return (
    <Layout>
      <Box
        sx={{
          paddingTop: { xs: 4, sm: 6, md: 8 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {content.title}
        </Typography>
        <Typography variant="h2" component="h2" color="primary" gutterBottom>
          {content.name}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            paddingBottom: 2,
          }}
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
        <Button variant="contained" onClick={handleToggleLanguage}>
          {language === "en" ? "Traduire en français" : "Translate to English"}
        </Button>
        <Microlink url="https://www.decouvrirpatrimoine.fr" />
      </Box>
    </Layout>
  );
}

export default Home;
