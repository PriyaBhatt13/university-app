import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from '../slices/universitiesSlice';
import universityReducer from '../slices/universitySlice';

export const store = configureStore({
  reducer: {
    universities: universitiesReducer,
    university: universityReducer
  },
});
