import { createSlice } from '@reduxjs/toolkit';
import { addMoreAdverts, fetchAdverts, getAdvert } from './operations';

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
    advertsLimit: 12,
    isLoading: false,
    error: null,   
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(addMoreAdverts.pending, handlePending)
      .addCase(addMoreAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(addMoreAdverts.rejected, handleRejected)

      .addCase(getAdvert.pending, handlePending)
      .addCase(getAdvert.fulfilled, (state, action) => {
        state.adverts = state.adverts.find(
          advert => advert.id === action.payload.id
        );
      })
      .addCase(getAdvert.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
