import React, { useState } from "react";
import Timeline from "./Timeline";
import Layout from "./Layout";
import { Button, Box } from "@mui/material";
import {
  workExperienceItemsEn,
  workExperienceItemsFr,
} from "../assets/content/workExperienceItems";

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
          paddingTop: { xs: 8, sm: 10, md: 12 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {/* Translation Button in Top Right */}
        <Box
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
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
