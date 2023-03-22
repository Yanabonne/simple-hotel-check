import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [],
};

export const favHotelsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    updateFavouriteHotels: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const { updateFavouriteHotels } = favHotelsSlice.actions;

export const selectFavHotels = (state) => state.favs;

export default favHotelsSlice.reducer;
