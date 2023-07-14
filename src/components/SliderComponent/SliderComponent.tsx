import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.scss'

import './SliderComponent.scss'
import { Link } from "react-router-dom";

const vineImg = [
  {src:'img/1.jpeg', id: '1'},
  {src:'img/2.jpeg', id: '2'},
  {src:'img/3.jpeg', id: '3'},
  {src:'img/4.jpeg', id: '4'},
  {src:'img/1.jpeg', id: '5'},
  {src:'img/2.jpeg', id: '6'},
  {src:'img/3.jpeg', id: '7'},
  {src:'img/4.jpeg', id: '8'},
  {src:'img/1.jpeg', id: '9'},
  {src:'img/2.jpeg', id: '10'},
]

export const SliderComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <div className="slider-component">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {vineImg.map(one => {
          return (
            <SwiperSlide
              key={one.id}
            >
              <Link to='wines'>
                <img
                  alt="wine"
                  src={one.src}
                  className="slider-component__img"
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
