import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import rangeReducer from './user/rangeSlice'
import searchReducer from './user/searchSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    range: rangeReducer,
    search: searchReducer,
  },
})