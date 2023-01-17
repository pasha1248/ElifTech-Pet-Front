/** @format */

import { createSlice } from '@reduxjs/toolkit'
import {
  createChat,
  createMessage,
  deleteMessage,
  getAllChats,
  getOneChat,
} from './messenger.actions'
import { IChat } from './messenger.interface'

export interface IMessageSlise {
  isLoading: boolean
  chat: IChat[]
  currentChat: IChat
  messages: any[]
  lastMessage: {}
  currentChatId: string
  onlineUser: []
}

const initialState: IMessageSlise = {
  isLoading: false,
  chat: [],
  currentChat: {} as IChat,
  messages: [] as any,
  lastMessage: {},
  currentChatId: '',
  onlineUser: [],
}

const MessengerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentChat(state, action) {
      state.currentChat = action.payload
    },
    addNewMessage(state, action) {
      console.log(action.payload)

      if (
        action.payload?.recieveMessage.chatId === state.currentChatId &&
        action.payload?.recieveMessage.senderId !==
          action.payload?.currentUserId
      ) {
        state.messages = [...state.messages, action.payload.recieveMessage]
      }
    },
    refershOnlineUser(state, action) {
      state.messages = action.payload
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
        state.currentChatId = action.payload['id']
        state.messages = action.payload['messages']

        console.log(state.messages)
      })
      .addCase(getOneChat.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(createMessage.pending, state => {
        state.isLoading = true
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false

        state.messages = [...state.messages, action.payload['message']]
        state.lastMessage = action.payload['message']
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(deleteMessage.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentChat = action.payload
        state.messages = action.payload['messages']

        console.log(state.messages)
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const { setCurrentChat, addNewMessage, refershOnlineUser } =
  MessengerSlice.actions

export default MessengerSlice.reducer
