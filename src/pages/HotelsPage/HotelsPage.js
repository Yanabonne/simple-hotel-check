import React from "react";
import Header from "../../widgets/Header/Header";
import HotelsSearch from "../../widgets/HotelSearch/HotelsSearch";
import HotelsList from "../../widgets/HotelsList/HotelsList";

function HotelsPage() {
  return (
    <>
      <Header />
      <div className="hotels">
        <div className="hotels__container">
          <HotelsSearch />
        </div>
        <HotelsList />
      </div>
    </>
  );
}

export default HotelsPage;
