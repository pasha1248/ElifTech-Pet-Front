/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { EMAIL_RULE, PASSWORD_RULE } from '../../common/const/Regex'
import { AppRoute } from '../../common/enums/app-routes.enum'
import { useActions } from '../../hooks/useActions'
import { useShowPassword } from '../../hooks/useShowPassword'
import Field from '../../ui/fields/Field'
//@ts-ignore
import styles from './SignUpForm.module.scss'

interface Props {}

type Inputs = {
  email: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
}

const SignUpForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })

  const { signUp } = useActions()

  const { makeNotVisible, makeVisible, setVisible, visible } = useShowPassword()

  const {
    makeNotVisible: makeNotVisible2,
    makeVisible: makeVisible2,
    setVisible: setVisible2,
    visible: visible2,
  } = useShowPassword()

  const onSubmit: SubmitHandler<Inputs> = async data =>
    signUp({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    })
  return (
    <div className={styles.container}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Field
          type='text'
          placeholder='First name'
          error={errors.firstName}
          {...register('firstName', {
            required: true,
            minLength: {
              value: 3,
              message: 'Min length is 3 symbols',
            },
          })}
        />

        <Field
          type='text'
          placeholder='Last name'
          error={errors.lastName}
          {...register('lastName', {
            required: true,
            minLength: {
              value: 3,
              message: 'Min length is 3 symbols',
            },
          })}
        />
        <Field
          type='text'
          placeholder='Email'
          error={errors.email}
          {...register('email', {
            required: 'Email is required',
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
        <div className={styles.containerForPasswordField}>
          <Field
            type={visible2}
            placeholder='Confirm password'
            error={errors.confirmPassword}
            {...register('confirmPassword', {
              required: 'Password is required',
              minLength: 8,
              pattern: {
                value: PASSWORD_RULE,
                message: 'Password password must be stronger',
              },
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do no match'
                }
              },
            })}
          />
          <div className={styles.eye}>
            {visible2 === 'password' ? (
              <AiFillEye
                size={18}
                onClick={makeVisible2}
                className={styles.eyeIcon}
              />
            ) : (
              <AiFillEyeInvisible
                size={18}
                onClick={makeNotVisible2}
                className={styles.eyeIcon}
              />
            )}
          </div>
        </div>

        <div className={styles.button}>
          <Link to={AppRoute.SIGN_IN}>Sign in</Link>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
