/** @format */

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../../components/layout/Layout'

interface Props {}

const Home = (props: Props) => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default Home
