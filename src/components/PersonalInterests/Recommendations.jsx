import React from "react";
import { Typography, Box, ImageList, ImageListItem } from "@mui/material";
import content from "../../assets/content";

const Recommendations = ({ recommendations, language }) => (
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
      {content[language].recommendationsTitle}
    </Typography>
    <ImageList variant="masonry" cols={3} gap={8}>
      {recommendations.map((rec, index) => (
        <ImageListItem key={index} sx={{ cursor: "pointer" }}>
          <a href={rec.url} target="_blank" rel="noopener noreferrer">
            <img
              src={rec.img}
              alt={rec.title}
              style={{
                width: "100%",
                height: language === "en" ? "180px" : "200px",
                objectFit: "cover",
              }}
            />
          </a>
          <Typography
            variant="body2"
            component="div"
            sx={{
              height: "40px",
              display: "flex",
            }}
          >
            {rec.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

export default Recommendations;
