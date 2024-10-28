import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import {
  Edit as EditIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import profilePhoto from "../../assets/photos/profile-photo.jpg";
import { useTheme } from "@mui/material/styles";

function ProfileCard() {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt="Profile"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          py: 3,
          px: { xs: 2, sm: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 1.8,
          flexGrow: "1",
        }}
      >
        {/* General Information text */}
        <Typography variant="h7">General Information</Typography>
        <Box
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "32px",
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <EditIcon sx={{ color: theme.palette.icon.main }} />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.common.white, fontWeight: "bold" }}
          >
            Name: Alan Rich
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "32px",
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <LocationIcon sx={{ color: theme.palette.icon.main }} />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.common.white, fontWeight: "bold" }}
          >
            Location: Paris, France
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "32px",
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <EmailIcon sx={{ color: theme.palette.icon.main }} />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.common.white, fontWeight: "bold" }}
          >
            rich.alan@proton.me
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "32px",
            p: 1, // Reduced padding
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <PhoneIcon sx={{ color: theme.palette.icon.main }} />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.common.white, fontWeight: "bold" }}
          >
            07 45 64 16 17
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#7F00FF",
            borderRadius: "32px",
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <LanguageIcon sx={{ color: theme.palette.icon.main }} />
          <Typography
            variant="body2"
            sx={{ color: theme.palette.common.white, fontWeight: "bold" }}
          >
            <a
              href="https://www.decouvrirpatrimoine.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.common.white,
                textDecoration: "none",
              }}
            >
              www.DecouvrirPatrimoine.fr
            </a>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
