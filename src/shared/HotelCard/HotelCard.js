import React from "react";
import house from "../../images/house.svg";
import { selectBooking } from "../../store/CurrentBookingSlice";
import { useSelector, useDispatch } from "react-redux";
import starGold from "../../images/star-gold.svg";
import starGrey from "../../images/star-grey.svg";
import { updateLike } from "../../store/HotelsSlice";

function HotelCard({ cardInfo, showPicture }) {
  const booking = useSelector(selectBooking);
  const dispatch = useDispatch();

  function onButtonClick() {
    dispatch(updateLike(cardInfo));
  }

  return (
    <article className="card">
      <img
        className={showPicture ? "card__picture" : "card__disabled"}
        alt="Домик"
        src={house}
      ></img>
      <div className="card__info">
        <div className="card__container">
          <p className="card__name">{cardInfo.hotelName}</p>
          <button
            className={
              cardInfo.isLiked ? "card__like card__like_active" : "card__like"
            }
            onClick={onButtonClick}
          ></button>
        </div>
        <p className="card__date">{`${booking.date}    —  ${booking.days} день`}</p>
        <div className="card__container">
          <div className="card__stars">
            <img
              src={cardInfo.stars > 0 ? starGold : starGrey}
              alt="Звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 1 ? starGold : starGrey}
              alt="Звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 2 ? starGold : starGrey}
              alt="Звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 3 ? starGold : starGrey}
              alt="Звезда"
              className="card__star"
            />
            <img
              src={cardInfo.stars > 4 ? starGold : starGrey}
              alt="Звезда"
              className="card__star"
            />
          </div>
          <p className="card__price">
            Price:
            <span className="card__span-price">{`${Math.round(
              cardInfo.priceAvg * booking.days
            )} ₽`}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;
