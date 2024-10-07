import React from "react";
import { Typography, Link } from "@mui/material";
import Timeline from "./Timeline"; // this path is not recognized but I have placed the Timeline file in the same folder as the Education file

function Education() {
  const educationItems = [
    {
      date: "2004 - 2008",
      title: "Benedictine University",
      subtitle: "Bachelor of Science",
      description: (
        <>
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            Thesis:
          </Typography>{" "}
          “A One-Pot Asymmetric Robinson Annulation in the Organic Chemistry
          Majors Laboratory”,{" "}
          <Link
            href="https://doi.org/10.1021/ed085p1531"
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal of Chemical Education, 85 (2008) DOI:10.1021/ed085p1531
          </Link>
        </>
      ),
    },
    {
      date: "2009 - 2010",
      title: "Cours de Civilisation Française de la Sorbonne",
      subtitle: "French Language and Civilisation",
      description:
        "Language and French civilisation studies through a program administered by La Fondation Robert de Sorbon.",
    },
    {
      date: "2013 - 2014",
      title: "Illinois Institute of Technology",
      subtitle: "Molecular Biology (PhD Program)",
      description:
        "I was briefly enrolled in a doctoral program but decided that academic research was not my calling. During my studies I performed genomic analysis of human colorectal cancer cells affected by microsatellite mutations in the BaxΔ2 gene.",
    },
  ];

  return (
    <Timeline
      heading="What I've studied"
      subheading="My Education"
      items={educationItems}
    />
  );
}

export default Education;
