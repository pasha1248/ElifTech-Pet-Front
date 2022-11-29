/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { EMAIL_RULE } from '../../../common/const/Regex'
import { AppRoute } from '../../../common/enums/app-routes.enum'
import { useActions } from '../../../hooks/useActions'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import Field from '../../../ui/fields/Field'
import { Layout } from '../../layout/Layout'
import { IForgotPassword } from '../auth.interface'
// @ts-ignore
import styles from '../SignInForm.module.scss'
import ChangePassword from './ChangePassword'

const CheckCode = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ code: string }>({ mode: 'onChange' })

  const { verifyCode } = useActions()
  const { accessChangePassword } = useAppSelector(
    state => state.forgotPasswordSlice
  )
  const onSubmit: SubmitHandler<{ code: string }> = async data => {
    try {
      verifyCode(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      {!accessChangePassword ? (
        <div className={styles.container}>
          <h2>Code check</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Field
              type='text'
              placeholder='code...'
              error={errors.code}
              {...register('code', {
                required: 'Please write code',
                minLength: {
                  value: 6,
                  message: 'Min length is 6 symbols',
                },
              })}
            />
            <div className={styles.forgotButtons}>
              <Link to={AppRoute.HOME}>Back</Link>
              <button>Send code</button>
            </div>
          </form>
        </div>
      ) : (
        <ChangePassword />
      )}
    </Layout>
  )
}

export default CheckCode
