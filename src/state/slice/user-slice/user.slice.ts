/** @format */

import { createSlice } from '@reduxjs/toolkit'
import { IUser } from './user.interface'

interface IUserSlice {
  isLoading: boolean
  user: IUser | null
}

const initialState: IUserSlice = {
  isLoading: false,
  user: null,
}

const UserSlice = createSlice({
  name: 'refreshPassword',
  initialState,
  reducers: {
    saveUserInStore: (state, action) => {
      state.user = action.payload?.user
    },
  },
})

export const { saveUserInStore } = UserSlice.actions

export default UserSlice.reducer
