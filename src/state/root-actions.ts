/** @format */

import * as authActions from './slice/auth-slice/auth.actions'
import * as forgotActions from './slice/forgot-password/forgot.actions'
import * as carSelectorActions from './slice/car-select-slice/car-select.actions'
import * as userActions from './slice/user-slice/user.actions'
import * as chatActions from './slice/messanger/messenger.actions'

export const rootAction = {
  ...authActions,
  ...forgotActions,
  ...carSelectorActions,
  ...userActions,
  ...chatActions,
}
