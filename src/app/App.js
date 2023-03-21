import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HotelsPage from "../pages/HotelsPage/HotelsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="app">
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="hotels" element={<HotelsPage />} />
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
