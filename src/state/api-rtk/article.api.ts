/** @format */

/** @format */

import { IArticle, IArticleDto } from '../slice/user-slice/user.interface'
import { api } from './api-rtk'

export const articleApi = api.injectEndpoints({
  endpoints: builder => ({
    getArticleById: builder.query<IArticle, number>({
      query: id => `/${'video'}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Article', id }],
    }),

    createArticle: builder.mutation<string, void>({
      query: () => ({
        url: `/${'article'}`,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    updateArticle: builder.mutation<IArticle, IArticleDto>({
      query: ({ id, ...body }) => ({
        url: `/${'article'}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Article', id },
        { type: 'Profile' },
      ],
    }),
    updateViews: builder.mutation<IArticle, number>({
      query: id => ({
        url: `/${'article'}/update-views/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Article', id }],
    }),
    updateLikes: builder.mutation<IArticle, number>({
      query: id => ({
        url: `/${'article'}/update-likes/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Article', id }],
    }),
    deleteVideo: builder.mutation<void, number>({
      query: id => ({
        url: `/${'article'}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Article' }, { type: 'Profile' }],
    }),
  }),
})
