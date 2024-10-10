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

  const content = {
    en: {
      heading: "How I spend my free time",
      subheading: "Personal Interests",
      introduction: `The Romans had a concept of leisure that resonates well with my
        inclinations for how to spend my time outside of work, <i>Otium cum Dignitate</i>,
        leisure with dignity, the notion that leisure well spent is leisure that
        enriches the mind and soul. For me, the most enjoyable moments are those
        spent either laughing or furthering my understanding of the world and how it
        came to be as it is. My alone time is usually occupied with reading history,
        pondering philosophy, indulging in comedy or performing vigorous
        exercise. Being a well rounded, cultured and thoughtful individual
        is a privilege of education that I fully embrace and strive to
        constantly develop. I recently took a sabbatical from work to do a
        grand tour of Europe. Whilst inter-railing, I visited 56 cities,
        where I viewed stunning works of art and civilization, spent
        nights under the stars (and the midnight sun) and walked in the
        footsteps of historical figures who have been transfixed in my
        imagination since I was an adolescent studying Latin and ancient
        Greek. It was a rejuvenating experience, a well needed break from
        the grind, and it revitalized my passion for my trade, software
        development.`,
      interestsTitle: "My Interests",
      photoGalleryTitle: "Photo Gallery",
      recommendationsTitle: "Media Recommendations",
    },
    fr: {
      heading: "Mes Passe-temps",
      subheading: "Intérêts Personnels",
      introduction: `Les Romains avaient un concept de loisirs qui résonne bien avec
        mes inclinations sur la façon de passer mon temps en dehors du
        travail, <i>Otium cum Dignitate</i>, le loisir avec dignité,
        l'idée que le loisir bien utilisé est celui qui enrichit l'esprit
        et l'âme. Pour moi, les moments les plus agréables sont ceux
        passés à rire ou à approfondir ma compréhension du monde et de la
        manière dont il est devenu ce qu'il est aujourd'hui. Mon temps
        seul est généralement occupé par la lecture d'histoire, la
        réflexion philosophique, l'indulgence dans la comédie ou
        l'exercice physique intense. Être un individu cultivé, réfléchi et
        polyvalent est un privilège de l'éducation que j'embrasse
        pleinement et que je m'efforce constamment de développer. J'ai
        récemment pris un congé sabbatique pour faire un grand tour de
        l'Europe. Pendant mon voyage inter-railing, j'ai visité 56 villes,
        où j'ai admiré des œuvres d'art et de civilisation magnifiques,
        passé des nuits sous les étoiles (et le soleil de minuit) et
        marché dans les traces de figures historiques qui ont captivé mon
        imagination depuis que j'étais adolescent, étudiant le latin et le
        grec ancien. Ce fut une expérience revigorante, une pause bien
        méritée du quotidien, qui a ravivé ma passion pour mon métier, le
        développement logiciel.`,
      interestsTitle: "Mes Intérêts",
      photoGalleryTitle: "Galerie de Photos",
      recommendationsTitle: "Media Recommendations",
    },
  };

  const interests = [
    {
      en: {
        bold: "Wild Camping",
        normal: "especially in the Lofoten Islands of Norway.",
      },
      fr: {
        bold: "Camping Sauvage",
        normal: "surtout dans les îles Lofoten en Norvège.",
      },
    },
    {
      en: {
        bold: "Pilates & Running",
        normal: "how I start and end each day.",
      },
      fr: {
        bold: "Pilates & Running",
        normal: "comment je commence et termine chaque journée.",
      },
    },
    {
      en: {
        bold: "The Loeb Classical Library",
        normal: "the treasure trove of my personal library.",
      },
      fr: {
        bold: "The Loeb Classical Library",
        normal: "le trésor de ma bibliothèque personnelle.",
      },
    },
    {
      en: {
        bold: "Classical Philosophy",
        normal: "slowly working through the Platonic Dialogues.",
      },
      fr: {
        bold: "Philosophie classique",
        normal: "parcourant lentement les dialogues platoniciens.",
      },
    },
    {
      en: { bold: "Literature", normal: "particularly the Russian novelists." },
      fr: {
        bold: "Littérature",
        normal: "en particulier les romanciers russes.",
      },
    },
    {
      en: {
        bold: "Byzantine History",
        normal: "fascinated by its mysterious allure.",
      },
      fr: {
        bold: "Histoire Byzantine",
        normal: "fasciné par son allure mystérieuse.",
      },
    },
    {
      en: {
        bold: "Exploring Roman Ruins",
        normal: "my profile photo is from Herculaneum.",
      },
      fr: {
        bold: "Exploration des Ruines Romaines",
        normal: "ma photo de profil vient d'Herculanum.",
      },
    },
    {
      en: {
        bold: "French Comedy",
        normal: "currently addicted to Un Gars, une fille.",
      },
      fr: {
        bold: "Comédie Française",
        normal: "actuellement accro à Un Gars, une fille.",
      },
    },
    {
      en: {
        bold: "Wine",
        normal: "Côte du Roussillon is my favorite appellation.",
      },
      fr: {
        bold: "Le Vin",
        normal: "Côte du Roussillon est mon appellation préférée.",
      },
    },
  ];

  const recommendations = [
    {
      img: "https://i1.ytimg.com/vi/Rc0K4WhNOvY/hqdefault.jpg",
      title: "The Great Minds of the Western Intellectual Tradition",
      url: "https://www.youtube.com/@dr.michaelsugrue",
    },
    {
      img: "https://secureimages.teach12.com/tgc/images/m2/courses/high/463.jpg",
      title: "Plato, Socrates, and the Dialogues",
      url: "https://www.thegreatcourses.com/courses/plato-socrates-and-the-dialogues",
    },
    {
      img: "https://www.thoughtco.com/thmb/jnCNuKybG4olQgB-z2SsX7LKEsA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-587491038-5b3162470e23d90036a05408.jpg",
      title: "The Ottoman Empire",
      url: "https://www.thegreatcourses.com/courses/the-ottoman-empire",
    },
    {
      img: "https://yt3.googleusercontent.com/nrkCjT2S0wgFLymgDvUYF6DEXS_lpN99c499kTQm6YTIkSN_FthRf9JIQHg7OMI8SKDU3Et0JA=s160-c-k-c0x00ffffff-no-rj",
      title: "The Rest is History",
      url: "https://www.youtube.com/channel/UCUYK0BJZF3yNb2fw1EdAXUQ",
    },
    {
      img: "https://i.ytimg.com/vi/pl52AsS-j1c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC7gu8IAwstrE2BaHwFXiPuo4W3DQ",
      title: "Books That Have Made History",
      url: "https://www.youtube.com/playlist?list=PLFBPgxvkodCqK3LDnp1HcdyGJ9wTh8Y_r",
    },
    {
      img: "https://yt3.googleusercontent.com/ytc/AIdro_l_DnztzuTluEh4JaE7eENqzeOdqs6aUxgkb7C4kdpWnY8=s160-c-k-c0x00ffffff-no-rj",
      title: "Un Gars, une fille",
      url: "https://www.youtube.com/@UngarsunefilleOfficiel",
    },
    {
      img: "https://i.ytimg.com/vi/sq5JhW55uGI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3gOAAugCigIMCAAQARhlIGUoZTAP&rs=AOn4CLATiu4Gy4ywn6SUxosDZKY_s_fV-Q",
      title: "The Lives of Famous Greeks & Romans",
      url: "https://www.youtube.com/@iandespalo2949/videos",
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1200x675/p0g66bwh.jpg",
      title: "I, Claudius",
      url: "https://www.youtube.com/watch?v=Z7XRX1UBooQ&list=PLlwzDYw6zp2D6DxLR8zGz1i_7764DYSVQ",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Alcibades_being_taught_by_Socrates%2C_Fran%C3%A7ois-Andr%C3%A9_Vincent.jpg",
      title: "Alcibiades",
      url: "https://www.youtube.com/watch?v=APWamijL6xc",
    },
  ];

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
      img: require("../assets/photos/Woodshop.jpeg"),
      titleEn: "Sometimes I like working with tools",
      titleFr: "Parfois, j'aime travailler avec des outils",
    },
    {
      img: require("../assets/photos/Working-Remotely.jpeg"),
      titleEn: "Working Remotely, Krakow",
      titleFr: "Travail à distance, Cracovie",
    },
  ];

  const InterestsList = ({ interests, language }) => (
    <Box mb={4}>
      <Typography variant="h4" component="h3" gutterBottom>
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
      <Typography variant="h4" component="h3" gutterBottom>
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
      <Typography variant="h4" component="h3" gutterBottom>
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
