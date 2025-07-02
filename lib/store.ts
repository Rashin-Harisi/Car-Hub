import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart/cartSlice'
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


//////////////////////////////////////////////////////////////////////////////////////////////////////
//creating storage in server side , because it is impossible to get access to local storage of user in Nodejs.
const createNoopStorage = () => {
  return {
    getItem(_key:any) {
      return Promise.resolve(null);
    },
    setItem(_key:any, value:any) {
      return Promise.resolve(value);
    },
    removeItem(_key:any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();
//////////////////////////////////////////////////////////////////////////////////////////////////////

const persistConfig = {
  key: 'cart',
  version: 1,
  storage : storage,
}

const persistedReducer = persistReducer(persistConfig,cartReducer)


export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  })


// Infer the type of makeStore
export type AppStore = typeof store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']