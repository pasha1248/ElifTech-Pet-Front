/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { EMAIL_RULE } from '../../../common/const/Regex'
import { AppRoute } from '../../../common/enums/app-routes.enum'
import { useActions } from '../../../hooks/useActions'
import Field from '../../../ui/fields/Field'
import { Layout } from '../../layout/Layout'
import { IForgotPassword } from '../auth.interface'
// @ts-ignore
import styles from '../SignInForm.module.scss'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForgotPassword>({ mode: 'onChange' })

  const { checkEmailAndSendCode } = useActions()

  const onSubmit: SubmitHandler<IForgotPassword> = async data => {
    try {
      checkEmailAndSendCode([data, navigate])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Forgot password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Field
            type='text'
            placeholder='email'
            error={errors.email}
            {...register('email', {
              required: 'Email is required',
              minLength: 5,
              pattern: {
                value: EMAIL_RULE,
                message: 'Email must be correct',
              },
            })}
          />
          <div className={styles.forgotButtons}>
            <Link to={AppRoute.HOME}>Back</Link>
            <button>Send code</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword
