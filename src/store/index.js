import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import userReducer from './slices/user'

export const store = configureStore({
  reducer: {
    Auth: authReducer,
    User: userReducer,
  },
})