import React from "react";
import {
  Typography,
  Box,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import content from "../../assets/content";

const PhotoGallery = ({
  images,
  language,
  handleOpenModal,
  visibleImages,
  handleViewMore,
}) => {
  const theme = useTheme();
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
        {content[language].photoGalleryTitle}
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.slice(0, visibleImages).map((item, index) => (
          <ImageListItem
            key={index}
            onClick={() => handleOpenModal(item)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={language === "en" ? item.titleEn : item.titleFr}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {visibleImages < images.length && (
        <Button onClick={handleViewMore} variant="contained" sx={{ mt: 2 }}>
          View More Images
        </Button>
      )}
    </Box>
  );
};

export default PhotoGallery;
