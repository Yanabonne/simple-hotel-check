import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HotelsPage from "../pages/HotelsPage/HotelsPage";
import { getHotels, selectHotels } from "../store/HotelsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectBooking } from "../store/CurrentBookingSlice";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const booking = useSelector(selectBooking);
  const hotels = useSelector(selectHotels);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      getHotels({ city: booking.city, date: booking.date, days: booking.days })
    );
  }, []);

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
