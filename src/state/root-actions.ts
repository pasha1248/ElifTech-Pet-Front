/** @format */

import * as authActions from './slice/auth-slice/auth.actions'
import * as forgotActions from './slice/forgot-password/forgot.actions'
import * as carSelectorActions from './slice/car-select-slice/car-select.actions'

export const rootAction = {
  ...authActions,
  ...forgotActions,
  ...carSelectorActions,
}
