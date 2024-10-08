import React from "react";
import Layout from "./Layout";
import Timeline from "./Timeline";
import { Typography } from "@mui/material";

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
          <Typography
            component="a"
            href="https://doi.org/10.1021/ed085p1531"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "inherit", textDecoration: "underline" }}
          >
            Journal of Chemical Education, 85 (2008) DOI:10.1021/ed085p1531
          </Typography>
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
        "I was briefly enrolled in a doctoral program but decided that academic research was not my calling. During my studies, I performed genomic analysis of human colorectal cancer cells affected by microsatellite mutations in the BaxΔ2 gene.",
    },
  ];

  const presentationItems = [
    {
      date: "October 17, 2008",
      title:
        "Asymmetric Organocatalysis: Conjugate Addition Reactions & Robinson Annulations",
      subtitle:
        "Science and Sociability Seminar, Benedictine University, Lisle, Illinois",
    },
    {
      date: "April 7, 2008",
      title: "Synthesis of Organocatalysts for Asymmetric Robinson Annulations",
      subtitle:
        "235th ACS Spring National Meeting, Division of Chemical Education, New Orleans, Louisiana",
      description: "Poster ID: 1163539",
    },
    {
      date: "March 29, 2007",
      title:
        "Asymmetric Catalysis in the Undergraduate Research and Teaching Curriculum",
      subtitle:
        "233rd ACS Spring National Meeting, Division of Chemical Education, Chicago, Illinois",
    },
    {
      date: "March 26, 2007",
      title:
        "Reactivity and Enantioselectivity of Chiral Imidazolidinone Organocatalysts in Asymmetric Robinson Annulations",
      subtitle:
        "233rd ACS Spring National Meeting, Division of Chemical Education, Chicago, Illinois",
      description: "Poster ID: 659",
    },
  ];

  return (
    <Layout>
      {/* Education Section */}
      <Timeline
        heading="What I've studied"
        subheading="My Education"
        items={educationItems}
      />

      {/* Academic Contributions Section */}
      <Timeline
        subheading=" Academic Contributions"
        heading="Peer-Reviewed and Invited Presentations"
        items={presentationItems}
      />
    </Layout>
  );
}

export default Education;
