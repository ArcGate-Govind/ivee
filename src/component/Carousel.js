import React from "react";
import { Box, Container } from "@mui/material";
import "../App.css";

const Carousel = () => {
  return (
    <>
      <Container
        sx={{
          maxWidth: "none",
          width: "100%",
          "@media (min-width: 1200px)": {
            maxWidth: "none",
          },
          position: "relative",
        }}
      >
        <Box className="scroll-container">
          <div></div>
          <img
            className="scrolling-image"
            src="https://framerusercontent.com/images/ErlxixldzrUICIrwES2M8gbujUc.png?scale-down-to=4096"
            alt="Scrolling Image"
          />

          <div></div>
        </Box>
      </Container>
    </>
  );
};

export default Carousel;
