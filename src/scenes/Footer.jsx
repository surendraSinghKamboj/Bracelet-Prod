import { Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { FacebookOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <FlexBetween
      sx={{
        padding: {
          xs: "1rem 2rem",
          sm: "1.5rem 3rem",
          md: "2rem 4rem",
          lg: "2rem 6rem",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
        },

        background: "black",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      <FlexBetween>
        <Typography
          sx={{
            fontFamily: `"Poppins", "sans-serif"`,
            textAlign: "center",
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },
          }}
        >
          Copyright © 2022 Bracelet Productions | Developed By Bracelet
          Productions
        </Typography>
      </FlexBetween>
      <FlexBetween sx={{ flexDirection: "column" }}>
        <FlexBetween>
          <IconButton sx={{ color: "white" }}>
            <FacebookOutlined></FacebookOutlined>{" "}
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <FacebookOutlined></FacebookOutlined>{" "}
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <FacebookOutlined></FacebookOutlined>{" "}
          </IconButton>
        </FlexBetween>
        <FlexBetween
          sx={{
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },
          }}
        >
          Terms and Conditions
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Footer;
