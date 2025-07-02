'use client'

import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
}