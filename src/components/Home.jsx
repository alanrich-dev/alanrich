import React from "react";
import { Typography, Button } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import Layout from "./Layout";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Frontend Developer
      </Typography>
      <Typography variant="h2" component="h2" color="primary" gutterBottom>
        Alan Rich
      </Typography>
      <Typography variant="body1" paragraph>
        I'm a software engineer with over five years of experience developing
        React applications. In my previous life, I was an organic chemist
        developing carbon-based organocatalytic reactions that helped reduce the
        use of toxic heavy metal catalysts in common industrial processes.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "12px 24px",
          textTransform: "uppercase",
        }}
      >
        Contact Me
      </Button>
    </Layout>
  );
}

export default Home;
