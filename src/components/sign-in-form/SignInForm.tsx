/** @format */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PASSWORD_RULE } from '../../common/const/Regex'
import { useActions } from '../../hooks/useActions'

interface Props {}

type Inputs = {
  login: string
  password: string
}

const SignInForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const { signIn } = useActions()

  const onSubmit: SubmitHandler<Inputs> = async data => await signIn(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Login'
          {...register('login', { required: true, minLength: 3 })}
        />
        {errors.login?.type === 'required' && (
          <p role='alert'>First name is required</p>
        )}

        <input
          type='text'
          placeholder='Password'
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: PASSWORD_RULE,
          })}
        />
        {errors.password?.type === 'required' && (
          <p role='alert'>First name is required</p>
        )}
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default SignInForm
