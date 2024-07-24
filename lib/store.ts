import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'


const persistConfig = {
  key: 'cart',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,cartReducer)


export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    }
  })


// Infer the type of makeStore
export type AppStore = typeof store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']