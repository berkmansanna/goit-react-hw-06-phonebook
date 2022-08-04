import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const saveContact = createAction('contact/save', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
export const deleteContact = createAction('contact/delete');
export const updateContacts = createAction('contacts/update');
export const filterContacts = createAction('contacts/filter');
