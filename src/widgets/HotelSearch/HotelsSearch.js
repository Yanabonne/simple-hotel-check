import React from "react";

function HotelsSearch() {
  return (
    <section className="search">
      <form className="search__form">
        <h2 className="search__title">Локация</h2>
        <input type="text" className="search__input" name="location" required />
        <h2 className="search__title">Дата заселения</h2>
        <input type="date" className="search__input" name="date" required />
        <h2 className="search__title">Количество дней</h2>
        <input type="number" className="search__input" name="days" required />
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
    </section>
  );
}

export default HotelsSearch;
