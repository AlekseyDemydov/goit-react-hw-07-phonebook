import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsReducer';

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
//   whitelist: ['items'],
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const myMiddlewar = store => next => action => {
  console.log('object');
  next(action);
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  myMiddlewar,
});

// export const persistor = persistStore(store);
export default store;
