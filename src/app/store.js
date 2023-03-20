import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
