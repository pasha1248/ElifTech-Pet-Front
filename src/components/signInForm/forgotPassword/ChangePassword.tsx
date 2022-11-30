/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { PASSWORD_RULE } from '../../../common/const/Regex'
import { AppRoute } from '../../../common/enums/app-routes.enum'
import { useActions } from '../../../hooks/useActions'
import { useAppDispatch } from '../../../hooks/useReduxHooks'
import { useShowPassword } from '../../../hooks/useShowPassword'
import { accessChangeDisable } from '../../../state/slice/forgot-password/forgot.slice'
import Field from '../../../ui/fields/Field'
// @ts-ignorets-ignore
import styles from '../SignInForm.module.scss'

interface Props {}

const ChangePassword = (props: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ password: string; confirmPassword: string }>({
    mode: 'onChange',
  })

  const { makeNotVisible, makeVisible, setVisible, visible } = useShowPassword()

  const {
    makeNotVisible: makeNotVisible2,
    makeVisible: makeVisible2,
    setVisible: setVisible2,
    visible: visible2,
  } = useShowPassword()

  const { refreshPassword } = useActions()

  const onSubmit: SubmitHandler<{
    password: string
    confirmPassword: string
  }> = async data => {
    try {
      refreshPassword([data.password, navigate])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Refresh Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        <div className={styles.forgotButtons}>
          <Link
            to={AppRoute.HOME}
            onClick={() => dispatch(accessChangeDisable())}
          >
            Back
          </Link>
          <button>Send new password</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
