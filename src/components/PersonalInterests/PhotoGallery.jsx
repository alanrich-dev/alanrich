import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import personalInterestsContent from "../../assets/content/personalInterestsContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = ({ personalPhotos, language, handleOpenModal }) => {
  const theme = useTheme();

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        {personalInterestsContent[language].photoGalleryTitle}
      </Typography>

      {/* Slider carousel */}
      <Slider {...settings}>
        {personalPhotos.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleOpenModal(item)}
            sx={{
              cursor: "pointer",
              padding: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "8px",
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={language === "en" ? item.titleEn : item.titleFr}
                loading="lazy"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PhotoGallery;
