import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contact-reducer';
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

const alertMw = store => next => action => {
  if (action.type === 'contact/save') {
    const contact = action.payload;
    const items = store.getState().contacts.items;

    const onList = items.find(({ name }) => name === contact.name);

    if (onList) {
      alert('You saved this contact');
      return;
    }
  }

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  alertMw,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
