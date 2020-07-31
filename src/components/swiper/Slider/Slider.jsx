import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Slide1 from "../../../Assets/Slide1.png";
import Slide2 from "../../../Assets/Slide2.png";
import Slide3 from "../../../Assets/Slide3.png";
import PaginationNext from '../../Pagination/PaginationNext';
import PaginationPrev from '../../Pagination/PaginationPrev';
import Slide from "../Slide/Slide";
// Import Swiper styles
import "swiper/swiper.scss";
import "./Slider.scss";


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const slides = [
  {
    image: Slide1,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
  {
    image: Slide2,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
  {
    image: Slide3,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
  {
    image: Slide1,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
  {
    image: Slide2,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
  {
    image: Slide3,
    header: "Timbaland",
    content:
      "Timothy Zachary Mosley, known professionally as Timbaland, is an American record producer, rapper, singer, songwriter, and DJ. Timbaland's first full credit production work was in 1996 on Ginuwine...the Bachelor for R&B singer Ginuwine.",
  },
];
const Slider = () => {
  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >

    //   {slides.map(slide =>
    //     <SwiperSlide>
    //       <Slide image={slide.image} header={slide.header} content={slide.content} />
    //     </SwiperSlide>
    //   )}

    // </Swiper>

    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation={{ clickable: true ,  prevEl :"#js-prev1", nextEl:"#js-next1"}}
      loop={true}
      fadeEffect={{ crossFade: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide) => (
        <SwiperSlide className="slide">
          <div className="swiper">
            <div className="image">
              <img src={slide.image} />
            </div>
            <div className="Text">
              <h1>{slide.header}</h1>
              <p>{slide.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="pagination">
      <div id="js-prev1" class="swiper-button-prev"><PaginationPrev /></div>
<div id="js-next1" class="swiper-button-next"><PaginationNext /></div>
      
      
      </div>
      
    </Swiper>
  );
};
export default Slider;
