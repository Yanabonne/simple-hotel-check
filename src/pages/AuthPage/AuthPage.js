import React from "react";
import AuthForm from "../../widgets/AuthForm/AuthForm";

function AuthPage({ navigateToHotels }) {
  return (
    <div className="auth">
      <div className="auth__blur"></div>
      <div className="auth__frame">
        <h1 className="auth__title">Simple Hotel Check</h1>
        <AuthForm navigateToHotels={navigateToHotels} />
      </div>
    </div>
  );
}

export default AuthPage;
