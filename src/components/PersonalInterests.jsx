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
    "Wild Camping, especially in the Lofoten Islands of Norway.",
    "Pilates & Running, how I start and end each day.",
    "The Loeb Classical Library, the treasure trove of my personal library.",
    "Classical Philosophy, slowly working through the Platonic Dialogues.",
    "Literature, particularly the Russian novelists.",
    "Byzantine History, fascinated by its mysterious allure.",
    "Exploring Roman Ruins, my profile photo is from Herculaneum.",
    "French Comedy, currently addicted to Un Gars, une fille.",
    "Wine, Côte du Roussilon is my favorite appellation.",
  ];

  // French Interests
  const interestsFr = [
    "Camping Sauvage, surtout dans les îles Lofoten en Norvège.",
    "Pilates & Running, comment je commence et termine chaque journée.",
    "The Loeb Classical Library, le trésor de ma bibliothèque personnelle.",
    "Philosophie classique, parcourant lentement les dialogues platoniciens.",
    "Littérature, en particulier les romanciers russes.",
    "Histoire Byzantine, fasciné par son allure mystérieuse.",
    "Exploration des Ruines Romaines, ma photo de profil vient d'Herculanum.",
    "Comédie Française, actuellement accro à Un Gars, une fille.",
    "Le Vin, Côte du Roussillon est mon appellation préférée.",
  ];

  // YouTube Channels and Great Courses Recommendations
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
      img: "https://yt3.ggpht.com/5Kngq4vxIAdfM-ekLYIq9RHWSs3KdJhx1w3WjVaOcwVnFfnkTd04rIxeYyTc28K8KicI8J-kU_U=s176-c-k-c0x00ffffff-no-rj-mo",
      title: "Arte Documentaire",
      url: "https://www.youtube.com/watch?v=iJd5CJMJp7A",
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
      img: "https://medias.histoire-et-civilisations.com/api/v1/images/view/5f71d657d286c278077e1da4/width_1000/image.jpg",
      title: "The Story of American Freedom",
      url: "https://www.youtube.com/watch?v=fqgQ1B2Jjz0&list=PLdSDzmaJo0wlbIW2AXqWbbuh8KhrzyZ7I&index=1",
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
    {
      img: "https://i.ytimg.com/vi/HTm2kEAfo8o/maxresdefault.jpg",
      title: "The Brandenburg Concertos",
      url: "https://www.youtube.com/watch?v=NCPM8DEsvmc",
    },
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
              it is. My alone time is usually occupied with reading history,
              pondering philosophy, indulging in comedy or performing vigorous
              exercise. Being a well rounded, cultured and thoughtful individual
              is a priviledge of education that I fully embrace and strive to
              constantly develop. I recently took a sabbatical from work to do a
              grand tour of Europe. Whilst inter-railing, I visited 56 cities,
              where I viewed stunning works of art and civilization, spent
              nights under the stars (and the midnight sun) and walked in the
              footsteps of historical figures who have been transfixed in my
              imagination since I was an adolescent studying Latin and ancient
              Greek. It was a rejuvenating experience, a well needed break from
              the grind, and it revitalized my passion for my trade, software
              development.
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
                    ,
                    {normalPart.includes("Un Gars") ? (
                      <>
                        {" "}
                        currently addicted to <i>Un Gars, une fille</i>.
                      </>
                    ) : (
                      normalPart
                    )}
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

            {/* Recommendations Section */}
            <Typography variant="h4" component="h3" gutterBottom>
              Recommendations
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
                        height: "180px",
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
              développement logiciel.
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
                    ,
                    {normalPart.includes("Un Gars") ? (
                      <>
                        {" "}
                        actuellement accro à <i>Un Gars, une fille</i>.
                      </>
                    ) : (
                      normalPart
                    )}
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
            {/* Recommendations Section */}
            <Typography variant="h4" component="h3" gutterBottom>
              Recommendations
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
                        height: "200px",
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
          </>
        )}
      </Box>
    </Layout>
  );
}

export default PersonalInterests;
