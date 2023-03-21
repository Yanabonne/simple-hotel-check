import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./HotelsSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
});
