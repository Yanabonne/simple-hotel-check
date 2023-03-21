import React from "react";
import house from "../../images/house.svg";

function HotelCard() {
  return (
    <article className="card">
      <img className="card__picture" alt="Домик" src={house}></img>
      <div className="card__container"></div>
    </article>
  );
}

export default HotelCard;
