import React from "react";
import Layout from "./Layout";
import Timeline from "./Timeline";
import {
  universitiesAttended,
  academicConferences,
} from "../assets/content/education";

function Education() {
  return (
    <Layout>
      {/* Education Section */}
      <Timeline
        heading="What I've studied"
        subheading="My Education"
        items={universitiesAttended}
      />

      {/* Academic Contributions Section */}
      <Timeline
        subheading=" Academic Contributions"
        heading="Peer-Reviewed and Invited Presentations"
        items={academicConferences}
      />
    </Layout>
  );
}

export default Education;
