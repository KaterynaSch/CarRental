import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './adverts/advertSlice';
import { favoriteReducer } from './adverts/favoriteSlice';


// налаштування для redux-persist
const persistConfig = {
  key: 'favorites', // ключ для LS
  storage, // сховище для збереження даних
};

// persistReducer огортає favoritesReduser  з налаштуваннями persistConfig, що дозволяє зберігати стан в LS.
const persistedReducer = persistReducer(persistConfig, favoriteReducer );
// створення redux-stor
export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistedReducer
   
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
// створюємо persistor об'єкт для забезпечення збереження стану в LS
export const persistor = persistStore(store);
