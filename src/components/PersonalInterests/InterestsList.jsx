import React from "react";
import { Typography, Box } from "@mui/material";
import content from "../../assets/content";

const InterestsList = ({ interests, language }) => {
  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {content[language].interestsTitle}
      </Typography>
      <ul>
        {interests.map((interest, index) => {
          const { bold, normal } = interest[language];
          return (
            <li key={index}>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: "bold" }}
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
                normal
              )}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default InterestsList;
