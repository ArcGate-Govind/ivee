import React, { useEffect } from 'react';
import '../App.css'
import { Box } from "@mui/material";

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / scrollHeight) * 100;
      const navbar = document.querySelector('.navbar-section');

      if (scrollPercent > 2) {
        navbar.classList.add('navbar-centered');
      } else {
        navbar.classList.remove('navbar-centered');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar-section">
      <Box className="brand-name">Ivee</Box>
      <Box className="list-item">
        <Box className="nav-item">Pricing</Box>
        <Box className="nav-item">Log In</Box>
        <Box className="nav-item">
          <button className="trial-button">Start Free Trial</button>
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
