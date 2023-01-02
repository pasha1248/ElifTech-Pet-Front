/** @format */

import { createSlice } from '@reduxjs/toolkit'

export interface IInitialStateWebsocketSlice {
  onlineUsers: []
}

const initialState = {
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
