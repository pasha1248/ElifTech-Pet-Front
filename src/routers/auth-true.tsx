/** @format */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../common/enums/app-routes.enum'
import Home from '../pages/home/Home'
import Portal from '../pages/portal/Portal'

const AuthTrueRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />}>
        <Route index element={<Portal />} />
        <Route path={AppRoute.PORTAL} element={<Portal />} />
      </Route>
    </Routes>
  )
}

export default AuthTrueRoutes
