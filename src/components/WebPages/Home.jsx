import React, { useState } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import Layout from "../ReuseableComponents/Layout";
import { englishText, frenchText } from "../../assets/content/homePage";
import TranslationButton from "../ReuseableComponents/TranslationButton";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const introductionContent = language === "en" ? englishText : frenchText;

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
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
