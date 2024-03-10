import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderCardFirst from "../SliderCard/SliderCardFirst";
import SliderCardSecond from "../SliderCard/SliderCardSecond";

import "swiper/css";

const firstSlider = [
  {
    title: "Помощь с подготовкой к дипломной работе ",
    subtitle:
      "Хочу выразить благодарность автору за его работу! Спасибо огромное!!! Помогли написать ни к единому слову, речь и презентация...",
    viewText: "Смотреть полностью во Вконтакте",
    ImageUrl: "./img/Slider/star.png",
    secondPlayButton: "./img/Slider/play.png",
    secondImageUrl: "./img/Slider/second-bg-video.png",
  },
  {
    title: "Помощь с подготовкой к дипломной работе ",
    subtitle:
      "Хочу выразить благодарность автору за его работу! Спасибо огромное!!! Помогли написать ни к единому слову, речь и презентация...",
    viewText: "Смотреть полностью во Вконтакте",
    ImageUrl: "./img/Slider/star.png",
    secondPlayButton: "./img/Slider/play.png",
    secondImageUrl: "./img/Slider/second-bg-video.png",
  },
  {
    title: "Помощь с подготовкой к дипломной работе ",
    subtitle:
      "Хочу выразить благодарность автору за его работу! Спасибо огромное!!! Помогли написать ни к единому слову, речь и презентация...",
    viewText: "Смотреть полностью во Вконтакте",
    ImageUrl: "./img/Slider/star.png",
    secondPlayButton: "./img/Slider/play.png",
    secondImageUrl: "./img/Slider/second-bg-video.png",
  },
  {
    title: "Помощь с подготовкой к дипломной работе ",
    subtitle:
      "Хочу выразить благодарность автору за его работу! Спасибо огромное!!! Помогли написать ни к единому слову, речь и презентация...",
    viewText: "Смотреть полностью во Вконтакте",
    ImageUrl: "./img/Slider/star.png",
    secondPlayButton: "./img/Slider/play.png",
    secondImageUrl: "./img/Slider/second-bg-video.png",
  },
];

const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {firstSlider.map((item, index) => (
        <SwiperSlide className="slider-anim">
          {index % 2 == 0 ? (
            <SliderCardFirst
              title={item.title}
              subtitle={item.subtitle}
              viewText={item.viewText}
              ImageUrl={item.ImageUrl}
            />
          ) : (
            <SliderCardSecond
              title={item.title}
              secondPlayButton={item.secondPlayButton}
              imageUrl={item.ImageUrl}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
