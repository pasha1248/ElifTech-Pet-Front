/** @format */

import React, { ChangeEvent } from 'react'
import { useDebounce } from './useDebounce'
import { articleApi } from '../state/api-rtk/article.api'

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const debounceSearch = useDebounce(searchTerm, 500)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { data, isSuccess } = articleApi.useGetArticlesBySearchTermQuery(
    debounceSearch,
    {
      skip: !debounceSearch,
      selectFromResult: ({ data, ...rest }) => ({
        data: data?.slice(0, 4),
        ...rest,
      }),
    }
  )

  return {
    handleSearch,
    data,
    isSuccess,
    searchTerm,
  }
}
