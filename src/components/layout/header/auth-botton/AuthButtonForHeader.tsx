/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../../common/enums/app-routes.enum'
import ButtonAuth from '../../../../ui/buttons/ButtonAuth'

type Props = {}

const AuthButtonForHeader = (props: Props) => {
  return (
    <Link to={AppRoute.SIGN_IN}>
      <ButtonAuth>Sign in</ButtonAuth>
    </Link>
  )
}

export default AuthButtonForHeader
