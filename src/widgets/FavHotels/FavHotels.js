import React from "react";
import { selectHotels } from "../../store/HotelsSlice";
import HotelCard from "../../shared/HotelCard/HotelCard";
import { useSelector } from "react-redux";

function FavHotels() {
  const hotels = useSelector(selectHotels);

  return (
    <section className="fav">
      <h2 className="fav__title">Избранное</h2>
      <div className="fav__hotels">
        {hotels.map((hotel) => {
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
