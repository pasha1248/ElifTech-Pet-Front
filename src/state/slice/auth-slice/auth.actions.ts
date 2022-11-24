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
  async ({ login, password, firstName, lastName }, thunkAPI): Promise<any> => {
    try {
      const response = await AuthServiceFront.signUpService(
        login,
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
  async ({ login, password }, thunkAPI): Promise<any> => {
    console.log('signIn action', login)
    try {
      const response = await AuthServiceFront.signInService(login, password)

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
