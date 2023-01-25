import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getLogInThunk = createAsyncThunk(
  'auth/authLogIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSignUpThunk = createAsyncThunk(
  'auth/authSingUp',
  async (user, thunkAPi) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  }
);

export const getLogOutThunk = createAsyncThunk(
  'auth/authLogOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('users/logout');
      token.unset();
      clearAuthHeader();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
