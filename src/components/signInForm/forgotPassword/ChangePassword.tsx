/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../common/enums/app-routes.enum'
import Field from '../../../ui/fields/Field'
// @ts-ignorets-ignore
import styles from '../SignInForm.module.scss'

interface Props {}

const ChangePassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ code: string }>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<{ code: string }> = async data => {
    try {
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Refresh Password</h2>
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
  )
}

export default ChangePassword
