import React, { useState } from "react";
import Timeline from "./Timeline";
import Layout from "./Layout";
import { Button, Box } from "@mui/material";

function Experience() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const experienceItemsEn = [
    {
      date: "2024 - 2022",
      title: "Research Innovations Inc.",
      subtitle: "Frontend Developer II",
      description:
        "While working for a Department of Defense contractor, I developed a user interface that supported rapid decision-making in battlefield operations, with the application being used at high levels of command, including the Secretary of Defense. I primarily used React, JavaScript, and MUI to build front-end components within a large NX monorepo, where configuration files drove much of the application's structure. My responsibilities focused on maintaining the system, troubleshooting, and resolving bugs by navigating a complex web of configuration files that lacked internal documentation. Additionally, I gained some experience with Next.js, Storybook, Cypress and Jenkins during my tenure.",
    },
    {
      date: "2022 - 2021",
      title: "OC Tanner",
      subtitle: "Frontend Developer I",
      description:
        "At OC Tanner, I worked as a front-end developer where I focused on building out new features for their employee recognition software. Using a combination of MUI, React, JavaScript, TypeScript, and GraphQL, I collaborated with various teams to deliver intuitive and responsive interfaces. My role involved designing and developing scalable web applications while optimizing performance through efficient data management using GraphQL.",
    },
    {
      date: "2021 - 2019",
      title: "Upwork",
      subtitle: "Web Developer",
      description:
        "As a freelance web developer, I got my start working through Upwork, securing clients and delivering custom web solutions. Before transitioning into web development, I worked as a technical writer, where documenting software sparked my interest in coding and led me to pursue it professionally. I had always enjoyed experimenting with code, and this role gave me the opportunity to turn that passion into a career. Through my freelance projects, I gained practical experience in building websites, refining my skills in CSS,  JavaScript,  and React while learning to collaborate with clients to meet their needs.",
    },
    {
      date: "2019 - 2015",
      title: "Upwork",
      subtitle: "Technical Writer",
      description:
        "I began my career as a technical writer creating scientific and pharmaceutical documentation for clients I found through Upwork. However, I soon discovered a higher demand for software-related technical writing, which led to a gradual transition in my focus. Over time, I honed my ability to write clear, concise, and accurate software documentation, learning to communicate complex technical concepts effectively. This shift allowed me to gain familiarity with various software development practices, and I became proficient at producing high-quality documentation that met the needs of developers and users alike.",
    },
    {
      date: "2013 - 2014",
      title: "Illinois Institute of Technology",
      subtitle: "Graduate Research Assistant",
      description:
        "I conducted genomic analysis of human colorectal cancer cells affected by microsatellite mutations in the BaxΔ2 gene. This role involved performing lab techniques such as DNA extraction, PCR amplification, gel electrophoresis, and sequencing to analyze genetic mutations. While I gained valuable experience in molecular biology and cancer research, I eventually realized that academic research was not my calling. This experience, however, deepened my analytical skills and understanding of scientific research methodologies.",
    },
    {
      date: "2012 - 2013",
      title: "Nestlé",
      subtitle: "Chemist",
      description:
        "As a chemist in Nestlé's confectionary division, my role involved ensuring product quality throughout the manufacturing process. I worked on formulating and testing chocolate recipes, analyzing raw materials, and conducting quality control checks to maintain consistency in taste, texture, and shelf life. Using techniques such as chromatography, spectroscopy, and titration, I performed chemical analyses to monitor ingredient composition and ensure compliance with FDA food safety standards. My work also included collaborating with production teams to troubleshoot issues, optimize formulations, and innovate new chocolate products.",
    },
  ];

  const experienceItemsFr = [
    {
      date: "2024 - 2022",
      title: "Research Innovations Inc.",
      subtitle: "Développeur Frontend II",
      description:
        "En travaillant pour un contractant du Département de la Défense, j'ai développé une interface utilisateur qui soutenait la prise de décision dans les opérations de champ de bataille, l'application étant utilisée à des niveaux élevés de commandement, y compris le Secrétaire à la Défense. J'ai principalement utilisé React, JavaScript et MUI pour construire des composants front-end au sein d'un grand monorepo NX, où les fichiers de configuration dirigeaient une grande partie de la structure de l'application. Mes responsabilités se concentraient sur la maintenance du système, le dépannage et la résolution de bugs en naviguant dans un enchevêtrement complexe de fichiers de configuration qui manquaient de documentation interne. De plus, j'ai acquis de l'expérience avec Next.js, Storybook, Cypress et Jenkins pendant mon mandat.",
    },
    {
      date: "2022 - 2021",
      title: "OC Tanner",
      subtitle: "Développeur Frontend I",
      description:
        "Chez OC Tanner, j'ai travaillé en tant que développeur front-end où je me suis concentré sur la création de nouvelles fonctionnalités pour leur logiciel de reconnaissance des employés. En utilisant une combinaison de MUI, React, JavaScript, TypeScript et GraphQL, j'ai collaboré avec diverses équipes pour offrir des interfaces intuitives et réactives. Mon rôle impliquait la conception et le développement d'applications web évolutives tout en optimisant les performances grâce à une gestion efficace des données avec GraphQL.",
    },
    {
      date: "2021 - 2019",
      title: "Upwork",
      subtitle: "Développeur Web",
      description:
        "En tant que développeur web freelance, j'ai commencé à travailler via Upwork, en obtenant des clients et en livrant des solutions web personnalisées. Avant de passer au développement web, j'ai travaillé comme rédacteur technique, où la documentation logicielle a suscité mon intérêt pour le codage et m'a conduit à le poursuivre professionnellement. J'ai toujours aimé expérimenter avec le code, et ce rôle m'a donné l'opportunité de transformer cette passion en carrière. À travers mes projets freelance, j'ai acquis une expérience pratique dans la création de sites web, affinant mes compétences en CSS, JavaScript et React tout en apprenant à collaborer avec les clients pour répondre à leurs besoins.",
    },
    {
      date: "2019 - 2015",
      title: "Upwork",
      subtitle: "Rédacteur Technique",
      description:
        "J'ai commencé ma carrière en tant que rédacteur technique en créant de la documentation scientifique et pharmaceutique pour des clients que j'ai trouvés via Upwork. Cependant, j'ai rapidement découvert une demande plus élevée pour la rédaction technique liée aux logiciels, ce qui a conduit à une transition progressive dans mon focus. Au fil du temps, j'ai perfectionné ma capacité à écrire une documentation logicielle claire, concise et précise, apprenant à communiquer efficacement des concepts techniques complexes. Ce changement m'a permis de me familiariser avec diverses pratiques de développement logiciel, et je suis devenu compétent pour produire une documentation de haute qualité répondant aux besoins des développeurs et des utilisateurs.",
    },
    {
      date: "2013 - 2014",
      title: "Illinois Institute of Technology",
      subtitle: "Assistant de Recherche Diplômé",
      description:
        "J'ai effectué une analyse génomique de cellules cancéreuses colorectales humaines affectées par des mutations de microsatellites dans le gène BaxΔ2. Ce rôle impliquait la réalisation de techniques de laboratoire telles que l'extraction d'ADN, l'amplification PCR, l'électrophorèse sur gel et le séquençage pour analyser les mutations génétiques. Bien que j'aie acquis une expérience précieuse en biologie moléculaire et en recherche sur le cancer, j'ai finalement réalisé que la recherche académique n'était pas ma vocation. Cette expérience, cependant, a approfondi mes compétences analytiques et ma compréhension des méthodologies de recherche scientifique.",
    },
    {
      date: "2012 - 2013",
      title: "Nestlé",
      subtitle: "Chimiste",
      description:
        "En tant que chimiste dans la division confiserie de Nestlé, mon rôle impliquait d'assurer la qualité des produits tout au long du processus de fabrication. J'ai travaillé sur la formulation et les tests de recettes de chocolat, analysant les matières premières et effectuant des contrôles de qualité pour maintenir la cohérence du goût, de la texture et de la durée de conservation. En utilisant des techniques telles que la chromatographie, la spectroscopie et la titration, j'ai réalisé des analyses chimiques pour surveiller la composition des ingrédients et assurer la conformité avec les normes de sécurité alimentaire de la FDA. Mon travail comprenait également la collaboration avec les équipes de production pour résoudre les problèmes, optimiser les formulations et innover de nouveaux produits chocolatés.",
    },
  ];

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
          items={language === "en" ? experienceItemsEn : experienceItemsFr}
        />
      </Box>
    </Layout>
  );
}

export default Experience;
