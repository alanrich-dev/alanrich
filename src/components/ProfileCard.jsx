import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import {
  Edit as EditIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import profilePhoto from "../assets/profile-photo.png";
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
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt="Profile"
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "#FFFFFF",
          paddingY: "48px",
          paddingLeft: "72px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          flexGrow: "1",
        }}
      >
        <Typography variant="h6">General Information</Typography>
        <Box display="flex" alignItems="center" gap="8px">
          <EditIcon sx={{ color: "#A7A6C2" }} />
          <Typography variant="body1" sx={{ color: "#A7A6C2" }}>
            Name:{" "}
            <Typography component="span" sx={{ color: "#FFFFFF" }}>
              Alan Rich
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <LocationIcon sx={{ color: "#A7A6C2" }} />
          <Typography variant="body1" sx={{ color: "#A7A6C2" }}>
            Location:{" "}
            <Typography component="span" sx={{ color: "#FFFFFF" }}>
              Toulouse, France
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <StarIcon sx={{ color: "#A7A6C2" }} />
          <Typography variant="body1" sx={{ color: "#A7A6C2" }}>
            Date of Birth:{" "}
            <Typography component="span" sx={{ color: "#FFFFFF" }}>
              July 13, 1983
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <EmailIcon sx={{ color: "#A7A6C2" }} />
          <Typography variant="body1" sx={{ color: "#A7A6C2" }}>
            rich.alan@proton.me
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          sx={{ marginBottom: 0 }}
        >
          <PhoneIcon sx={{ color: "#A7A6C2" }} />
          <Typography variant="body1" sx={{ color: "#A7A6C2" }}>
            07 45 46 16 17
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
