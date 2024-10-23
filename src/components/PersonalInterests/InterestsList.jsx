import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const InterestsList = ({ interests, language, personalInterestsContent }) => {
  const theme = useTheme();

  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        {personalInterestsContent[language].interestsTitle}
      </Typography>
      <ul>
        {interests.map((interest, index) => {
          const { bold, normal } = interest[language];
          return (
            <li key={index}>
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: "bold",
                  lineHeight: 1.8,
                  color: theme.palette.primary.main,
                }}
              >
                {bold}
              </Typography>
              ,{" "}
              {normal.includes("Un Gars") ? (
                <>
                  {language === "en"
                    ? "currently addicted to"
                    : "actuellement accro à"}{" "}
                  <i>Un Gars, une fille</i>.
                </>
              ) : (
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    color: theme.palette.grey[700],
                  }}
                >
                  {normal}
                </Typography>
              )}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default InterestsList;
