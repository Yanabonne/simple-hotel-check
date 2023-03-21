import React from "react";
import {
  selectBooking,
  updateBookingData,
} from "../../store/CurrentBookingSlice";
import { useSelector, useDispatch } from "react-redux";

function HotelsSearch() {
  const cityRef = React.useRef();
  const dateRef = React.useRef();
  const daysRef = React.useRef();

  const booking = useSelector(selectBooking);
  const dispatch = useDispatch();

  function onSubmitButton(e) {
    e.preventDefault();

    dispatch(
      updateBookingData({
        city: cityRef.current.value,
        date: dateRef.current.value,
        days: daysRef.current.value,
      })
    );
    console.log(booking);
  }

  React.useEffect(() => {
    cityRef.current.value = booking.city;
    dateRef.current.value = booking.date;
    daysRef.current.value = booking.days;
  }, [booking]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={onSubmitButton}>
        <h2 className="search__title">Локация</h2>
        <input
          type="text"
          className="search__input"
          name="location"
          required
          ref={cityRef}
        />
        <h2 className="search__title">Дата заселения</h2>
        <input
          type="date"
          className="search__input"
          name="date"
          required
          ref={dateRef}
        />
        <h2 className="search__title">Количество дней</h2>
        <input
          type="number"
          className="search__input"
          name="days"
          required
          ref={daysRef}
        />
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
    </section>
  );
}

export default HotelsSearch;
