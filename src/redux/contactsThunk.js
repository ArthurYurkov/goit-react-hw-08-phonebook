import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchDeleteContacts,
  fetchAddContacts,
} from './services';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (id, thunkAPI) => {
    try {
      const data = await fetchDeleteContacts(id);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/fetchAddContacts',
  async (contact, thunkAPI) => {
    try {
      const data = await fetchAddContacts(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
