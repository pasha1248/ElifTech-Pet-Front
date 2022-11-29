/** @format */

export interface IInputsSignIn {
  email: string
  password: string
}

export interface IInputsSignUp {
  email: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
}

export interface IForgotPassword {
  email: string
}
