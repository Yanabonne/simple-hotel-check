import React from "react";
import arrow from "../../images/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImagesContext } from "../../contexts/Images-swiper";

import HotelCard from "../../shared/HotelCard/HotelCard";

function HotelsList() {
  const images = React.useContext(ImagesContext);

  return (
    <section className="list">
      <div className="list__head">
        <div className="list__city">
          <p className="list__text">Отели</p>
          <img className="list__arrow" src={arrow} alt="Стрелочка" />
          <p className="list__text">Москва</p>
        </div>
        <p className="list__date">21 марта 2023</p>
      </div>
      <div className="list__slider">
        <Swiper spaceBetween={12} slidesPerView={3}>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[0]} alt="Дом" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[1]} alt="Лес" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[2]} alt="Дорога" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[0]} alt="Дом" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[1]} alt="Лес" />}
          </SwiperSlide>
          <SwiperSlide>
            {<img className="list__slide-image" src={images[2]} alt="Дорога" />}
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="list__fav">
        Добавлено в изранное: <span>3</span> отеля.
      </p>
      <HotelCard />
    </section>
  );
}

export default HotelsList;