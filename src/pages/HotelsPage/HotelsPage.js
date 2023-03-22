import React from "react";
import Header from "../../widgets/Header/Header";
import HotelsSearch from "../../widgets/HotelSearch/HotelsSearch";
import HotelsList from "../../widgets/HotelsList/HotelsList";
import FavHotels from "../../widgets/FavHotels/FavHotels";

function HotelsPage({ navigateToAuth }) {
  return (
    <>
      <Header navigateToAuth={navigateToAuth} />
      <div className="hotels">
        <div className="hotels__container">
          <HotelsSearch />
          <FavHotels />
        </div>
        <HotelsList />
      </div>
    </>
  );
}

export default HotelsPage;
