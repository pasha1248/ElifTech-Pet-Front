/** @format */

import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { notifyInfo } from '../../common/notifications/notifications'
import SignInForm from '../../components/sign-in-form/SignInForm'

interface Props {}

const SignIn = (props: Props) => {
  return (
    <div>
      <SignInForm />
    </div>
  )
}

export default SignIn
