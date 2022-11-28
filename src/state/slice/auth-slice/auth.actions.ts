/** @format */

import { SignInFields } from './auth.interface'
/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { AuthServiceFront } from '../../../services/auth/auth.services'
import { SignUpFields } from './auth.interface'
import { AxiosError } from 'axios'

export const signUp = createAsyncThunk<{ user: any }, SignUpFields>(
  'auth/signUp',
  async ({ email, password, firstName, lastName }, thunkAPI): Promise<any> => {
    try {
      const response = await AuthServiceFront.signUpService(
        email,
        password,
        firstName,
        lastName
      )

      notifySuccess('Registration is successful')
      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const signIn = createAsyncThunk<{ user: any }, SignInFields>(
  'auth/signIn',
  async ({ email, password }, thunkAPI): Promise<any> => {
    try {
      const response = await AuthServiceFront.signInService(email, password)

      notifySuccess('Login is successful')
      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const authWithGoogle = createAsyncThunk(
  'users/google',
  async (credentialResponse: string, { rejectWithValue }) => {
    try {
      const response = await AuthServiceFront.googleAuth(credentialResponse)
      notifySuccess('Login is successful')
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)
