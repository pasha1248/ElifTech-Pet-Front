/** @format */

export interface IAuthData {
  user:
    | {
        id: string
        email: string
      }
    | null
    | undefined
  tokens: {
    access_token: string
    refresh_token: string
  }
}

export interface ISendCode {
  code: string
}
