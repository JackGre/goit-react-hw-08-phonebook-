import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-reducer";
import logger from 'redux-logger';
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
import authSlice from '../redux/auth/auth-slice';


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user"]
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),    
    contacts: contactsReducer,
  },
   middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',

});

export const persistor = persistStore(store);


