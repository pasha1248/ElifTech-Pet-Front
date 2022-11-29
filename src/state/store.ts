/** @format */

import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/auth-slice/auth.slice'
import forgotPasswordSlice from './slice/forgot-password/forgot.slice'

export const store = configureStore({
  reducer: {
    authSlice: AuthSlice,
    forgotPasswordSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
