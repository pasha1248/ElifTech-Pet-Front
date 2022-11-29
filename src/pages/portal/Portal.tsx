/** @format */

import React from 'react'
import { useActions } from '../../hooks/useActions'

type Props = {}

const Portal = (props: Props) => {
  const { logout } = useActions()

  // const logoutClick = () => {
  //    logout()
  // }

  return (
    <div>
      <button onClick={logout} style={{ width: '100px' }}>
        Logout
      </button>
    </div>
  )
}

export default Portal
