import { configureStore } from '@reduxjs/toolkit'
import { categoryReduser } from './reducers/categoryReduser'

export const store = configureStore({
  reducer: {
    // user: userReducer,
    category: categoryReduser
  }
})