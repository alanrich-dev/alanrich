import React from "react";
import { Box } from "@mui/material";
import Layout from "../ReuseableComponents/Layout";
import Timeline from "../ReuseableComponents/Timeline";
import {
  universitiesAttended,
  academicConferences,
} from "../../assets/content/education";

function Education() {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 2, sm: 4, md: 6 },
        }}
      >
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
      </Box>
    </Layout>
  );
}

export default Education;
