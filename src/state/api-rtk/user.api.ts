/** @format */

import { IUser } from '../slice/user-slice/user.interface'
import { api } from './api-rtk'

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getProfileById: builder.query<IUser, any>({
      query: (id: string) => ({ url: `user/by-id/${id}` }),
      providesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
