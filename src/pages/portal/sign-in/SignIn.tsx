/** @format */

import React from 'react'
import { Layout } from '../../../components/layout/Layout'
import SignInForm from '../../../components/signInForm/SignInForm'
import SliderLogin from '../../../ui/slider/SliderLogin'
// @ts-ignore:next-line
import styles from './SignIn.module.scss'
interface Props {}

const SignIn = (props: Props) => {
  return (
    <Layout>
      <div className={`${styles.container}`}>
        {/* <SliderLogin /> */}
        <SignInForm />
      </div>
    </Layout>
  )
}

export default SignIn
