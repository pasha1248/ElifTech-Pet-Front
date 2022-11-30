/** @format */

import {
  notifyInfo,
  notifySuccessSendCode,
} from './../../../common/notifications/notifications'
/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { IForgotPassword } from '../../../components/signInForm/auth.interface'
import { AuthServiceFront } from '../../../services/auth/auth.services'
import { AppRoute } from '../../../common/enums/app-routes.enum'
import { toast } from 'react-toastify'

export const checkEmailAndSendCode = createAsyncThunk(
  'users/checkEmailAndSendCode',
  async ([email, navidate]: any, { rejectWithValue }) => {
    const id = toast.loading('Please wait...')
    //do something else
    try {
      const response = await AuthServiceFront.checkEmailAndSendCode(email)
      notifySuccessSendCode(
        id,
        'The code has been sent successfully, you have 60 seconds'
      )

      window.sessionStorage.setItem('email', email.email)
      navidate(AppRoute.VERIFY_CODE)
      return { response, email }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.update(id, {
          render: 'Invalid Email',
          type: 'warning',
          isLoading: false,
          autoClose: 3000,
        })
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

export const checkEmailAndSendCodeAgain = createAsyncThunk(
  'users/checkEmailAndSendCodeAgain',
  async (_, { rejectWithValue }) => {
    const emailLocal = sessionStorage.getItem('email')?.toString()

    if (!emailLocal) {
      notifyInfo('Restart the page and try again')
    }
    try {
      const response = await AuthServiceFront.checkEmailAndSendCode(emailLocal)

      notifySuccess('The code has been sent successfully, you have 60 seconds')

      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

export const verifyCode = createAsyncThunk(
  'users/verifyCode',
  async (
    code: { code: string },
    { rejectWithValue }
  ): Promise<void | unknown> => {
    const email = window.sessionStorage.getItem('email')?.toString()

    try {
      await AuthServiceFront.verifyCode(code, email)
      notifySuccess('The code has been successfully verified')
    } catch (error) {
      if (error instanceof AxiosError) {
        notifyError(error.response?.data?.message)

        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

export const refreshPassword = createAsyncThunk(
  'users/refreshPassword',
  async ([newPassword, navigate]: any, { rejectWithValue }): Promise<any> => {
    const email =
      sessionStorage.getItem('email') &&
      sessionStorage.getItem('email')?.toString()
    if (!email) {
      notifyInfo('Restart the page and try again')
    }

    const id = toast.loading('Please wait...')

    try {
      await AuthServiceFront.refreshPassword(email, newPassword)
      notifySuccessSendCode(id, 'Update password has been sent successfully')
      navigate(AppRoute.HOME)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.update(id, {
          render: error.response?.data?.message,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        })

        return rejectWithValue(error.response?.data?.message)
      }
    }
  }
)

// export const authWithGoogle = createAsyncThunk(
//    'users/google',
//    async (credentialResponse: string, { rejectWithValue }) => {
//      try {
//        const response = await AuthServiceFront.googleAuth(credentialResponse)
//        notifySuccess('Login is successful')

//        window.localStorage.setItem('auth', 'true')
//        return response
//      } catch (error) {
//        if (error instanceof AxiosError) {
//          notifyError(error.response?.data?.message)
//          return rejectWithValue(error.response?.data?.message)
//        }
//      }
//    }
//  )
