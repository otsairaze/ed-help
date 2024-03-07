import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="./img/GridCard/1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/GridCard/1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/GridCard/1.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/GridCard/1.svg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
