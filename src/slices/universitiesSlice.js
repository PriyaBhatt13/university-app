import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
  loading: false,
  hasErrors: false,
  universities: []
};

export const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getUniversities: (state) =>{
      state.loading = true
    },
    getUniversitiesSuccess: (state, { payload }) => {
      console.log(payload);
      state.universities = payload
      state.loading = false
      state.hasErrors = false
    },
    getUniversitiesFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  }    
  });

export const { getUniversities, getUniversitiesSuccess, getUniversitiesFailure } = universitiesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const universitiesSelector = (state) => state.counter.universities;

export default universitiesSlice.reducer;
