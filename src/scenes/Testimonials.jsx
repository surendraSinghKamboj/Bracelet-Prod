import React from "react";
import { Box, Typography } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import TestimonidalCard from "../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <Box sx={{ padding: "3rem 3rem 8rem", background: "black" }}>
      <Box>
        <Typography
          sx={{
            color: "#FFC300",
            fontFamily: `"Poppins", "sans-serif"`,
            fontFamily: `"Righteous", "cursive"`,
            textAlign: "center",
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "36x",
              lg: "42px",
            },
          }}
        >
          TESTIMONIALS
        </Typography>
      </Box>
      <Box className="testimonials">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          /*         modules={[EffectCoverflow, Pagination]} */
          className="mySwiper"
        >
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
          <SwiperSlide className="TestimonialSwipe">
            <TestimonidalCard></TestimonidalCard>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
