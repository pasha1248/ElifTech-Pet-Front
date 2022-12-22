/** @format */

import React, { ReactElement } from 'react'

// export interface IMultiForm {
//   count: number
// }

export const useMultiForm = (count: number) => {
  const [pageCount, setPageCount] = React.useState<number>(count)
  const [page, setPage] = React.useState(1)

  const decrement = () => {
    if (page > 1) {
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
    changePage: setPage,
  }
}
