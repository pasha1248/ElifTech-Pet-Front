/** @format */

import React from 'react'
import { Layout } from '../../components/layout/Layout'
import RoadLoader from '../../components/loaders/roadLoader/RoadLoader'
import { useActions } from '../../hooks/useActions'

type Props = {}

const Portal = (props: Props) => {
  return <RoadLoader />
}

export default Portal
