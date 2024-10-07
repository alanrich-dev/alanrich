import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import Layout from "./Layout";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  return (
    <Layout>
      <Box
        sx={{
          paddingTop: "96px",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Frontend Developer
        </Typography>
        <Typography variant="h2" component="h2" color="primary" gutterBottom>
          Alan Rich
        </Typography>
        <Typography variant="body1" paragraph>
          I'm a software engineer with over five years of experience developing
          React applications. In my previous career, I was an organic chemist
          developing carbon-based organocatalytic reactions that helped reduce
          the use of toxic heavy metal catalysts in common industrial processes.
          I have been living in France since 2021, working remotely for American
          corporations. I am currently seeking my first role with a French
          organization, motivated primarily by a desire to more fully integrate
          into society and relocate to Paris. I am excited to contribute my
          unique experiences and skills, while embracing new lessons that will
          support my ongoing professional development.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginTop: "24px",
            padding: "12px 24px",
            textTransform: "uppercase",
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Layout>
  );
}

export default Home;