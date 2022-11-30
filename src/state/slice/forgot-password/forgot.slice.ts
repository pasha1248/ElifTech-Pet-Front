/** @format */

import { stat } from 'fs'
import { createSlice } from '@reduxjs/toolkit'
import {
  checkEmailAndSendCode,
  checkEmailAndSendCodeAgain,
  refreshPassword,
  verifyCode,
} from '../forgot-password/forgot.actions'
import { IInitialState } from './forgot.interface'

const initialState: IInitialState = {
  isLoading: false,
  accessChangePassword: false,
}
const forgotPasswordSlice = createSlice({
  name: 'refreshPassword',
  initialState,
  reducers: {
    accessChangeDisable(state) {
      state.accessChangePassword = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkEmailAndSendCode.pending, state => {
        state.isLoading = true
      })
      .addCase(checkEmailAndSendCode.fulfilled, (state, action) => {
        state.isLoading = false

        window.localStorage.setItem('email', action.payload?.['email'])
      })
      .addCase(checkEmailAndSendCode.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(checkEmailAndSendCodeAgain.pending, state => {
        state.isLoading = true
      })
      .addCase(checkEmailAndSendCodeAgain.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(checkEmailAndSendCodeAgain.rejected, (state, action) => {
        state.isLoading = false
      })
    //

    builder
      .addCase(verifyCode.pending, state => {
        state.isLoading = true
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.isLoading = false
        state.accessChangePassword = true
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.isLoading = false
        state.accessChangePassword = false
      })
    //
    builder
      .addCase(refreshPassword.pending, state => {
        state.isLoading = true
      })
      .addCase(refreshPassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.accessChangePassword = false
      })
      .addCase(refreshPassword.rejected, (state, action) => {
        state.isLoading = false
      })
    //
  },
})

export const { accessChangeDisable } = forgotPasswordSlice.actions

export default forgotPasswordSlice.reducer
