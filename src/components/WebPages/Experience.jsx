import React, { useState } from "react";
import Timeline from "../ReuseableComponents/Timeline";
import Layout from "../ReuseableComponents/Layout";
import { Box } from "@mui/material";
import {
  workExperienceItemsEn,
  workExperienceItemsFr,
} from "../../assets/content/workExperienceItems";
import TranslationButton from "../ReuseableComponents/TranslationButton";

function Experience() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  // Headings in English and French
  const headingEn = "Where I've worked";
  const subheadingEn = "My Experience";

  const headingFr = "Où j'ai travaillé";
  const subheadingFr = "Mon Expérience";

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <TranslationButton
          language={language}
          handleToggleLanguage={handleToggleLanguage}
        />
        <Timeline
          heading={language === "en" ? headingEn : headingFr}
          subheading={language === "en" ? subheadingEn : subheadingFr}
          items={
            language === "en" ? workExperienceItemsEn : workExperienceItemsFr
          }
        />
      </Box>
    </Layout>
  );
}

export default Experience;
