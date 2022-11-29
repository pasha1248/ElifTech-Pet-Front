/** @format */

import * as authActions from './slice/auth-slice/auth.actions'
import * as forgotActions from './slice/forgot-password/forgot.actions'

export const rootAction = {
  ...authActions,
  ...forgotActions,
}
