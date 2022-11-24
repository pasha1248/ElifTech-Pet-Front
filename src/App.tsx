/** @format */

import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from './hooks/useReduxHooks'

import AuthFalseRoutes from './routers/auth-false'
import AuthTrueRoutes from './routers/auth-true'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { isAuth } = useAppSelector(state => state.authSlice)

  return (
    <div className='App'>
      <ToastContainer />

      {isAuth ? <AuthTrueRoutes /> : <AuthFalseRoutes />}
    </div>
  )
}

export default App
