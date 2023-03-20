import React from "react";
import "./globalVariables.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="hotels" element />
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="hotels" /> : <Navigate to="auth" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
