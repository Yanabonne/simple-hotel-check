import React from "react";
import arrow from "../../images/arrow.svg";
import HotelCard from "../../shared/HotelCard/HotelCard";
import Scrollbar from "../../shared/Scrollbar/Scrollbar";
import { ImagesContext } from "../../contexts/Images-swiper";
import { selectBooking } from "../../store/CurrentBookingSlice";
import { selectHotels } from "../../store/HotelsSlice";
import { useSelector } from "react-redux";
import { convertDate } from "../../shared/utils/utils";
import { transformHotels } from "../../shared/utils/utils";

function HotelsList() {
  const booking = useSelector(selectBooking);
  const hotels = useSelector(selectHotels);
  const listRef = React.useRef();
  const numHotels = React.useRef();
  const date = convertDate(booking.date);
  const favHotelsNum = hotels.reduce((prevVal, hotel) => {
    if (hotel.isLiked) {
      prevVal++;
    }
    return prevVal;
  }, 0);
  const hotelsTransformed = transformHotels(String(favHotelsNum));
  const images = React.useContext(ImagesContext);

  return (
    <section className="list">
      <div className="list__head">
        <div className="list__city">
          <p className="list__text">Отели</p>
          <img className="list__arrow" src={arrow} alt="Стрелочка" />
          <p className="list__text">{booking.city}</p>
        </div>
        <p className="list__date">{date}</p>
      </div>
      <div className="list__slider">
        {images.map((image) => (
          <img
            className="list__slide-image"
            src={image}
            alt="Фотография леса"
            key={image}
          />
        ))}
        {images.map((image) => (
          <img
            className="list__slide-image"
            src={image}
            alt="Фотография леса"
            key={image}
          />
        ))}
      </div>
      <p className="list__fav">
        Добавлено в изранное: <span ref={numHotels}>{favHotelsNum}</span>{" "}
        {hotelsTransformed}.
      </p>
      <div className="list__container">
        <div className="list__hotels" ref={listRef}>
          {hotels.map((hotel) => (
            <HotelCard
              cardInfo={hotel}
              showPicture={true}
              key={hotel.hotelId}
            />
          ))}
        </div>
        <Scrollbar listRef={listRef} />
      </div>
    </section>
  );
}

export default HotelsList;
