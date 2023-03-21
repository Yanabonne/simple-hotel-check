import React from "react";

function AuthPage() {
  return (
    <div className="auth">
      <div className="auth__blur"></div>
      <div className="auth__frame">
        <h1 className="auth__title">Simple Hotel Check</h1>
        <form className="auth__form">
          <h2 className="auth__subtitle">Логин</h2>
          <input type="email" className="auth__input" name="email" required />
          <span className="auth__error"></span>
          <h2 className="auth__subtitle">Пароль</h2>
          <input
            type="password"
            className="auth__input"
            name="password"
            required
          />
          <span className="auth__error"></span>
          <button className="auth__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
