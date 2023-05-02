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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
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

          <div>
            <IconButton
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              id="fade-button"
              aria-controls={isSidebarOpen ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isSidebarOpen ? "true" : undefined}
              sx={{
                color: "white",
                display: { xs: "block", sm: "block", md: "block", lg: "block" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              open={isSidebarOpen}
              onClose={setIsSidebarOpen(!isSidebarOpen)}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                My account
              </MenuItem>
              <MenuItem onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
