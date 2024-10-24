/*import React from "react";
import { Button, Box } from "@mui/material";

const TranslationButton = ({ language, handleToggleLanguage }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <Button variant="contained" onClick={handleToggleLanguage}>
        {language === "en" ? "Traduire en Français" : "Translate to English"}
      </Button>
    </Box>
  );
};

export default TranslationButton;
*/
import React from "react";
import { Button, Box } from "@mui/material";

const TranslationButton = ({ language, handleToggleLanguage }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <Button
        variant="contained"
        onClick={handleToggleLanguage}
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "12px 24px",
          textTransform: "uppercase",
          borderRadius: "32px",
          transition: "background 0.3s ease",
          background: "#7F00FF",
          "&:hover": {
            background:
              language === "en"
                ? "linear-gradient(90deg, #002654 33%, #FFFFFF 33%, #FFFFFF 66%, #EF4135 66%)" // French flag gradient
                : "#d6b4fc",
            color: language === "fr" ? "white" : "grey",
          },
        }}
      >
        {language === "en" ? "Traduire en Français" : "Translate to English"}
      </Button>
    </Box>
  );
};

export default TranslationButton;
