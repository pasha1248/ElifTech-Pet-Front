/** @format */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../common/enums/app-routes.enum'
import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'

const AuthFalseRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<SignIn />}>
        <Route index element={<SignIn />} />
        <Route path={AppRoute.SIGN_IN} element={<SignIn />} />
        <Route path={AppRoute.SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default AuthFalseRoutes
