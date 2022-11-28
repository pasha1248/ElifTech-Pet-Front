/** @format */

import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { notifyInfo } from '../../common/notifications/notifications'
import { Layout } from '../../components/layout/Layout'
import SignInForm from '../../components/signInForm/SignInForm'

interface Props {}

const SignIn = (props: Props) => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  )
}

export default SignIn