import React from "react";
import { selectHotels } from "../../store/HotelsSlice";
import HotelCard from "../../shared/HotelCard/HotelCard";
import { useSelector } from "react-redux";
import orderArrowsTop from "../../images/order-arrows_top.svg";
import orderArrowsBottom from "../../images/order-arrows_bottom.svg";
import orderArrowsDisabled from "../../images/order-arrows_disabled.svg";

function FavHotels() {
  const hotelsInitial = useSelector(selectHotels);
  let hotels = Object.assign([], hotelsInitial);

  const [isRatingActive, setIsRatingActive] = React.useState(true);
  const [sortBy, setSortBy] = React.useState("-stars");
  const ratingArrowsRef = React.useRef();
  const priceArrowsRef = React.useRef();

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  function onRatingClick() {
    setIsRatingActive(true);
    if (sortBy === "-stars") {
      setSortBy("stars");
    } else {
      setSortBy("-stars");
    }
  }

  function onPriceClick() {
    setIsRatingActive(false);
    if (sortBy === "-priceAvg") {
      setSortBy("priceAvg");
    } else {
      setSortBy("-priceAvg");
    }
  }

  return (
    <section className="fav">
      <h2 className="fav__title">Избранное</h2>
      <div className="fav__reorder">
        <button
          className={
            isRatingActive ? "fav__rating fav__rating_active" : "fav__rating"
          }
          onClick={onRatingClick}
        >
          <p
            className={
              isRatingActive ? "fav__text fav__text_active" : "fav__text"
            }
          >
            Рейтинг
          </p>
          <img
            className="fav__arrows"
            src={
              isRatingActive
                ? sortBy === "stars"
                  ? orderArrowsBottom
                  : orderArrowsTop
                : orderArrowsDisabled
            }
            alt="Стрелочки для фильтров"
            ref={ratingArrowsRef}
          ></img>
        </button>
        <button
          className={
            isRatingActive ? "fav__rating" : "fav__rating fav__rating_active"
          }
          onClick={onPriceClick}
        >
          <p
            className={
              isRatingActive ? "fav__text" : "fav__text fav__text_active"
            }
          >
            Цена
          </p>
          <img
            className="fav__arrows"
            src={
              isRatingActive
                ? orderArrowsDisabled
                : sortBy === "priceAvg"
                ? orderArrowsBottom
                : orderArrowsTop
            }
            alt="Стрелочки для фильтров"
            ref={priceArrowsRef}
          ></img>
        </button>
      </div>
      <div className="fav__hotels">
        {hotels.sort(dynamicSort(sortBy)).map((hotel) => {
          if (hotel.isLiked) {
            return (
              <HotelCard
                cardInfo={hotel}
                showPicture={false}
                key={hotel.hotelId}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default FavHotels;
