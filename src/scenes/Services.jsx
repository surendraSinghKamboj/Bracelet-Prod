import { Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import Servicesbg from "../assets/Services.jpg";
import { Box, styled } from "@mui/system";

const Service = styled(FlexBetween)({
  flexDirection: "column",
  width: "25vw",
  height: "180px",
  gap: "2rem",
  margin: "0 auto",
});

const ServiceTitle = styled(Typography)({
  color: "#6CCFF6",
  fontFamily: `"Poppins", "sans-serif"`,
  fontFamily: `"Righteous", "cursive"`,
});

const ServiceText = styled(Typography)({
  fontFamily: `"Poppins", "sans-serif"`,
  fontSize: "20px",
  textAlign: "center",
});

const Services = () => {
  return (
    <Box
      id="Services"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${Servicesbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "48rem",
        width: "100%",
        backgroundBlendMode: "lighten",
        gap: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
        },
      }}
    >
      <Typography
        sx={{
          color: "#FFC300",
          fontFamily: `"Poppins", "sans-serif"`,
          fontFamily: `"Righteous", "cursive"`,
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "36x",
            lg: "42px",
          },
        }}
      >
        SERVICES WE OFFER
      </Typography>
      <FlexBetween
        sx={{
          flexWrap: "wrap",
          color: "white ",
          padding: {
            xs: "1rem 2rem",
            sm: "1.5rem 4rem",
            md: "2rem 7rem",
            lg: "2rem 10rem",
          },

          gap: "4rem",
        }}
      >
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },

            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            EVENT MANAGEMENT
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            We are proficient in the three most integral part of Event
            Management
            <br />
            <br />
            Conceptulise – Design – Execute
          </ServiceText>
        </Service>
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },
            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            WEDDING PLANNING
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            Our professional wedding planner understands your desire. so they
            design and execute your wedding into a lifetime memory.
          </ServiceText>
        </Service>
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },
            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            FASHION SHOW
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            We manage your fashion show with very professional manner, weather
            it’s a Ramp, Backdrop, Light or Sound. It all will be flawless.
          </ServiceText>
        </Service>
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },
            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            PHOTO AND VIDEOGRAPHY
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            Whether it is a wedding, corporate event, Fashion Show, Birthday or
            any other event, we have a dedicated team of professionals ready to
            capture the best moments for you.
          </ServiceText>
        </Service>
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },
            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            CORPORATE GIFTING
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            We provide corporate gifting services to our clients. The
            Innovative, Latest, Trendy and Useful Gifts with Corporate Branding.
          </ServiceText>
        </Service>
        <Service
          sx={{
            width: {
              xs: "75vw",
              sm: "70vw",
              md: "40vw",
              lg: "25vw",
            },
            minHeight: { xs: "125px", sm: "160px", md: "180px" },
          }}
        >
          <ServiceTitle
            sx={{
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            CREATIVE AND WEB DESIGNING
          </ServiceTitle>
          <ServiceText
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            We provide creative and website designing services. Easy to access
            and with all the latest feature.
          </ServiceText>
        </Service>
      </FlexBetween>
    </Box>
  );
};

export default Services;
