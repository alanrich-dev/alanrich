import React from "react";
import Timeline from "./Timeline";

function Experience() {
  const experienceItems = [
    {
      date: "2022 - 2024",
      title: "Research Innovations Inc.",
      subtitle: "Frontend Developer II",
      description:
        "At Research Innovations Inc., I worked as a Frontend Developer II, contributing to various projects involving React and other frontend technologies.",
    },
    {
      date: "2021 - 2022",
      title: "OC Tanner",
      subtitle: "Frontend Developer I",
      description:
        "At OC Tanner, I developed user interfaces using React and improved performance and accessibility of web applications.",
    },
    {
      date: "2019 - 2021",
      title: "Upwork",
      subtitle: "Frontend Developer I",
      description:
        "As a freelancer on Upwork, I worked on numerous frontend projects for various clients, honing my skills in React and web development.",
    },
    {
      date: "2014 - 2019",
      title: "Upwork",
      subtitle: "Technical Writer",
      description:
        "Provided technical writing services, creating documentation and guides for software products and technical processes.",
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
