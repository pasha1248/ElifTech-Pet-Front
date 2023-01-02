/** @format */

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../../components/layout/Layout'
import LoginLoader from '../../components/loaders/authLoader/LoginLoader'
import RoadLoader from '../../components/loaders/roadLoader/RoadLoader'
import { useAppSelector } from '../../hooks/useReduxHooks'

interface Props {}

const Home = (props: Props) => {
  const { isLoading } = useAppSelector(state => state.authSlice)
  return (
    <>
      {/* {' '}
      {isLoading ? (
        <LoginLoader />
      ) : ( */}
      <Outlet />
      <RoadLoader />
    </>
  )
}

export default Home
