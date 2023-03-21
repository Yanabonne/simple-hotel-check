import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHotelsInfo } from "../shared/Api/Api";

const initialState = {
  hotels: [],
  status: "success",
};

export const getHotels = createAsyncThunk(
  "hotels/getHotels",
  async (city, date, days) => await getHotelsInfo(city, date, days)
);

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: {
    [getHotels.pending]: (state, action) => ({
      ...state,
      status: "loading",
    }),
    [getHotels.fulfilled]: (state, action) => ({
      hotels: action.payload,
      status: "success",
    }),
    [getHotels.rejected]: (state, action) => ({
      ...state,
      status: "failed",
    }),
  },
});

export const hotelsCount = (state) => state;

export default hotelsSlice.reducer;
