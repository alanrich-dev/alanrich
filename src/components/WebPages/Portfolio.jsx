import React, { useState } from "react";
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import Microlink from "@microlink/react";
import Layout from "../ReuseableComponents/Layout";
import PropTypes from "prop-types";
import { workSampleEn, workSampleFr } from "../../assets/content/homePage";

const Portfolio = () => {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");
  const workSampleContent = language === "en" ? workSampleEn : workSampleFr;
  const url = "https://www.decouvrirpatrimoine.fr";

  return (
    <Layout>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ color: theme.palette.primary.main, pb: 1 }}
      >
        {workSampleContent.title}
      </Typography>
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
                    url: "https://www.decouvrirpatrimoine.fr/images/dashboard-1.png",
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
    </Layout>
  );
};

Portfolio.propTypes = {
  url: PropTypes.string.isRequired,
  workSampleContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Portfolio;
