import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },

  reducers: {
    toggleFavorite: (state, action) => {
      const existingAdvert = state.favorites.find(
        favorite => favorite.id === action.payload.id
      );
      if (existingAdvert) {
        state.favorites = state.favorites.filter(
          favorite => favorite.id !== action.payload.id
        );
      } else {
        state.favorites.push({ ...action.payload, isFavorite: true });
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { toggleFavorite } = favoriteSlice.actions;
