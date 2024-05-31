import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import graphUp from "../images/graph-up.svg";
import graphDown from "../images/graph-down.svg";
import Erica from "../images/Erica_Blend.webp";
import linkedin from "../images/linkedin.avif";
import CRO from "../images/CRO.avif";
import search from "../images/search.png";

const Header = () => {
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
        <div className="gradient"></div>
      </Box>

      <Box className="typographyHeading">
        <Typography variant="h2" align="center" gutterBottom>
          Your B2B influencer marketing platform
        </Typography>
        <Typography align="center" paragraph>
          Partner with your industry experts to grow revenue, generate leads and
          elevate your brand.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Start free trial
        </Button>
      </Box>

      <Box mt={1} className="averageViews">
        <Box textAlign="center" mx={2}>
          <Typography variant="body1">Average views</Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">48k</Typography>
            <Box
              component="div"
              className="averageViewsGraph"
              sx={{
                bgcolor: "rgb(229, 249, 206)",
                borderRadius: "20px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <Box
                component="img"
                src={graphUp}
                alt="Graph"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="p"
                sx={{ color: "#3f7417", fontSize: "13px" }}
              >
                11%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box textAlign="center" mx={2}>
          <Typography variant="body1">Average likes</Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">88</Typography>
            <Box
              component="div"
              className="averageViewsGraph"
              sx={{
                bgcolor: "rgb(229, 249, 206)",
                borderRadius: "20px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <Box
                component="img"
                src={graphUp}
                alt="Graph"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="p"
                sx={{ color: "#3f7417", fontSize: "13px" }}
              >
                13%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box textAlign="center" mx={2}>
          <Typography variant="body1">Average comments</Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">13</Typography>
            <Box
              component="div"
              className="averageViewsGraph"
              sx={{
                bgcolor: "rgb(255, 229, 228)",
                borderRadius: "20px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              }}
            >
              <Box
                component="img"
                src={graphDown}
                alt="Graph"
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="p"
                sx={{ color: "#bc2019", fontSize: "13px" }}
              >
                -11%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={1} className="demandGeneration">
        <Box className="demandGenerationLayer">
          <Box className="demandGenerationFrame">
            <Box className="demandGenerationContent2">
              <Box className="tagBg">
                <Typography variant="p" className="tagText">
                  #demandgeneration
                </Typography>
              </Box>
            </Box>
            <Box className="ericaFrame">
              <Box className="boxErica">
                <img src={Erica} alt="Erica Bland" className="erica" />
              </Box>
              <Box className="linkedinFrame">
                <Box className="boxLinkedin">
                  <img src={linkedin} alt="linkedin" className="linkedin" />
                </Box>
              </Box>
              <Box className="demandGenerationHeading">
                <Typography variant="h6">Erica Bland</Typography>
                <Typography variant="p">9.3k subscribers</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="CRO">
        <Box className="CROimage">
          <img src={CRO} alt="CRO" />
        </Box>
        <Box className="CROtext" ml={1}>
          <Typography mt={1}>Sponsored</Typography>
          <Typography
            variant="p"
            mt={1}
            sx={{
              fontSize: "15px !important",
            }}
          >
            Conversion Rate Optimisation & Personalisation, with Diego Sanders
          </Typography>
          <Typography
            mt={1}
            mb={1}
            sx={{
              fontSize: "12px !important",
            }}
          >
            May 11, 2024
          </Typography>
        </Box>
      </Box>

      <Box className="searchBox">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <img src={search} alt="search" width={20} />
          <Typography ml={2}>
            What topic is your audience interested in?
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
