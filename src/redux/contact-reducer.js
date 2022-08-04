import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { saveContact, deleteContact, filterContacts } from './contact-actions';

const items = createReducer([], {
  [saveContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({ items, filter });
