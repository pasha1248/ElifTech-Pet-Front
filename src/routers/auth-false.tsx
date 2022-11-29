/** @format */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../common/enums/app-routes.enum'
import CheckCode from '../components/signInForm/forgotPassword/CheckCode'
import ForgotPassword from '../components/signInForm/forgotPassword/ForgotPassword'
import Home from '../pages/home/Home'
import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'

const AuthFalseRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />}>
        <Route index element={<SignIn />} />
        <Route path={AppRoute.SIGN_IN} element={<SignIn />} />
        <Route path={AppRoute.SIGN_UP} element={<SignUp />} />
        <Route path={AppRoute.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={AppRoute.VERIFY_CODE} element={<CheckCode />} />
      </Route>
    </Routes>
  )
}

export default AuthFalseRoutes
