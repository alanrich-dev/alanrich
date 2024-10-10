import React from "react";
import { Typography, Box, Button, Modal, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Layout from "../Layout";
import InterestsList from "./InterestsList";
import Recommendations from "./Recommendations";
import PhotoGallery from "./PhotoGallery";

function PersonalInterests({
  theme,
  language,
  content,
  interests,
  recommendations,
  images,
  visibleImages,
  handleViewMore,
  handleToggleLanguage,
  handleOpenModal,
  openModal,
  handleCloseModal,
  modalImage,
  selectedItem,
}) {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 8, sm: 10, md: 12 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
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
          visibleImages={visibleImages}
          handleViewMore={handleViewMore}
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
              maxWidth: "80%",
              maxHeight: "80%",
              overflow: "hidden",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.common.white,
              }}
            >
              <CloseIcon />
            </IconButton>
            {modalImage && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={modalImage}
                  alt="Modal"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12px",
                minHeight: "28px",
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
