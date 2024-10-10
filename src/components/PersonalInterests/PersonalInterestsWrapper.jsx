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
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 6); // Load 6 more images each time
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
        img: require("../../assets/photos/Company-Party.jpeg"),
        titleEn: "Research Innovations Inc. Annual Party, Washington DC",
        titleFr: "Fête annuelle de Research Innovations Inc., Washington DC",
      },
      {
        img: require("../../assets/photos/Manga-Museum-Krakow.jpeg"),
        titleEn: "Manggha Museum, Krakow",
        titleFr: "Musée Manggha, Cracovie",
      },
      {
        img: require("../../assets/photos/Lauterbrunnen.jpeg"),
        titleEn: "Lauterbrunnen, Switzerland",
        titleFr: "Lauterbrunnen, Suisse",
      },
      {
        img: require("../../assets/photos/Tropea-With-Brother.jpeg"),
        titleEn: "Chilling in Tropea with my brother.",
        titleFr: "Se détendre à Tropea avec mon frère.",
      },
      {
        img: require("../../assets/photos/Pilatus-Suisse.jpeg"),
        titleEn: "Pilatus, Switzerland",
        titleFr: "Pilatus, Suisse",
      },
      {
        img: require("../../assets/photos/Painting-In-Bed.png"),
        titleEn: "Taking an art lesson.",
        titleFr: "Prendre un cours de dessin.",
      },
      {
        img: require("../../assets/photos/Hiking-In-Lofoten.jpeg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Murren-1.jpg"),
        titleEn: "Reading in the Alps.",
        titleFr: "Lecture dans les Alps.",
      },
      {
        img: require("../../assets/photos/Christmas-2023.jpeg"),
        titleEn: "Christmas 2023, Chicago",
        titleFr: "Noël 2023, Chicago",
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
      {
        img: require("../../assets/photos/Night-Train-To-Syracuse.jpeg"),
        titleEn: "Night train to Syracuse",
        titleFr: "Train de nuit pour Syracuse",
      },
      {
        img: require("../../assets/photos/Reading-Count-Belisarius.jpeg"),
        titleEn: "Re-reading my favorite Novel, Count Belisarius.",
        titleFr: "Relisant mon roman préféré, le Comte Bélisaire.",
      },
      {
        img: require("../../assets/photos/Working-Remotely.jpeg"),
        titleEn: "Working Remotely, Krakow",
        titleFr: "Travail à distance, Cracovie",
      },
      {
        img: require("../../assets/photos/Cosenza.jpeg"),
        titleEn: "Cosenza, chilling in my grandfather's town.",
        titleFr: "Cosenza, chiller dans la ville de mon grand-père.",
      },
      {
        img: require("../../assets/photos/Yoga.png"),
        titleEn: "Pre-run yoga",
        titleFr: "Yoga avant la course",
      },
      {
        img: require("../../assets/photos/Tropea-1.jpg"),
        titleEn: "Tropea, Italy",
        titleFr: "Tropea, Italy",
      },
      {
        img: require("../../assets/photos/Tropea-2.png"),
        titleEn: "Tropea, Italy",
        titleFr: "Tropea, Italy",
      },
      {
        img: require("../../assets/photos/Rome.png"),
        titleEn: "Rome, Italy",
        titleFr: "Rome, Italy",
      },
      {
        img: require("../../assets/photos/Lofoten-2.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-3.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-4.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-5.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-6.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Lofoten-7.jpg"),
        titleEn: "Lofoten Islands, Norway",
        titleFr: "Îles Lofoten, Norvège",
      },
      {
        img: require("../../assets/photos/Luzern.png"),
        titleEn: "Luzern, Switzerland",
        titleFr: "Luzern, Suisse",
      },
      {
        img: require("../../assets/photos/Murren-1.jpg"),
        titleEn: "Murren, Switzerland",
        titleFr: "Murren, Suisse",
      },
      {
        img: require("../../assets/photos/Naples-1.jpg"),
        titleEn: "Naples, Italy",
        titleFr: "Naples, Italy",
      },
      {
        img: require("../../assets/photos/Matera-1.png"),
        titleEn: "Matera, Italy",
        titleFr: "Matera, Italy",
      },
      {
        img: require("../../assets/photos/Syracuse-1.jpg"),
        titleEn: "Syracuse, Italy",
        titleFr: "Syracuse, Italy",
      },
      {
        img: require("../../assets/photos/Interrailing.jpg"),
        titleEn: "Austrian Alps",
        titleFr: "Alpes Autrichiennes",
      },
      {
        img: require("../../assets/photos/Szimpla-Kert.jpg"),
        titleEn: "Szimpla Kert, Budapest. My favorite bar in Europe.",
        titleFr: "Szimpla Kert, Budapest. Mon bar préféré en Europe",
      },
      {
        img: require("../../assets/photos/Vienna-Library.jpg"),
        titleEn: "Osterreichische Nationalbibliothek, Vienna",
        titleFr: "Osterreichische Nationalbibliothek, Vienne",
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
