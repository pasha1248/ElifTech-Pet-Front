/** @format */

import { IAllItemsForMainSearch } from '../../components/articles/article-item.interface'
import { IArticle, IUser } from '../slice/user-slice/user.interface'
import { api } from './api-rtk'

export const searchApi = api.injectEndpoints({
  endpoints: builder => ({
    getBySearchTerm: builder.query<IAllItemsForMainSearch[], string>({
      query: searchTerm => ({ url: `/${'search'}`, params: { searchTerm } }),
      providesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
