/** @format */

import { createSlice } from '@reduxjs/toolkit'

export interface IOnlineUser {
  createdAt: string
  id: string

  idOnliteUser: string
  socketId: string
  updatedAt: string
}

export interface IInitialStateWebsocketSlice {
  onlineUsers: IOnlineUser[]
}

const initialState: IInitialStateWebsocketSlice = {
  onlineUsers: [],
}

const WebsocketSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload
    },
  },
})

export const { saveOnlineUsers } = WebsocketSlice.actions

export default WebsocketSlice.reducer
