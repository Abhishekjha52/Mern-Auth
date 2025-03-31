import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers ({user: userReducer}); //combine all reducers into one rootreducer and then use it in persist reducer

const persistConfig = {
  key: 'root',
  version: 1,
  storage, //this helps to store the user data in browser localstorage
};

const persistedReducer = persistReducer (persistConfig, rootReducer);

export const store = configureStore ({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ({
      serializableCheck: false,
    }),
});

export const persistor = persistStore (store);
