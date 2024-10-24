import React, { useState } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import Layout from "../ReuseableComponents/Layout";
import {
  englishText,
  frenchText,
  workSampleEn,
  workSampleFr,
} from "../../assets/content/homePage";
import TranslationButton from "../ReuseableComponents/TranslationButton";
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

  const url = "https://www.decouvrirpatrimoine.fr";

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
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              pb: 0,
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: theme.palette.grey[700],
                }}
                dangerouslySetInnerHTML={{
                  __html: introductionContent.description,
                }}
              />
            </CardContent>
          </Card>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                mt: 4,
                boxShadow: 3,
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ color: theme.palette.primary.main }}
                >
                  {workSampleContent.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    mb: 2,
                  }}
                >
                  <Microlink
                    url={url}
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
                </Box>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: theme.palette.grey[700],
                    pt: 1,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: workSampleContent.description,
                  }}
                />
              </CardContent>
            </Card>
          </a>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
