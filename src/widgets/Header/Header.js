import React from "react";
import door from "../../images/exit.svg";

function Header({ navigateToAuth }) {
  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <div className="header__exit" onClick={navigateToAuth}>
        <p className="header__text">Выйти</p>
        <img
          className="header__door"
          src={door}
          alt="Кнопка выхода из аккаунта"
        />
      </div>
    </header>
  );
}

export default Header;
