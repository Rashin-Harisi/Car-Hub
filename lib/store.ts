import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart/cartSlice'
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'cart',
  version: 1,
  storage : typeof window !== 'undefined' ? storage : null,
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