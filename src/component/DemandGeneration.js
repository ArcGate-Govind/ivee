import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Images from "./Images";

const DemandGeneration = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timeout;

    if (currentIndex < "Demand Generation".length) {
      timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText + "Demand Generation"[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      setShowSpinner(false);
      setShowContent(true);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <Container
      className="custom-container"
      sx={{
        maxWidth: "none",
        width: "100%",
        "@media (min-width: 1200px)": {
          maxWidth: "none",
        },
        position: "relative",
      }}
    >
      <Box className="custom-box">
        <div className="gradient2"></div>
      </Box>
      <Box
        sx={{
          padding: "3rem 5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography className="sectionHeading">
          Find the best creators
        </Typography>
        <Typography variant="h4" className="heading2">
          Identify the most influential opinion leaders for your brand
        </Typography>
        <Typography className="headingSpan">
          Our AI-powered search engine centralizes data from Linkedin, Youtube,
          Substack and Apple podcast (and more coming!).
        </Typography>
        <Typography className="headingSpan">
          Forget the hours spent browsing, meet your centralized hub to
          seamlessly spot the most relevant B2B industry leaders for your
          brand’s DNA and goals.
        </Typography>
      </Box>

      <Box className="search">
        <Box className="searchBar">
          {showSpinner ? (
            <img src={Images.spinner} alt="spinner" />
          ) : (
            <img src={Images.search} alt="search" />
          )}
          <Typography>{currentText}</Typography>
        </Box>
        {showContent ? (
          <Box className="searchResults" mt={3}>
            <Box className="searchResultBlock">
              <Box className="searchImages">
                <img src={Images.Erica} alt="erica" className="profile-image" />
                <img src={Images.LinkedIn} alt="linkedin" className="linkedin-icon" />
              </Box>
              <Box className="resultTitles">
                <Typography>
                  <strong>Erica Bland</strong>
                </Typography>
                <Typography>9.3k subscribers</Typography>
              </Box>
              <Box className="resultDetail">
                <Typography>
                  Demand generation strategies & marketing tips
                </Typography>
              </Box>
            </Box>

            <Box className="searchResultBlock" mt={2}>
              <Box className="searchImages">
                <img
                  src={Images.makerPlace}
                  alt="makerPlace"
                  className="profile-image"
                />
                <img src={Images.youTube} alt="youTube" className="linkedin-icon" />
              </Box>
              <Box className="resultTitles">
                <Typography>
                  <strong>MakerPlace</strong>
                </Typography>
                <Typography>217k subscribers</Typography>
              </Box>
              <Box className="resultDetail">
                <Typography>
                  Tools and strategies in demand generation
                </Typography>
              </Box>
            </Box>

            <Box className="searchResultBlock" mt={2}>
              <Box className="searchImages">
                <img src={Images.hannah} alt="hannah" className="profile-image" />
                <img src={Images.LinkedIn} alt="linkedin" className="linkedin-icon" />
              </Box>
              <Box className="resultTitles">
                <Typography>
                  <strong>Hannah Rodriguez</strong>
                </Typography>
                <Typography>11k subscribers</Typography>
              </Box>
              <Box className="resultDetail">
                <Typography>B2B demand generation insights</Typography>
              </Box>
            </Box>

            <Box className="searchResultBlock blur" mt={2}>
              <Box className="searchImages">
                <img
                  src={Images.innovation}
                  alt="innovation"
                  className="profile-image"
                />
                <img
                  src={Images.innovationTag}
                  alt="innovation"
                  className="linkedin-icon"
                />
              </Box>
              <Box className="resultTitles">
                <Typography>
                  <strong>The Innovation Corner</strong>
                </Typography>
                <Typography>19k subscribers</Typography>
              </Box>
              <Box className="resultDetail">
                <Typography>Marketing tools and business strategies</Typography>
              </Box>
            </Box>

            <Box className="searchResultBlock blur" mt={2}>
              <Box className="searchImages">
                <img src={Images.reDo} alt="reDo" className="profile-image" />
                <img src={Images.LinkedIn} alt="linkedin" className="linkedin-icon" />
              </Box>
              <Box className="resultTitles">
                <Typography>
                  <strong>Danielle Reynolds</strong>
                </Typography>
                <Typography>3.4k subscribers</Typography>
              </Box>
              <Box className="resultDetail">
                <Typography>Digital marketing and B2B insights</Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
};

export default DemandGeneration;
