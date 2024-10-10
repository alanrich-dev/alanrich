import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Modal,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Layout from "./Layout";
import { useTheme } from "@mui/material/styles";
import recommendations from "../assets/recommendations";
import content from "../assets/content";
import interests from "../assets/interests";

function PersonalInterests() {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Toggle between English and French
  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  // Open Modal with selected image
  const handleOpenModal = (item) => {
    setModalImage(item.img);
    setSelectedItem(item);
    setOpenModal(true);
  };

  // Close Modal and reset selected item
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImage(null);
    setSelectedItem(null);
  };

  const images = [
    {
      img: require("../assets/photos/Manga-Museum-Krakow.jpeg"),
      titleEn: "Manggha Museum, Krakow",
      titleFr: "Musée Manggha, Cracovie",
    },
    {
      img: require("../assets/photos/Company-Party.jpeg"),
      titleEn: "Research Innovations Inc. Annual Party, Washington DC",
      titleFr: "Fête annuelle de Research Innovations Inc., Washington DC",
    },
    {
      img: require("../assets/photos/Lauterbrunnen.jpeg"),
      titleEn: "Lauterbrunnen, Switzerland",
      titleFr: "Lauterbrunnen, Suisse",
    },
    {
      img: require("../assets/photos/Cosenza.jpeg"),
      titleEn: "Cosenza, chilling in my grandfather's town",
      titleFr: "Cosenza, chiller dans la ville de mon grand-père",
    },
    {
      img: require("../assets/photos/Pilatus-Suisse.jpeg"),
      titleEn: "Pilatus, Switzerland",
      titleFr: "Pilatus, Suisse",
    },
    {
      img: require("../assets/photos/Tropea-With-Brother.jpeg"),
      titleEn: "Chilling in Tropea with my brother",
      titleFr: "Se détendre à Tropea avec mon frère",
    },
    {
      img: require("../assets/photos/Hiking-In-Lofoten.jpeg"),
      titleEn: "Lofoten Islands, Norway",
      titleFr: "Îles Lofoten, Norvège",
    },
    {
      img: require("../assets/photos/Christmas-2024.jpeg"),
      titleEn: "Christmas 2024, Chicago",
      titleFr: "Noël 2024, Chicago",
    },
    {
      img: require("../assets/photos/Naples-Library.jpeg"),
      titleEn: "Naples, I love working from Fancy Libraries",
      titleFr: "Naples, j'adore travailler dans de belles bibliothèques",
    },
    {
      img: require("../assets/photos/Night-Train-To-Syracuse.jpeg"),
      titleEn: "Night train to Syracuse",
      titleFr: "Train de nuit pour Syracuse",
    },
    {
      img: require("../assets/photos/Reading-Count-Belisarius.jpeg"),
      titleEn: "Re-reading my favorite Novel, Count Belisarius",
      titleFr: "Relisant mon roman préféré, le Comte Bélisaire",
    },
    {
      img: require("../assets/photos/Working-Remotely.jpeg"),
      titleEn: "Working Remotely, Krakow",
      titleFr: "Travail à distance, Cracovie",
    },
    {
      img: require("../assets/photos/Luzern.jpeg"),
      titleEn: "Luzern, Switzerland",
      titleFr: "Luzern, Suisse",
    },
    {
      img: require("../assets/photos/Painting-In-Bed.jpeg"),
      titleEn: "Taking an art lesson",
      titleFr: "Prendre un cours de dessin",
    },
    {
      img: require("../assets/photos/Tropea-Beach.jpeg"),
      titleEn: "Lofoten Islands, Norway",
      titleFr: "Îles Lofoten, Norvège",
    },
    {
      img: require("../assets/photos/Rome.JPEG"),
      titleEn: "Rome, Italy",
      titleFr: "Rome, Italy",
    },
  ];

  const InterestsList = ({ interests, language }) => (
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
        {" "}
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
                  {" "}
                  currently addicted to <i>Un Gars, une fille</i>.
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

  const PhotoGallery = ({ images, language, handleOpenModal }) => (
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
        {content[language].photoGalleryTitle}
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item, index) => (
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
    </Box>
  );

  const Recommendations = ({ recommendations, language }) => (
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
                  height: language === "en" ? "180px" : "200px", // Adjusted height based on language because french can be more verbose
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

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 8, sm: 10, md: 12 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={handleToggleLanguage}
          >
            {language === "en"
              ? "Traduire en français"
              : "Translate to English"}
          </Button>
        </Box>

        {/* Heading and Subheading */}
        <Box mb={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.secondary,
              paddingTop: { xs: 4, sm: 4, md: 4 },
            }}
          >
            {content[language].heading}
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              color: theme.palette.primary.main,
            }}
          >
            {content[language].subheading}
          </Typography>
        </Box>

        {/* Introduction Text */}
        <Box mb={4}>
          <Typography
            variant="body1"
            paragraph
            dangerouslySetInnerHTML={{ __html: content[language].introduction }}
          />
        </Box>

        {/* Interests List */}
        <InterestsList interests={interests} language={language} />

        {/* Photo Gallery */}
        <PhotoGallery
          images={images}
          language={language}
          handleOpenModal={handleOpenModal}
        />

        {/* Modal for Image */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "auto",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            {modalImage && (
              <img
                src={modalImage}
                alt="Modal"
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem", // Explicitly set font size for control
              }}
            >
              {selectedItem &&
                (language === "en"
                  ? selectedItem.titleEn
                  : selectedItem.titleFr)}
            </Typography>
          </Box>
        </Modal>

        {/* Recommendations Section */}
        <Recommendations
          recommendations={recommendations}
          language={language}
        />
      </Box>
    </Layout>
  );
}

export default PersonalInterests;
