/** @format */

import { configureStore } from '@reduxjs/toolkit'
import { api } from './api-rtk/api-rtk'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'
import AuthSlice from './slice/auth-slice/auth.slice'
import forgotPasswordSlice from './slice/forgot-password/forgot.slice'

export const store = configureStore({
  reducer: {
    authSlice: AuthSlice,
    forgotPasswordSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger).concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
