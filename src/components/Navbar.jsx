import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo.png";
import FlexBetween from "./FlexBetween";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "black",
        /*      background: "#D8E1FF", */
        boxShadow: "none",
        padding: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "2rem" },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*  LEFTSIDE */}
        <Box
          component="img"
          src={logo}
          width="120px"
          height="80px"
          sx={{
            width: {
              xs: "60px",
              sm: "80px",
              md: "100px",
              lg: "120px",
            },
            height: { xs: "40px", sm: "50px", md: "65px", lg: "80px" },
          }}
        ></Box>
        <FlexBetween
          gap="1.5rem"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          <Typography fontSize="16px" sx={{ color: "white" }}>
            About
          </Typography>
          <Typography fontSize="16px" sx={{ color: "white" }}>
            Services
          </Typography>
          <Typography fontSize="16px" sx={{ color: "white" }}>
            Gallery
          </Typography>
          <Typography fontSize="16px" sx={{ color: "white" }}>
            Contact
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD60A",
              color: "#003566",
              fontWeight: "bold",
            }}
          >
            Get a Quote
          </Button>
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "block", lg: "block" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
