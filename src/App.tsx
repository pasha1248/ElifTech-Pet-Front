/** @format */

import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from './hooks/useReduxHooks'

import AuthFalseRoutes from './routers/auth-false'
import AuthTrueRoutes from './routers/auth-true'
import 'react-toastify/dist/ReactToastify.css'
import cookieServices from './services/cookie/cookie.services'
import { useActions } from './hooks/useActions'

function App() {
  const { isAuth } = useAppSelector(state => state.authSlice)
  const { checkAuth } = useActions()

  React.useEffect(() => {
    if (window.localStorage.getItem('auth')) {
      console.log('refresh')
      checkAuth()
    }
  }, [])

  return (
    <div className='App'>
      <ToastContainer
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='light'
      />

      {isAuth ? <AuthTrueRoutes /> : <AuthFalseRoutes />}
    </div>
  )
}

export default App
