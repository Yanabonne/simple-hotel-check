import React from "react";

function AuthForm({ navigateToHotels }) {
  const emailRef = React.useRef();
  const [emailInput, setEmailInput] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [emailInputError, setEmailInputError] = React.useState("");

  const passwordRef = React.useRef();
  const [passwordInput, setPasswordInput] = React.useState("");
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [passwordInputError, setPasswordInputError] = React.useState("");

  const regexp = /^[A-Za-z0-9. -_?]+$/;

  function updateEmail(email) {
    setEmailInput(email);
    validateEmail();
  }

  function validateEmail() {
    let isInputValid = true;
    let errorText = "";

    if (!emailRef.current.validity.valid) {
      errorText = emailRef.current.validationMessage;
      isInputValid = false;
    }

    setIsEmailValid(isInputValid);
    setEmailInputError(errorText);

    return isInputValid;
  }

  function updatePassword(pw) {
    setPasswordInput(pw);
    validatePassword(pw);
  }

  function validatePassword(pw) {
    let isInputValid = true;
    let errorText = "";

    if (!passwordRef.current.validity.valid) {
      errorText = passwordRef.current.validationMessage;
      isInputValid = false;
    } else if (!regexp.test(pw)) {
      errorText = "Используйте только латиницу и специальные символы в пароле.";
      isInputValid = false;
    }

    setIsPasswordValid(isInputValid);
    setPasswordInputError(errorText);

    return isInputValid;
  }

  function onSubmitForm(e) {
    e.preventDefault();
    if (validateEmail() & validatePassword()) {
      navigateToHotels();
    }
  }

  return (
    <form className="form" onSubmit={onSubmitForm} noValidate>
      <h2 className={isEmailValid ? "form__title" : "form__title form__red"}>
        Логин
      </h2>
      <input
        type="email"
        className={isEmailValid ? "form__input" : "form__input form__red"}
        name="email"
        required
        ref={emailRef}
        value={emailInput}
        onChange={(e) => {
          updateEmail(e.target.value);
          console.log("haha");
        }}
      />
      <span className="form__error">{emailInputError}</span>
      <h2 className={isPasswordValid ? "form__title" : "form__title form__red"}>
        Пароль
      </h2>
      <input
        type="password"
        className={isPasswordValid ? "form__input" : "form__input form__red"}
        name="password"
        minLength={8}
        required
        ref={passwordRef}
        value={passwordInput}
        onChange={(e) => updatePassword(e.target.value)}
      />
      <span className="form__error">{passwordInputError}</span>
      <button className="form__button" type="submit">
        Войти
      </button>
    </form>
  );
}

export default AuthForm;
