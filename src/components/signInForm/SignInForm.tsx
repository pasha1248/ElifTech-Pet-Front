/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { EMAIL_RULE, PASSWORD_RULE } from '../../common/const/Regex'
import { AppRoute } from '../../common/enums/app-routes.enum'
import { useActions } from '../../hooks/useActions'
import Field from '../../ui/fields/Field'
// @ts-ignore
import styles from './SignInForm.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useShowPassword } from '../../hooks/useShowPassword'
import GoogleButton from './googleButton/GoogleButton'

interface Props {}

type Inputs = {
  email: string
  password: string
}

const SignInForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })

  const { signIn } = useActions()

  const { makeNotVisible, makeVisible, setVisible, visible } = useShowPassword()

  const {
    makeNotVisible: makeNotVisible2,
    makeVisible: makeVisible2,
    setVisible: setVisible2,
    visible: visible2,
  } = useShowPassword()

  const onSubmit: SubmitHandler<Inputs> = async data => signIn(data)
  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Field
          type='text'
          placeholder='email'
          error={errors.email}
          {...register('email', {
            required: 'Email is required',
            minLength: 3,
            pattern: {
              value: EMAIL_RULE,
              message: 'Email must be correct',
            },
          })}
        />
        <div className={styles.containerForPasswordField}>
          <Field
            type={visible}
            placeholder='Password'
            error={errors.password}
            {...register('password', {
              required: 'Password is required',
              minLength: 8,
              pattern: {
                value: PASSWORD_RULE,
                message: 'Password password must be stronger',
              },
            })}
          />
          <div className={styles.eye}>
            {visible === 'password' ? (
              <AiFillEye
                size={18}
                onClick={makeVisible}
                className={styles.eyeIcon}
              />
            ) : (
              <AiFillEyeInvisible
                size={18}
                onClick={makeNotVisible}
                className={styles.eyeIcon}
              />
            )}
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}
          >
            <Link to={AppRoute.SIGN_UP}>Sign up </Link>
            <button type='submit'>Send</button>
          </div>
          <GoogleButton />
        </div>
      </form>
    </div>
  )
}

export default SignInForm
