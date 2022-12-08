/** @format */

import { authWithGoogle, checkAuth, logout, signIn } from './auth.actions'
/** @format */

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { signUp } from './auth.actions'
import { IAuthSlice } from './auth.interface'

const initialState: IAuthSlice = {
  isAuth: false,
  isLoading: false,
  user: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
      })
    //

    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuth = true
        state.user = action.payload.user
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
      })
    //
    builder
      .addCase(authWithGoogle.pending, state => {
        state.isLoading = true
      })
      .addCase(authWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload?.user

        state.isAuth = true
      })
      .addCase(authWithGoogle.rejected, (state, action) => {
        state.isLoading = false
        state.isAuth = false
      })
    //
    builder
      .addCase(logout.pending, state => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.isAuth = false
        state.user = null
      })
      .addCase(logout.rejected, state => {
        state.isLoading = false
      })
    //
    builder
      .addCase(checkAuth.pending, state => {
        state.isLoading = true
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload?.user
        state.isAuth = true
      })
      .addCase(checkAuth.rejected, state => {
        state.isLoading = false
        state.isAuth = false
      })
  },
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer
