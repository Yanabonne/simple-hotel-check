import React from "react";
import arrow from "../../images/arrow.svg";

function HotelsList() {
  return (
    <section className="list">
      <div className="list__head">
        <div className="list__city">
          <p className="list__text">Отели</p>
          <img className="list__arrow" src={arrow} alt="Стрелочка" />
          <p className="list__text">Москва</p>
        </div>
        <p className="list__date">21 марта 2023</p>
      </div>
    </section>
  );
}

export default HotelsList;
