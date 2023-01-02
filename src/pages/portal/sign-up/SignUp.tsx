/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import SignUpForm from '../../../components/signUpForm/SignUpFrom'
// @ts-ignore:next-line
import styles from '../sign-in/SignIn.module.scss'

interface Props {}

const SignUp = (props: Props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <SignUpForm />
      </div>
    </Layout>
  )
}

export default SignUp
