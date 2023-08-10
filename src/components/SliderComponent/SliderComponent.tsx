import React, { useEffect, useState, FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.scss'

import './SliderComponent.scss'
import { Link } from "react-router-dom";
import { log } from "console";
import { WineCardType } from "../../types/WineCard";

type Props = {
  sliderComponent: WineCardType[] | null
}

export const SliderComponent: FC<Props> = ({
  sliderComponent
}) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const vineImg=sliderComponent;

  console.log(vineImg);


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
        {(vineImg) && (
          vineImg.map(one => {
            return (
              <SwiperSlide
                key={one.id}
              >
                <Link to='wines'>
                  <img
                    alt="wine"
                    src={one.mainImage}
                    className="slider-component__img"
                  />
                </Link>
              </SwiperSlide>
            )
          })
        )}
      </Swiper>
    </div>
  )
}
