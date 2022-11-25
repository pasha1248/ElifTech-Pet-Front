/** @format */

import React from 'react'
import { Layout } from '../../components/layout/Layout'
import SignUpForm from '../../components/signUpForm/SignUpFrom'

interface Props {}

const SignUp = (props: Props) => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  )
}

export default SignUp
