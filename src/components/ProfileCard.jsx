import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import profilePhoto from "../assets/profile-photo.png";
import { useTheme } from "@mui/material/styles";

function ProfileCard() {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        // borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
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

      {/* Text Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "#FFFFFF",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          General Information
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> Alan Rich
        </Typography>
        <Typography variant="body1">
          <strong>Date of Birth:</strong> July 13, 1983
        </Typography>
        <Typography variant="body1">
          <strong>Location:</strong> Toulouse, France
        </Typography>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
