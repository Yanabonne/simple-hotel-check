import React from "react";
import Header from "../../widgets/Header/Header";
import HotelsSearch from "../../widgets/HotelSearch/HotelsSearch";

function HotelsPage() {
  return (
    <>
      <Header />
      <div className="hotels">
        <div className="hotels__container">
          <HotelsSearch />
        </div>
      </div>
    </>
  );
}

export default HotelsPage;
