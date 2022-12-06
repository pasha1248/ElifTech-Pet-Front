/** @format */

import React from 'react'
import SignInForm from '../../../components/signInForm/SignInForm'
import SliderLogin from '../../../ui/slider/SliderLogin'
// @ts-ignore:next-line
import styles from './SignIn.module.scss'
interface Props {}

const SignIn = (props: Props) => {
  return (
    <div className={`${styles.container}`}>
      {/* <SliderLogin /> */}
      <SignInForm />
    </div>
  )
}

export default SignIn
