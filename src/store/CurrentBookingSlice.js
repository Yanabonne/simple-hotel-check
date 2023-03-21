import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
  date: new Date().toJSON().slice(0, 10),
  days: "1",
};

export const currentBookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateBookingData: (state, action) => {
      state.city = action.payload.city;
      state.date = action.payload.date;
      state.days = action.payload.days;
    },
  },
});

export const { updateBookingData } = currentBookingSlice.actions;

export const selectBooking = (state) => state.booking;

export default currentBookingSlice.reducer;
