/** @format */

import React from 'react'

export interface IMultiForm {
  count: number
}

export const useMultiForm = ({ count }: IMultiForm) => {
  const [pageCount, setPageCount] = React.useState(count)
  const [page, setPage] = React.useState(0)

  const decrement = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }
  const increment = () => {
    if (page < count) {
      setPage(page + 1)
    }
  }

  return {
    totalPage: count,
    increment,
    decrement,
    page,
  }
}
