import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Layout from "./Layout";
import {
  englishText,
  frenchText,
  workSampleEn,
  workSampleFr,
} from "../assets/content/homePage";
import TranslationButton from "./TranslationButton";
import Microlink from "@microlink/react";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const introductionContent = language === "en" ? englishText : frenchText;
  const workSampleContent = language === "en" ? workSampleEn : workSampleFr;

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 2, sm: 4, md: 6 },
          paddingBottom: { xs: 2, sm: 2, md: 2 },
        }}
      >
        <TranslationButton
          language={language}
          handleToggleLanguage={handleToggleLanguage}
        />
        <Box
          sx={{
            position: "relative",
            paddingTop: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {introductionContent.title}
          </Typography>
          <Typography variant="h2" component="h2" color="primary" gutterBottom>
            {introductionContent.name}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              paddingBottom: 2,
              color: theme.palette.grey[700],
            }}
            dangerouslySetInnerHTML={{
              __html: introductionContent.description,
            }}
          />

          <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ pt: 4 }}>
              {workSampleContent.title}
            </Typography>
            <Microlink
              url="https://www.decouvrirpatrimoine.fr"
              size="large"
              setData={(data) => ({
                ...data,
                title:
                  "Découvrir Patrimoine | Explorez le Patrimoine Culturel Français",
                description:
                  "Explorez et visualez le patrimoine culturel français avec les données officielles du Ministère de la Culture. Cartes interactives, tableaux de synthèse, et plus encore.",
                image: {
                  url: "https://www.decouvrirpatrimoine.fr/images/dashboard.png",
                },
                url: "http://www.decouvrirpatrimoine.fr",
              })}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: theme.palette.grey[700],
                pt: 2,
              }}
              dangerouslySetInnerHTML={{
                __html: workSampleContent.description,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
