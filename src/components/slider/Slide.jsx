import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import heroSliderData from "../../assets/data/heroSliderData";

import "./slider.scss";

const Slide = () => {
  const activeSlider = 0;
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay = {{
            delay: 3000,
        }}
      >
        {heroSliderData.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SliderItem 
               item={item}
               active={`${isActive}? 'active' : ''`} 
               />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const SliderItem = (props) => {
  return (
    <div className={`hero-slider__item ${props.active}`}>
      <div className="hero-slider__item__info">
        <div className="hero-slider__item__info__title">
          <span>{props.item.title}</span>
        </div>

        <div className="hero-slider__item__info__description">
          <span>{props.item.description}</span>
        </div>

        <div className="hero-slider__item__info__btn">
          <Link to={props.item.path}>
            <button>Xem Chi Tiết</button>
          </Link>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <img src={props.item.img} alt={props.item.title} />
      </div>
    </div>
  );
};

export default Slide;
