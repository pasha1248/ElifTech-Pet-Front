/** @format */

import React from 'react'
import { useAppSelector } from './hooks/ReduxHooks'
import Home from './pages/home/Home'
import SignIn from './pages/sign-in/SignIn'
import AuthFalseRoutes from './routers/auth-false'
import AuthTrueRoutes from './routers/auth-true'

function App() {
  const { isAuth } = useAppSelector(state => state.authSlice)

  return (
    <div className='App'>
      {isAuth ? <AuthTrueRoutes /> : <AuthFalseRoutes />}
    </div>
  )
}

export default App
