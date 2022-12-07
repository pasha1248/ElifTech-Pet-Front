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
import cookieServices from '../../../services/cookie/cookie.services'
import { AppRoute } from '../../../common/enums/app-routes.enum'

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

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ([data, navidate]: any, { rejectWithValue }): Promise<any> => {
    try {
      const response = await AuthServiceFront.signInService(
        data.email,
        data.password
      )
      notifySuccess('Login is successful')
      navidate(AppRoute.HOME)

      cookieServices.set('auth', 'true', {
        maxAge: Number(process.env.REACT_APP_COOKIE_MAX_AGE),
      })
      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
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

      window.localStorage.setItem('auth', 'true')
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthServiceFront.logout()
      window.localStorage.removeItem('auth')
      notifySuccess('Have a good day!')
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

export const checkAuth = createAsyncThunk(
  'users/check',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthServiceFront.checkAuthAndRefresh()
      window.localStorage.setItem('auth', 'true')
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        // notifyError(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)
