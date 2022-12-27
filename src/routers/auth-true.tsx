/** @format */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { AppRoute } from '../common/enums/app-routes.enum'

import Home from '../pages/home/Home'
import MessangerPage from '../pages/messanger/MessangerPage'
import MyProfilePage from '../pages/my-profile/MyProfilePage'
import Portal from '../pages/portal/Portal'

const AuthTrueRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />}>
        <Route index element={<Portal />} />
        <Route path={AppRoute.PORTAL} element={<Portal />} />
        <Route path={AppRoute.MY_PROFILE} element={<MyProfilePage />} />
        <Route path={AppRoute.MESSANGER} element={<MessangerPage />} />
      </Route>
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default AuthTrueRoutes
