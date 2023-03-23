import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HotelsPage from "../pages/HotelsPage/HotelsPage";
import { getHotels } from "../store/HotelsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectBooking } from "../store/CurrentBookingSlice";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const booking = useSelector(selectBooking);
  const dispatch = useDispatch();

  function navigateToHotels() {
    setIsLoggedIn(true);
    navigate("hotels");
    // localStorage.setItem("isLoggedIn", true);
  }

  function navigateToAuth() {
    setIsLoggedIn(false);
    navigate("auth");
    // localStorage.setItem("isLoggedIn", false);
  }

  React.useEffect(() => {
    dispatch(
      getHotels({ city: booking.city, date: booking.date, days: booking.days })
    );
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    } else {
      localStorage.getItem("isLoggedIn", false);
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="auth"
          element={
            isLoggedIn ? (
              <Navigate to="hotels" />
            ) : (
              <AuthPage navigateToHotels={navigateToHotels} />
            )
          }
        />
        <Route
          path="hotels"
          element={
            isLoggedIn ? (
              <HotelsPage navigateToAuth={navigateToAuth} />
            ) : (
              <Navigate to="auth" />
            )
          }
        />
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
