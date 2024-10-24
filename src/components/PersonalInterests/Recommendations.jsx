import React, { useState } from "react";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import personalInterestsContent from "../../assets/content/personalInterestsContent";

const Recommendations = ({ recommendations, language }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const showViewMore = visibleCount < recommendations.length;

  const displayedRecommendations = isMobile
    ? recommendations.slice(0, visibleCount)
    : recommendations;

  const cols = isMobile ? 1 : 3;

  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
          paddingTop: 2,
        }}
      >
        {personalInterestsContent[language].recommendationsTitle}
      </Typography>

      <ImageList
        variant="standard"
        cols={cols}
        gap={16}
        sx={{
          width: "100%",
          paddingBottom: isMobile ? 3 : 8,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        {displayedRecommendations.map((rec, index) => (
          <ImageListItem
            key={index}
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingX: isMobile ? 2 : 1,
                paddingBottom: 0,
                boxSizing: "border-box",
                borderBottom: 1,
                borderColor: theme.palette.divider,
                minHeight: isMobile ? "auto" : "220px",
                ...(index < cols && {
                  borderTop: `1px solid ${theme.palette.divider}`,
                }),
              }}
            >
              <a href={rec.url} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  image={rec.img}
                  alt={rec.title}
                  sx={{
                    height: "160px",
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    width: "100%",
                    paddingTop: 1,
                  }}
                />
              </a>
              <CardContent
                sx={{
                  padding: 0,
                  paddingTop: 1,
                  paddingLeft: 1,
                  paddingRight: 1,
                  paddingBottom: 0,
                }}
              >
                <Typography
                  variant="body3"
                  component="div"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {rec.title}
                </Typography>
              </CardContent>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>

      {isMobile && showViewMore && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={handleViewMore}>
            View More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Recommendations;
