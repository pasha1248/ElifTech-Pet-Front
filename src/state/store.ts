/** @format */

import { configureStore } from '@reduxjs/toolkit'
import { api } from './api-rtk/api-rtk'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'
import AuthSlice from './slice/auth-slice/auth.slice'
import CarSelectSlice from './slice/car-select-slice/car-select.slice'
import forgotPasswordSlice from './slice/forgot-password/forgot.slice'
import userSlice from './slice/user-slice/user.slice'
// @ts-ignore
export const store = configureStore({
  reducer: {
    carSelectSlice: CarSelectSlice,
    authSlice: AuthSlice,
    forgotPasswordSlice,
    [api.reducerPath]: api.reducer,
    userSlice: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger).concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
