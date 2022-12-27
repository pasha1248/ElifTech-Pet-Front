/** @format */

import { createSlice } from '@reduxjs/toolkit'
import { createChat, getAllChats, getOneChat } from './messenger.actions'
import { IChat } from './messenger.interface'

export interface IMessageSlise {
  isLoading: boolean
  chat: IChat[]
  currentChat: IChat
}

const initialState: IMessageSlise = {
  isLoading: false,
  chat: [],
  currentChat: {} as IChat,
}

const MessengerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentChat(state, action) {
      state.currentChat = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(createChat.pending, state => {
        state.isLoading = true
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.isLoading = false
        state.chat = action.payload
      })
      .addCase(createChat.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(getAllChats.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.isLoading = false
        state.chat = action.payload
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(getOneChat.pending, state => {
        state.isLoading = true
      })
      .addCase(getOneChat.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentChat = action.payload
      })
      .addCase(getOneChat.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const { setCurrentChat } = MessengerSlice.actions

export default MessengerSlice.reducer
