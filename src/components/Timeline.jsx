import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Timeline({ heading, subheading, items }) {
  const theme = useTheme();

  return (
    <div>
      {heading && (
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.secondary,
            paddingTop: { xs: 4, sm: 4, md: 4 },
          }}
        >
          {heading}
        </Typography>
      )}

      {subheading && (
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: theme.palette.primary.main,
          }}
        >
          {subheading}
        </Typography>
      )}

      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          paddingTop: {
            xs: theme.spacing(3),
            sm: theme.spacing(5),
            md: theme.spacing(8),
          },
          paddingBottom: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(6),
          },
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.highlight,
                  fontWeight: "bold",
                }}
              >
                {item.date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography variant="subtitle1">{item.subtitle}</Typography>
                  )}
                  {item.description && (
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default Timeline;
