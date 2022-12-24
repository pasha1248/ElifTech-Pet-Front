/** @format */

import { createSlice } from '@reduxjs/toolkit'
import { getProfileFromParam } from './user.actions'
import { IUser } from './user.interface'

interface IUserSlice {
  isLoading: boolean
  user: IUser | null | undefined
}

const initialState: IUserSlice = {
  isLoading: false,
  user: null,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInStore: (state, action) => {
      state.user = action.payload?.user
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getProfileFromParam.pending, state => {
        state.isLoading = true
      })
      .addCase(getProfileFromParam.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(getProfileFromParam.rejected, (state, action) => {
        state.isLoading = false
      })
    //
  },
})

export const { saveUserInStore } = UserSlice.actions

export default UserSlice.reducer
