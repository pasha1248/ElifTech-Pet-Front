/** @format */

export interface SignInFields {
  data: {
    email: string
    password: string
  }

  navigate: () => void
}

export interface SignUpFields {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface IAuthSlice {
  isAuth: boolean
  isLoading: boolean
  user: { id: string; email: string } | null | undefined
}
