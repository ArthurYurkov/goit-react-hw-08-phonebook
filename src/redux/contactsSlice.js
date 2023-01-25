import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './contactsThunk';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
        state.contacts.error = null;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
        state.contacts.error = null;
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
        state.contacts.error = null;
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { filterContacts } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
