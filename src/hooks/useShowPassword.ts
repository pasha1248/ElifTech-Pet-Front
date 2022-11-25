/** @format */

import React from 'react'

export const useShowPassword = () => {
  const [visible, setVisible] = React.useState<'text' | 'password' | string>(
    'password'
  )

  const makeVisible = () => {
    setVisible('text')
  }

  const makeNotVisible = () => {
    setVisible('password')
  }

  return {
    visible,
    setVisible,
    makeVisible,
    makeNotVisible,
  }
}
