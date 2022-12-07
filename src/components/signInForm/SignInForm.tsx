/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { EMAIL_RULE, PASSWORD_RULE } from '../../common/const/Regex'
import { AppRoute } from '../../common/enums/app-routes.enum'
import { useActions } from '../../hooks/useActions'
import Field from '../../ui/fields/Field'
// @ts-ignore
import styles from './SignInForm.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useShowPassword } from '../../hooks/useShowPassword'
import GoogleButton from './googleButton/GoogleButton'
import classNames from 'classnames'
import { useAppDispatch } from '../../hooks/useReduxHooks'
import ForgotPassword from './forgotPassword/ForgotPassword'
import { IInputsSignIn } from './auth.interface'
import ButtonAuth from '../../ui/buttons/ButtonAuth'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

interface Props {}

const SignInForm = (props: Props) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputsSignIn>({ mode: 'onChange' })

  const { signIn } = useActions()

  const { makeNotVisible, makeVisible, setVisible, visible } = useShowPassword()

  const {
    makeNotVisible: makeNotVisible2,
    makeVisible: makeVisible2,
    setVisible: setVisible2,
    visible: visible2,
  } = useShowPassword()

  const onSubmit: SubmitHandler<IInputsSignIn> = async data => {
    try {
      signIn([data, navigate])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
            Email
          </h3>
          <Field
            type='text'
            placeholder='Email'
            error={errors.email}
            {...register('email', {
              required: 'Email is required',
              minLength: 3,
              pattern: {
                value: EMAIL_RULE,
                message: 'Email must be correct',
              },
            })}
          >
            <AiOutlineMail />
          </Field>
        </div>
        <div className={styles.containerForPasswordField}>
          <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
            Password
          </h3>

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
          >
            <RiLockPasswordLine />
          </Field>
          <div className={styles.eye}>
            {visible === 'password' ? (
              <AiFillEye onClick={makeVisible} className={styles.eyeIcon} />
            ) : (
              <AiFillEyeInvisible
                onClick={makeNotVisible}
                className={styles.eyeIcon}
              />
            )}
          </div>
        </div>
        <span className={styles.forgotButtons}>
          <Link to={AppRoute.FORGOT_PASSWORD}>Forgot password ? </Link>
        </span>
        <div className={styles.buttons}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <span className=''>
              Don't have an account?
              <Link to={AppRoute.SIGN_UP} className={'ml-2'}>
                Sign up{' '}
              </Link>
            </span>
            <ButtonAuth type='submit'>
              Login
              <BsFillArrowRightCircleFill className='ml-2' size={20} />
            </ButtonAuth>
          </div>
          <span className={styles.line}>or</span>

          <div className={styles.googleButton}>
            {<GoogleButton /> ? <GoogleButton /> : "You don't have internet"}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
