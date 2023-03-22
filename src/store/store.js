import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./HotelsSlice";
import bookingReducer from "./CurrentBookingSlice";
import favHotelsReducer from "./FavHotelsSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    booking: bookingReducer,
    favs: favHotelsReducer,
  },
});
