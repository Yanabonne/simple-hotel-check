import React from "react";
import house from "../../images/house.svg";
import { selectBooking } from "../../store/CurrentBookingSlice";
import { useSelector } from "react-redux";
import starGold from "../../images/star-gold.svg";
import starGrey from "../../images/star-grey.svg";

function HotelCard() {
  const booking = useSelector(selectBooking);
  const cardInfo = { stars: 3, priceAvg: 263637 };

  return (
    <article className="card">
      <img className="card__picture" alt="Домик" src={house}></img>
      <div className="card__info">
        <div className="card__container">
          <p className="card__name">Moscow Marriott Grand Hotel</p>
          <button className="card__like"></button>
        </div>
        <p className="card__date">{`${booking.date}    —  ${booking.days} день`}</p>
        <div className="card__container">
          <div className="card__stars">
            <img
              src={cardInfo.stars > 0 ? starGold : starGrey}
              alt="Золотая звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 1 ? starGold : starGrey}
              alt="Золотая звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 2 ? starGold : starGrey}
              alt="Золотая звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 3 ? starGold : starGrey}
              alt="Золотая звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 4 ? starGold : starGrey}
              alt="Золотая звезда"
              className="card__star"
            />
          </div>
          <p className="card__price">
            Price:<span className="card__span-price">{cardInfo.priceAvg}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;
