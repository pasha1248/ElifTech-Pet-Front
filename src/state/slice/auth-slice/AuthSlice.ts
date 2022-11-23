/** @format */

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isAuth: boolean
}

const initialState: CounterState = {
  isAuth: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = AuthSlice.actions

export default AuthSlice.reducer
