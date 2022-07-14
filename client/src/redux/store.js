import { configureStore } from '@reduxjs/toolkit'
import { categoryReduser } from './reducers/categoryReduser'
import { userReducer } from './reducers/userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReduser
  }
})