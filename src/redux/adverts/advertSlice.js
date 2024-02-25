import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    changePage: (state, action) => {
      state.page += action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});
export const { changePage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
