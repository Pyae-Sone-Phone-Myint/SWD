import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './services/cartSlice'

export const store = configureStore({
  reducer: {
    cart : counterReducer
  },
})