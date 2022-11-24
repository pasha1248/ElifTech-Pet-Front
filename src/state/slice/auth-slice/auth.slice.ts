/** @format */

import { signIn } from './auth.actions'
/** @format */

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { signUp } from './auth.actions'

export interface CounterState {
  isAuth: boolean
  isLoading: boolean
  user: { id: string; number: string } | null
}

const initialState: CounterState = {
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
      .addCase(signUp.pending, (state, action) => {
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
        state.user = action.payload.user
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
      })
    //
    // builder.addCase(logout.fulfilled, state => {
    //   state.isLoading = false
    //   state.user = null
    //   state.accessToken = ''
    // })
  },
})

// Action creators are generated for each case reducer function
export const {} = AuthSlice.actions

export default AuthSlice.reducer
