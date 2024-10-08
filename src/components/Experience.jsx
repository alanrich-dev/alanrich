import React from "react";
import Timeline from "./Timeline";

function Experience() {
  const experienceItems = [
    {
      date: "2024 - 2022",
      title: "Research Innovations Inc.",
      subtitle: "Frontend Developer II",
      description:
        "While working for a Department of Defense contractor, I developed a user interface that supported decision-making in battlefield operations, with the application being used at high levels of command, including the Secretary of Defense. I primarily used React, JavaScript, and MUI to build front-end components within a large NX monorepo, where configuration files drove much of the application's structure. My responsibilities focused on maintaining the system, troubleshooting, and resolving bugs by navigating a complex web of configuration files that lacked internal documentation. Additionally, I gained some experience with Next.js, Storybook, Cypress and Jenkins during my tenure.",
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

  return (
    <Timeline
      heading="Where I've worked"
      subheading="My Experience"
      items={experienceItems}
    />
  );
}

export default Experience;
