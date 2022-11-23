/** @format */

import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/auth-slice/AuthSlice'

export const store = configureStore({
  reducer: {
    authSlice: AuthSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
