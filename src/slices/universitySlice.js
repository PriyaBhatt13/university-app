import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  university: []
};

export const universitySlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
    getUniversity: (state) =>{
      state.loading = true
    },
    getUniversitySuccess: (state, { payload }) => {
      console.log(payload);
      state.university = payload
      state.loading = false
      state.hasErrors = false
    },
    getUniversityFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  }    
  });

export const { getUniversity, getUniversitySuccess, getUniversityFailure } = universitySlice.actions;

export const universitiesSelector = (state) => state.university;

export default universitySlice.reducer;
