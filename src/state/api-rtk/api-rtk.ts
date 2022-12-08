/** @format */

import { RootState } from './../store'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../slice/user-slice/user.interface'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Article', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    credentials: 'include',
  }),

  endpoints: builder => ({
    getProfile: builder.query<IUser, any>({
      query: () => `${'user'}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    subscribeToChannel: builder.mutation<boolean, number>({
      query: channelId => ({
        url: `${'user'}/subscribe/${channelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
