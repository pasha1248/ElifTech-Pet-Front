/** @format */

import { ICreateNessageDto } from './messenger.interface'
/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { ChatService } from '../../../services/chat/chat.service'

export const createChat = createAsyncThunk(
  'chat/createChat',
  async (receiverId: string, { rejectWithValue }) => {
    try {
      const response = await ChatService.createChat(receiverId)

      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const getAllChats = createAsyncThunk(
  'chat/getAllChat',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ChatService.getAllUserChats()
      console.log(response)
      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const getOneChat = createAsyncThunk(
  'chat/getOneChat',
  async (chatId: string, { rejectWithValue }) => {
    try {
      const response = await ChatService.getOneChat(chatId)
      console.log(response)
      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const createMessage = createAsyncThunk(
  'chat/createMessage',
  async (
    {
      chatId,
      senderId,
      text,
      setNewMessage,
      socket,
      receiverId,
    }: ICreateNessageDto,
    { rejectWithValue }
  ) => {
    try {
      const response = await ChatService.createMessage({
        chatId,
        senderId,
        text,
      })
      console.log(response)
      const { message } = response
      setNewMessage('')
      socket.emit('sendMessage', { ...message, receiverId })

      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const deleteMessage = createAsyncThunk(
  'auth/deleteMessage',
  async (messageId: string, { rejectWithValue }) => {
    try {
      const response = await ChatService.deleteMessage(messageId)
      console.log(response)
      return response
    } catch (e) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return rejectWithValue(e.response?.data?.message)
      }
    }
  }
)
