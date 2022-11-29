/** @format */

import api from '../../api/axios'
import { IForgotPassword } from '../../components/signInForm/auth.interface'
import { IAuthData, ISendCode } from './auth.helper'

export const AuthServiceFront = {
  async signInService(email: string, password: string) {
    const response = await api.post<IAuthData>('auth/sign-in', {
      email,
      password,
    })

    return response.data
  },

  async signUpService(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    const response = await api.post<IAuthData>('auth/sign-up', {
      email,
      password,
      firstName,
      lastName,
    })

    return response.data
  },

  async googleAuth(credentialResponse: string) {
    const response = await api.post<IAuthData>('auth/google/auth', {
      token: credentialResponse,
    })

    return response.data
  },

  async logout() {
    return await api.get<void>('auth/logout')
  },

  async checkAuthAndRefresh() {
    const response = await api.get<IAuthData>('auth/refresh')

    return response.data
  },

  async checkEmailAndSendCode(
    email: IForgotPassword | string | null | undefined
  ) {
    const response = await api.post<ISendCode>('auth/forgot-password', email)
    return response.data
  },

  async verifyCode(code: { code: string }, email: string | undefined) {
    await api.post<void>('auth/verify-code', { code, email })
  },

  async refreshPassword(email: string | null | undefined, newPassword: string) {
    await api.post<void>('auth/refresh-password', { email, newPassword })
  },
}
