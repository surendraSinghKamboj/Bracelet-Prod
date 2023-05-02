import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery_1 from "../assets/Gallery_1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ padding: "3rem 3rem", background: "black" }} id="Gallery">
      <Typography
        sx={{
          color: "#FFC300",
          fontFamily: `"Poppins", "sans-serif"`,
          fontFamily: `"Righteous", "cursive"`,
          textAlign: "center",
          paddingBottom: "3rem",
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "36x",
            lg: "42px",
          },
        }}
      >
        Gallery
      </Typography>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={isMobile ? "1" : "3"}
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="Gallery_Slide">
          <Box component="img" src={Gallery_1} className="GallerySwipe"></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Gallery;
