/** @format */

import { RootState } from './../store'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../slice/user-slice/user.interface'
import { api } from './api-rtk'
import { IFormAboutCarPhoto } from '../../components/profile/sidebar/aboutMyCars/FromAddPhotoCar'

export const carSelectApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCars: builder.query<IUser, any>({
      query: () => `${'user'}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    createCar: builder.mutation<any, any>({
      query: formData => ({
        url: `car`,
        body: formData,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
