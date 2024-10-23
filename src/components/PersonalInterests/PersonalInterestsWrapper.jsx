import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import recommendations from "../../assets/recommendations";
import content from "../../assets/content";
import interests from "../../assets/interests";
import PersonalInterests from "./PersonalInterests";

const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image.img;
  });
};

function PersonalInterestsWrapper() {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 6);
  };

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

  const images = useMemo(
    () => [
      {
        img: require("../../assets/photos/andalsnes-1.jpg"),
        titleEn: "Hiking in Åndalsnes, Norway.",
        titleFr: "Randonnée à Åndalsnes, Norvège.",
      },
      {
        img: require("../../assets/photos/Company-Party.jpeg"),
        titleEn: "Research Innovations Inc. Annual Party, Washington DC",
        titleFr: "Fête annuelle de Research Innovations Inc., Washington DC",
      },
      {
        img: require("../../assets/photos/Working-Remotely.jpeg"),
        titleEn: "Working Remotely, Krakow",
        titleFr: "Travail à distance, Cracovie",
      },
      {
        img: require("../../assets/photos/Lofoten-6.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/kvalvika-beach-2.jpg"),
        titleEn: "Hiking Mount Ryten, Norway",
        titleFr: "À mi-chemin vers le sommet du Mont Ryten, Norvège",
      },
      {
        img: require("../../assets/photos/Geirangerfjord-1.jpg"),
        titleEn: "Geirangerfjord, Norway",
        titleFr: "Geirangerfjord, Norvège",
      },
      {
        img: require("../../assets/photos/Herculaneum-1.jpg"),
        titleEn: "Herculaneum, Italy",
        titleFr: "Herculaneum, Italie",
      },
      {
        img: require("../../assets/photos/Herculaneum-2.jpg"),
        titleEn: "Herculaneum, Italy",
        titleFr: "Herculaneum, Italie",
      },
      {
        img: require("../../assets/photos/Matera-1.png"),
        titleEn: "Matera, Italy",
        titleFr: "Matera, Italie",
      },
      {
        img: require("../../assets/photos/kvalvika-beach.jpg"),
        titleEn: "Kvalvika Beach, Norway",
        titleFr: "Plage de Kvalvika, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-9.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Reading-In-The-Alps.jpg"),
        titleEn: "Reading in the Alps.",
        titleFr: "Lecture dans les Alps.",
      },
      {
        img: require("../../assets/photos/andalsnes.jpg"),
        titleEn: "Åndalsnes, Norway",
        titleFr: "Åndalsnes, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-8.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Murren-1.jpg"),
        titleEn: "Murren, Switzerland",
        titleFr: "Murren, Suisse",
      },
      {
        img: require("../../assets/photos/Szimpla-Kert.jpg"),
        titleEn: "Szimpla Kert, Budapest. My favorite bar in Europe.",
        titleFr: "Szimpla Kert, Budapest. Mon bar préféré en Europe",
      },
      {
        img: require("../../assets/photos/trail-running.jpg"),
        titleEn: "Trail running in Hellesylt, Norway",
        titleFr: "Course de trail à Hellesylt, Norvège",
      },
      {
        img: require("../../assets/photos/Pilatus-Suisse.jpeg"),
        titleEn: "Pilatus, Switzerland",
        titleFr: "Pilatus, Suisse",
      },
      {
        img: require("../../assets/photos/Manga-Museum-Krakow.jpeg"),
        titleEn: "Manggha Museum, Krakow",
        titleFr: "Musée Manggha, Cracovie",
      },
      {
        img: require("../../assets/photos/Naples-Library.jpeg"),
        titleEn: "Naples, I love working from Fancy Libraries.",
        titleFr: "Naples, j'adore travailler dans de belles bibliothèques.",
      },
      {
        img: require("../../assets/photos/Naples-Library-1.jpg"),
        titleEn: "Naples, I love working from Fancy Libraries.",
        titleFr: "Naples, j'adore travailler dans de belles bibliothèques.",
      },
    ],
    []
  );

  useEffect(() => {
    preloadImages(images);
  }, [images]);

  return (
    <PersonalInterests
      theme={theme}
      language={language}
      content={content}
      interests={interests}
      recommendations={recommendations}
      images={images}
      visibleImages={visibleImages}
      handleViewMore={handleViewMore}
      handleToggleLanguage={handleToggleLanguage}
      handleOpenModal={handleOpenModal}
      openModal={openModal}
      handleCloseModal={handleCloseModal}
      modalImage={modalImage}
      selectedItem={selectedItem}
    />
  );
}

export default PersonalInterestsWrapper;
