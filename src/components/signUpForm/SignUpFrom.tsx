/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { EMAIL_RULE, PASSWORD_RULE } from '../../common/const/Regex'
import { AppRoute } from '../../common/enums/app-routes.enum'
import { useActions } from '../../hooks/useActions'
import { useShowPassword } from '../../hooks/useShowPassword'
import ButtonAuth from '../../ui/buttons/ButtonAuth'
import Field from '../../ui/fields/Field'
import { IInputsSignUp } from '../signInForm/auth.interface'
//@ts-ignore
import styles from './SignUpForm.module.scss'
import { BiUser } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

interface Props {}

const SignUpForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IInputsSignUp>({ mode: 'onChange' })

  const { signUp } = useActions()

  const { makeNotVisible, makeVisible, setVisible, visible } = useShowPassword()

  const {
    makeNotVisible: makeNotVisible2,
    makeVisible: makeVisible2,
    setVisible: setVisible2,
    visible: visible2,
  } = useShowPassword()

  const onSubmit: SubmitHandler<IInputsSignUp> = async data =>
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
        <div>
          <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
            First name
          </h3>

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
          >
            <BiUser />
          </Field>
        </div>
        <div>
          <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
            Last name
          </h3>
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
          >
            <BiUser />
          </Field>
        </div>
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
        <div className={styles.containerForPasswordField}>
          <h3 className='text-start m-2 text-xl text-slate-50 font-semibold	'>
            Confirm password
          </h3>
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
          >
            <RiLockPasswordLine />
          </Field>
          <div className={styles.eye}>
            {visible2 === 'password' ? (
              <AiFillEye onClick={makeVisible2} className={styles.eyeIcon} />
            ) : (
              <AiFillEyeInvisible
                onClick={makeNotVisible2}
                className={styles.eyeIcon}
              />
            )}
          </div>
        </div>

        <div className={styles.button}>
          <span className=''>
            Already have an account?
            <Link to={AppRoute.SIGN_IN}>Sign in</Link>
          </span>
          <ButtonAuth type='submit'>Registration</ButtonAuth>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
