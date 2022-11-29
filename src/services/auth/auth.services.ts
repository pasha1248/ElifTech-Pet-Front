/** @format */

import api from '../../api/axios'
import { IAuthData } from './auth.helper'

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
}
