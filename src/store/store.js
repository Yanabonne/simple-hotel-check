import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./HotelsSlice";
import bookingReducer from "./CurrentBookingSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    booking: bookingReducer,
  },
});
