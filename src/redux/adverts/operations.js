import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d66377f6967ba8e3be1291.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts, fetchAdverts',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMoreAdverts = createAsyncThunk(
  'adverts, addMore',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getByMake = createAsyncThunk(
//   'adverts, getByMake',
//   async ({make}, thunkAPI) => {
//     try {
//       const response = await axios.post(`/adverts?make=${make}`);
//       console.log(response.data);
//       return response.data;
      
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
