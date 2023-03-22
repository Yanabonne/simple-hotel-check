import React from "react";
import {
  selectBooking,
  updateBookingData,
} from "../../store/CurrentBookingSlice";
import { useSelector, useDispatch } from "react-redux";

function FavHotels() {
  const booking = useSelector(selectBooking);
  const dispatch = useDispatch();

  return (
    <section className="fav">
      <h2 className="fav__title">Избранное</h2>
      {/* <div className="list__hotels">
        {hotels.map((hotel) => (
          <HotelCard cardInfo={hotel} showPicture={true} key={hotel.hotelId} />
        ))}
      </div> */}
    </section>
  );
}

export default FavHotels;
