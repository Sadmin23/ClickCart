import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import rangeReducer from './filter/rangeSlice'
import searchReducer from './filter/searchSlice'
import cartReducer from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    range: rangeReducer,
    search: searchReducer,
    cart: cartReducer,
  },
})