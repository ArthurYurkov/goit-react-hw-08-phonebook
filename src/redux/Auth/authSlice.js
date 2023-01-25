import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getLogInThunk, getLogOutThunk, getSignUpThunk } from './authThunk';

const initialState = {
  user: null,
  isLoading: false,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLogInThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLogInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(getLogInThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getSignUpThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSignUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(getSignUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getLogOutThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getLogOutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(getLogOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const persistAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
