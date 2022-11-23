/** @format */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../common/enums/app-routes.enum'
import Home from '../pages/home/Home'

const AuthTrueRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />}>
        <Route index element={<Home />} />
        <Route path={AppRoute.HOME} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AuthTrueRoutes
