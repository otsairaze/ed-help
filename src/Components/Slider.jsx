import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import SliderCardFirst from "./SliderCard/SliderCardFirst";

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
        <SliderCardFirst />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCardFirst />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCardFirst />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCardFirst />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
