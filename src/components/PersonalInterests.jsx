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

function PersonalInterests() {
  const [language, setLanguage] = useState("en");
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const handleOpenModal = (image) => {
    setModalImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImage(null);
  };

  // English Interests
  const interests = [
    "Wild Camping, especially in Norway.",
    "Pilates & Running, how I start and end each day.",
    "The Loeb Classical Library, the treasure trove of my personal library.",
    "Classical Philosophy, slowly working through the Platonic Dialogues.",
    "Literature, particularly the Russian novelists.",
    "Byzantine History, fascinated by its mysterious allure.",
    "Exploring Roman ruins, my profile photo is from Herculaneum.",
    "French Comedy, currently addicted to Un Gars une fille.",
  ];

  // French Interests
  const interestsFr = [
    "Camping sauvage, surtout en Norvège.",
    "Pilates & course à pied, comment je commence et termine chaque journée.",
    "La Loeb Classical Library, le trésor de ma bibliothèque personnelle.",
    "Philosophie classique, parcourant lentement les dialogues platoniciens.",
    "Littérature, en particulier les romanciers russes.",
    "Histoire byzantine, fasciné par son allure mystérieuse.",
    "Exploration des ruines romaines, ma photo de profil vient d'Herculanum.",
    "Comédie française, actuellement accro à Un Gars une fille.",
  ];

  const images = [
    { img: "/images/photo1.jpg", title: "Photo 1" },
    { img: "/images/photo2.jpg", title: "Photo 2" },
    { img: "/images/photo3.jpg", title: "Photo 3" },
    // Add more images as needed
  ];

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 8, sm: 10, md: 12 }, // Increased paddingTop to prevent overlap with the button
          paddingBottom: { xs: 4, sm: 6, md: 8 }, // Added padding at the bottom
        }}
      >
        {/* Translation Button in Top Right */}
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

        {language === "en" ? (
          <>
            <Typography variant="h2" component="h2" gutterBottom>
              Personal Interests
            </Typography>
            {/* Introduction Text */}
            <Typography variant="body1" paragraph>
              The Romans had a concept of leisure that resonates well with my
              inclinations for how to spend my time outside of work,{" "}
              <i>Otium cum Dignitate</i>, leisure with dignity, the notion that
              leisure well spent is leisure that enriches the mind and soul. For
              me, the most enjoyable moments are those spent either laughing or
              furthering my understanding of the world and how it came to be as
              it is.
            </Typography>

            {/* Interests List */}
            <Typography variant="h4" component="h3" gutterBottom>
              My Interests
            </Typography>
            <ul>
              {interests.map((interest, index) => {
                const [boldPart, normalPart] = interest.split(",");
                return (
                  <li key={index}>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      {boldPart}
                    </Typography>
                    ,{normalPart}
                  </li>
                );
              })}
            </ul>

            {/* Photo Gallery */}
            <Typography variant="h4" component="h3" gutterBottom>
              Photo Gallery
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
              {images.map((item, index) => (
                <ImageListItem
                  key={index}
                  onClick={() => handleOpenModal(item.img)}
                  sx={{ cursor: "pointer" }}
                >
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

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
              </Box>
            </Modal>
          </>
        ) : (
          <>
            <Typography variant="h2" component="h2" gutterBottom>
              Intérêts Personnels
            </Typography>
            {/* Introduction Text in French */}
            <Typography variant="body1" paragraph>
              Les Romains avaient un concept de loisirs qui résonne bien avec
              mes inclinations sur la façon de passer mon temps en dehors du
              travail, <i>Otium cum Dignitate</i>, le loisir avec dignité, la
              notion que le loisir bien dépensé est un loisir qui enrichit
              l'esprit et l'âme. Pour moi, les moments les plus agréables sont
              ceux passés à rire ou à approfondir ma compréhension du monde et
              comment il est devenu ce qu'il est.
            </Typography>

            {/* Interests List in French */}
            <Typography variant="h4" component="h3" gutterBottom>
              Mes Intérêts
            </Typography>
            <ul>
              {interestsFr.map((interest, index) => {
                const [boldPart, normalPart] = interest.split(",");
                return (
                  <li key={index}>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ fontWeight: "bold" }}
                    >
                      {boldPart}
                    </Typography>
                    ,{normalPart}
                  </li>
                );
              })}
            </ul>

            {/* Photo Gallery */}
            <Typography variant="h4" component="h3" gutterBottom>
              Galerie de Photos
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
              {images.map((item, index) => (
                <ImageListItem
                  key={index}
                  onClick={() => handleOpenModal(item.img)}
                  sx={{ cursor: "pointer" }}
                >
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

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
              </Box>
            </Modal>
          </>
        )}
      </Box>
    </Layout>
  );
}

export default PersonalInterests;
