/** @format */

import { RootState } from './../store'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../slice/user-slice/user.interface'

export const carSelectApi = createApi({
  reducerPath: 'carSelect',
  tagTypes: ['Article', 'Profile'],
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      return headers
    },
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
