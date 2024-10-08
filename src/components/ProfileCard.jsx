import React from "react";
import { Box, Typography, Paper } from "@mui/material";
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
            height: "auto", // for image scaling
            display: "block", // for image scaling
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          py: 2,
          px: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          flexGrow: "1",
        }}
      >
        <Typography variant="h7">General Information</Typography>
        <Box display="flex" alignItems="center" gap="8px">
          <EditIcon sx={{ color: theme.palette.icon.main }} />
          <Typography variant="body2" sx={{ color: theme.palette.icon.main }}>
            Name:{" "}
            <Typography
              component="span"
              sx={{ color: theme.palette.common.white }}
            >
              Alan Rich
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <LocationIcon sx={{ color: theme.palette.icon.main }} />
          <Typography variant="body2" sx={{ color: theme.palette.icon.main }}>
            Location:{" "}
            <Typography
              component="span"
              sx={{ color: theme.palette.common.white }}
            >
              Toulouse, France
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <StarIcon sx={{ color: theme.palette.icon.main }} />
          <Typography variant="body2" sx={{ color: theme.palette.icon.main }}>
            Date of Birth:{" "}
            <Typography
              component="span"
              sx={{ color: theme.palette.common.white }}
            >
              July 13, 1983
            </Typography>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="8px">
          <EmailIcon sx={{ color: theme.palette.icon.main }} />
          <Typography variant="body2" sx={{ color: theme.palette.icon.main }}>
            rich.alan@proton.me
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          sx={{ marginBottom: 0 }}
        >
          <PhoneIcon sx={{ color: theme.palette.icon.main }} />
          <Typography variant="body2" sx={{ color: theme.palette.icon.main }}>
            07 45 46 16 17
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
