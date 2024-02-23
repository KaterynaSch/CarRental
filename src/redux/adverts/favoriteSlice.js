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
        // Remove from favorites if already in favorites

        state.favorites = state.favorites.filter(
          favorite => favorite.id !== action.payload.id
        );
      } else {
        // Add to favorites if not already in favorites
        state.favorites.push({ ...action.payload, isFavorite: true });
      }
    },
  },

  // reducers: {
  //   addToFavorites: (state, action) => {
  //     const existingAdvert = state.favorites.find(
  //       favorite => favorite.id === action.payload.id
  //     );
  //     if (!existingAdvert) {
  //      state.favorites.push({ ...action.payload, isFavorite: true });
  //     }
  //   },
  // },
  // deleteFromFavorites: (state, action) => {
  //   const filteredFavorites = state.favorites.filter(
  //     favorite => favorite.id !== action.payload.id
  //   );
  //   state.favorites = filteredFavorites;

  // },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { toggleFavorite } = favoriteSlice.actions;
